(() => {
  const extraTranslations = {
    ru: {
      appearanceToggle: 'Оформление',
      alexResultOne: 'Сайт + админ-панель + личный кабинет',
      alexResultTwo: 'Полный цикл разработки',
      textMateResultOne: 'Работает прямо в браузере',
      textMateResultTwo: 'Локальные и облачные AI-модели',
      gitResultOne: 'Интерактивная визуализация истории Git',
      gitResultTwo: 'Ветки и коммиты в одном сценарии',
      futureResultOne: 'Сайт / сервис / автоматизация',
      futureResultTwo: 'Решение под конкретную задачу',
      trustTitle: 'Есть задача, но нет ТЗ? Нормально.',
      trustText: 'Опишите своими словами, что хотите получить — помогу сформулировать решение.'
    },
    en: {
      appearanceToggle: 'Appearance',
      alexResultOne: 'Website + admin panel + student portal',
      alexResultTwo: 'Full-cycle development',
      textMateResultOne: 'Works directly in the browser',
      textMateResultTwo: 'Local and cloud AI models',
      gitResultOne: 'Interactive Git history visualization',
      gitResultTwo: 'Branches and commits in one flow',
      futureResultOne: 'Website / service / automation',
      futureResultTwo: 'A solution built around the task',
      trustTitle: 'Have a task but no specification? That’s fine.',
      trustText: 'Describe what you want in your own words — I’ll help turn it into a clear solution.'
    }
  };

  const updateExtraCopy = () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
    document.querySelectorAll('[data-extra-i18n]').forEach((node) => {
      const value = extraTranslations[lang][node.dataset.extraI18n];
      if (value) node.textContent = value;
    });
  };
  updateExtraCopy();
  new MutationObserver(updateExtraCopy).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  const appearanceWrap = document.querySelector('.appearance-wrap');
  const appearanceToggle = document.querySelector('[data-appearance-toggle]');
  appearanceToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = !appearanceWrap?.classList.contains('is-open');
    appearanceWrap?.classList.toggle('is-open', open);
    appearanceToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (!appearanceWrap?.contains(event.target)) {
      appearanceWrap?.classList.remove('is-open');
      appearanceToggle?.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      appearanceWrap?.classList.remove('is-open');
      appearanceToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  const scrollContainer = document.querySelector('.scroll');
  const scrollHint = document.querySelector('[data-scroll-hint]');
  const hideHint = () => {
    if (scrollContainer && scrollContainer.scrollTop > 36) scrollHint?.classList.add('is-hidden');
  };
  scrollContainer?.addEventListener('scroll', hideHint, { passive: true });
  hideHint();
})();