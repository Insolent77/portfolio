const form = document.querySelector('#login');
const report = document.querySelector('#report');
const statusLine = document.querySelector('#status');
const { url, key } = window.portfolioSupabase;
let token;
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.disabled = true;
  try {
    if (!url || !key) throw new Error('Подключение Supabase ещё не настроено.');
    statusLine.textContent = 'Проверяем доступ…';
    const headers = { apikey: key, 'Content-Type': 'application/json' };
    const login = await fetch(url + '/auth/v1/token?grant_type=password', {
      method: 'POST', headers, body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    form.elements.password.value = '';
    if (!login.ok) throw new Error('Вход не удался. Проверьте почту и пароль.');
    token = (await login.json()).access_token;
    const response = await fetch(url + '/rest/v1/rpc/portfolio_report', {
      method: 'POST', headers: { ...headers, Authorization: 'Bearer ' + token }, body: '{}', cache: 'no-store'
    });
    if (!response.ok) throw new Error('Нет доступа к отчёту или база недоступна.');
    const data = await response.json();
    document.querySelector('#visitors').textContent = data.visitors;
    const body = document.querySelector('tbody');
    body.replaceChildren();
    for (const item of data.controls) {
      const row = body.insertRow();
      row.insertCell().textContent = item.label;
      row.insertCell().textContent = item.clicks;
    }
    form.hidden = true;
    report.hidden = false;
    statusLine.textContent = '';
  } catch (error) {
    statusLine.textContent = error.message;
  } finally { button.disabled = false; }
});
document.querySelector('#logout').addEventListener('click', () => {
  fetch(url + '/auth/v1/logout', { method: 'POST', keepalive: true,
    headers: { apikey: key, Authorization: 'Bearer ' + token } }).catch(() => {});
  location.reload();
});
