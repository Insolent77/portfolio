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
let metricRequest = 0;
const exclude = document.querySelector('#exclude-browser');
function readExclusion() {
  try { exclude.checked = localStorage.getItem('ins-portfolio-exclude') === '1'; }
  catch { exclude.disabled = true; }
}
readExclusion();
window.addEventListener('storage', readExclusion);
exclude.onchange = () => {
  try { localStorage.setItem('ins-portfolio-exclude', exclude.checked ? '1' : '0'); }
  catch {
    exclude.checked = !exclude.checked;
    statusLine.textContent = 'Браузер не разрешил сохранить настройку.';
  }
};
async function showMetrics(from, to) {
  const id = ++metricRequest;
  const sessionVersion = version;
  const panel = document.querySelector('#metrics');
  panel.textContent = 'Загружаем показатели…';
  const {data, error} = await client.rpc('portfolio_period', {date_from:from,date_to:to});
  if (id !== metricRequest || sessionVersion !== version) return;
  if (error) {
    panel.textContent = error.code === 'PGRST202' ? 'Для расчёта конверсии обновите portfolio.sql в Supabase.' : 'Не удалось загрузить показатели.';
    return;
  }
  const {current,previous} = data;
  panel.replaceChildren();
  const date = value => new Date(value).toLocaleDateString('ru-RU',{timeZone:'UTC'});
  const number = new Intl.NumberFormat('ru-RU',{maximumFractionDigits:1});
  const delta = value => (value > 0 ? '+' : '') + number.format(value);
  function card(label,value,comparison,coverage) {
    const item = document.createElement('article');
    const headline = document.createElement('strong');
    const note = document.createElement('small');
    headline.textContent = value;
    note.textContent = comparison;
    item.append(label,headline,note);
    if (coverage) {
      const since = document.createElement('small');
      since.textContent = 'По данным с '+date(coverage);
      item.append(since);
    }
    panel.append(item);
  }
  const dates = date(previous.start)+' – '+date(previous.end);
  const unavailable = 'Недостаточно данных для сравнения';
  const hasVisits = current.visit_start <= current.end;
  const hasContacts = current.contact_start <= current.end;
  const comparableVisits = hasVisits && previous.visit_start === previous.start;
  const comparableContacts = hasContacts && previous.contact_start === previous.start;
  card('Уникальные посетители',hasVisits ? current.visitors : 'Нет данных',
    comparableVisits ? delta(current.visitors-previous.visitors)+' к периоду '+dates : unavailable,
    hasVisits && current.visit_start > from && current.visit_start);
  const rate = current.eligible ? 100*current.contacts/current.eligible : null;
  const oldRate = previous.eligible ? 100*previous.contacts/previous.eligible : null;
  let comparison = unavailable;
  if (comparableContacts) {
    comparison = 'Изменение числа посетителей, перешедших к контакту: '+delta(current.contacts-previous.contacts)+' ('+dates+')';
    if (rate !== null && oldRate !== null) comparison += ' · '+delta(rate-oldRate)+' п. п.';
  }
  card('Переход к контакту',hasContacts ? current.contacts+' из '+current.eligible+
    (rate === null ? '' : ' · '+number.format(rate)+' %') : 'Нет данных',
    comparison, hasContacts && current.contact_start > from && current.contact_start);
}
const primaryLabels = [
  'Первый экран · Обсудить проект',
  'Будущий сайт · Обсудить проект',
  'Первый экран · Посмотреть работы',
  'Контакты · Telegram',
  'Контакты · GitHub',
  'Контакты · Avito',
  'Будущий сайт · Обложка'
];
function renderControlGroup(selector, title, controls) {
  const body = document.querySelector(selector);
  body.replaceChildren();
  if (!controls.length) return;
  const header = document.createElement('th');
  header.scope = 'rowgroup';
  header.colSpan = 2;
  header.textContent = title;
  body.insertRow().append(header);
  for (const item of controls) {
    const row = body.insertRow();
    row.insertCell().textContent = item.label;
    row.insertCell().textContent = item.clicks;
  }
}
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
  const byLabel = new Map(data.controls.map(item => [item.label, item]));
  renderControlGroup('#primary-controls', 'Основные кнопки',
    primaryLabels.map(label => byLabel.get(label)).filter(Boolean));
  renderControlGroup('#other-controls', 'Остальные кнопки и ссылки',
    data.controls.filter(item => !primaryLabels.includes(item.label)));
  const filter = document.querySelector('#range-filter');
  const { from, to } = filter.elements;
  function applyRange() {
    to.setCustomValidity(from.value > to.value ? 'Дата окончания должна быть не раньше даты начала.' : '');
    if (filter.reportValidity()) {
      renderDailyChart(data.daily || [], data.controls, from.value, to.value);
      showMetrics(from.value,to.value);
    }
  }
  function currentWeek() {
    const today = new Intl.DateTimeFormat('sv-SE', {timeZone:'Europe/Moscow'}).format(new Date());
    const monday = new Date(today);
    monday.setUTCDate(monday.getUTCDate() - (monday.getUTCDay()+6)%7);
    from.value = monday.toISOString().slice(0,10);
    to.value = new Date(monday.getTime()+6*dayMs).toISOString().slice(0,10);
    applyRange();
  }
  filter.oninput = () => to.setCustomValidity('');
  filter.onsubmit = event => { event.preventDefault(); applyRange(); };
  document.querySelector('#this-week').onclick = currentWeek;
  currentWeek();
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
