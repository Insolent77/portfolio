const form = document.querySelector('#login');
const report = document.querySelector('#report');
const logout = document.querySelector('#logout');
const statusLine = document.querySelector('#status');
const { url, key } = window.portfolioSupabase;
const client = supabase.createClient(url, key, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false,
    storageKey: 'ins-portfolio-stats-session' }
});
let activeUser;
let version = 0;
async function showSession(session) {
  const user = session?.user.id || null;
  if (activeUser === user) return;
  activeUser = user;
  const request = ++version;
  form.hidden = Boolean(user);
  report.hidden = true;
  logout.hidden = !user;
  statusLine.textContent = user ? 'Загружаем статистику…' : '';
  if (!user) return;
  const { data, error } = await client.rpc('portfolio_report');
  if (request !== version) return;
  if (error) {
    statusLine.textContent = 'Не удалось открыть отчёт. Проверьте соединение и доступ к статистике.';
    return;
  }
  document.querySelector('#visitors').textContent = data.visitors;
  const body = document.querySelector('tbody');
  body.replaceChildren();
  for (const item of data.controls) {
    const row = body.insertRow();
    row.insertCell().textContent = item.label;
    row.insertCell().textContent = item.clicks;
  }
  renderDailyChart(data.daily || []);
  report.hidden = false;
  statusLine.textContent = '';
}
client.auth.onAuthStateChange((_event, session) => {
  setTimeout(() => showSession(session), 0);
});
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.disabled = true;
  try {
    const { error } = await client.auth.signInWithPassword(Object.fromEntries(new FormData(form)));
    if (error) statusLine.textContent = 'Вход не удался. Проверьте почту, пароль и соединение.';
  } finally {
    form.elements.password.value = '';
    button.disabled = false;
  }
});
logout.addEventListener('click', async () => {
  logout.disabled = true;
  try {
    const { error } = await client.auth.signOut({ scope: 'local' });
    if (error) statusLine.textContent = 'Не удалось завершить сеанс. Повторите выход.';
  } finally { logout.disabled = false; }
});
