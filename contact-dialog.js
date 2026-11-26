(() => {
  const trigger = document.querySelector('.contact-list [data-stat="contact-tg"]');
  const dialog = document.querySelector('#contact-dialog');
  if (!trigger || !dialog?.showModal) return;
  const idea = dialog.querySelector('#brief-idea');
  const reference = dialog.querySelector('#brief-reference');
  const draft = dialog.querySelector('#brief-draft');
  const direct = dialog.querySelector('#brief-direct');
  const close = dialog.querySelector('.brief-close');
  const english = () => document.documentElement.lang === 'en';
  function updateDraft() {
    const parts = [english() ? "Hi! I'd like to discuss a project." : 'Здравствуйте! Хочу обсудить проект.'];
    if (idea.value.trim()) parts.push(idea.value.trim());
    if (reference.value.trim()) parts.push((english() ? 'Reference: ' : 'Пример: ') + reference.value.trim());
    const url = new URL(trigger.href);
    url.searchParams.set('text',parts.join('\n\n'));
    draft.href = url.href;
  }
  trigger.removeAttribute('data-stat');
  trigger.setAttribute('aria-haspopup','dialog');
  trigger.addEventListener('click',event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const en = english();
    dialog.querySelector('h2').textContent = en ? 'Discuss a project' : 'Обсудить проект';
    dialog.querySelector('#brief-note').textContent = en ? 'Both fields are optional. Review and send your message in Telegram.' : 'Оба поля необязательны. Сообщение можно проверить и отправить в Telegram.';
    idea.labels[0].textContent = en ? 'What would you like to build?' : 'Что вы хотите сделать?';
    reference.labels[0].textContent = en ? 'Reference link' : 'Ссылка на пример';
    draft.textContent = en ? 'Open project brief in Telegram' : 'С заявкой в Telegram';
    direct.textContent = en ? 'Go straight to Telegram' : 'Сразу в Telegram';
    close.setAttribute('aria-label', en ? 'Close' : 'Закрыть');
    updateDraft();
    dialog.showModal();
  });
  dialog.addEventListener('input',updateDraft);
  close.addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
  dialog.addEventListener('wheel',event => event.stopPropagation());
  dialog.addEventListener('keydown',event => event.stopPropagation());
})();
