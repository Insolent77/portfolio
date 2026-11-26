(() => {
  const { url, key } = window.portfolioSupabase;
  if (!url || !key) return;
  let visitor = crypto.randomUUID();
  try {
    const storageKey = 'ins-portfolio-visitor';
    visitor = localStorage.getItem(storageKey) || visitor;
    localStorage.setItem(storageKey, visitor);
  } catch { /* Storage is optional. */ }

  function record(control) {
    fetch(url + '/rest/v1/rpc/portfolio_record', {
      method: 'POST', keepalive: true,
      headers: { apikey: key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitor, control })
    }).catch(() => {});
  }
  record(null);
  document.addEventListener('click', event => {
    const control = event.target.closest?.('[data-stat]');
    if (control) record(control.dataset.stat);
  }, true);
})();
