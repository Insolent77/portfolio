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
      lomonosovType: 'Мобильное приложение',
      lomonosovDescription: 'Личный кабинет «Мой Ломоносов» для учеников, родителей и преподавателей: домашние задания, чаты, расписание уроков, отчёты и учебная статистика в одном приложении.',
      lomonosovResultOne: 'ДЗ, чаты и расписание в одном месте',
      lomonosovResultTwo: 'Роли ученика, родителя и преподавателя',
      autoType: 'Одностраничный сайт',
      autoDescription: 'Промо-сайт автосервиса: услуги, преимущества, контакты и быстрые переходы к звонку, соцсетям и Яндекс.Картам.',
      autoResultOne: 'Адаптивный лендинг под телефон и ПК',
      autoResultTwo: 'Кликабельные контакты и карта',
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
      lomonosovType: 'Mobile application',
      lomonosovDescription: 'My Lomonosov is a personal learning app for students, parents and teachers with homework, chats, lesson schedules, reports and learning statistics in one place.',
      lomonosovResultOne: 'Homework, chats and schedule in one place',
      lomonosovResultTwo: 'Student, parent and teacher roles',
      autoType: 'One-page website',
      autoDescription: 'A promotional website for an auto service in Saratov with services, benefits, contacts and quick access to calls, social media and Yandex Maps.',
      autoResultOne: 'Responsive landing page for mobile and desktop',
      autoResultTwo: 'Clickable contacts and map',
      futureResultOne: 'Website / service / automation',
      futureResultTwo: 'A solution built around the task',
      trustTitle: 'Have a task but no specification? That’s fine.',
      trustText: 'Describe what you want in your own words — I’ll help turn it into a clear solution.'
    }
  };

  const projectList = document.querySelector('.project-list');
  let lomonosovCard = projectList?.querySelector('[data-project-lomonosov]');
  let autoCard = projectList?.querySelector('[data-project-auto]');

  if (projectList && !lomonosovCard) {
    const futureCard = [...projectList.querySelectorAll('.project')].find((card) => card.textContent.includes('YOUR PROJECT'));
    lomonosovCard = document.createElement('article');
    lomonosovCard.className = 'project reveal';
    lomonosovCard.dataset.projectLomonosov = '';
    lomonosovCard.innerHTML = `
      <a class="project__cover" href="https://lk.mylomonosov.ru/" target="_blank" rel="noreferrer" aria-label="Открыть Мой Ломоносов">
        <div class="preview project-preview project-preview--lomonosov" aria-hidden="true">
          <div class="project-preview__frame lomonosov-ui">
            <div class="lomonosov-ui__top"><span>МОЙ</span><b>Ломоносов</b></div>
            <div class="lomonosov-ui__panel lomonosov-ui__panel--homework"><small>ДЗ</small><i></i><i></i><i></i></div>
            <div class="lomonosov-ui__panel lomonosov-ui__panel--chat"><small>Чаты</small><i></i><i></i></div>
            <div class="lomonosov-ui__panel lomonosov-ui__panel--schedule"><small>Расписание</small><i></i><i></i><i></i></div>
            <div class="rubik" aria-hidden="true">
              <span class="rubik__piece rubik__piece--1">Л</span><span class="rubik__piece rubik__piece--2">О</span><span class="rubik__piece rubik__piece--3">М</span>
              <span class="rubik__piece rubik__piece--4">О</span><span class="rubik__piece rubik__piece--5">Н</span><span class="rubik__piece rubik__piece--6">О</span>
              <span class="rubik__piece rubik__piece--7">С</span><span class="rubik__piece rubik__piece--8">О</span><span class="rubik__piece rubik__piece--9">В</span>
              <em class="rubik__float rubik__float--1"></em><em class="rubik__float rubik__float--2"></em><em class="rubik__float rubik__float--3"></em>
            </div>
          </div>
        </div><span class="project__arrow">↗</span>
      </a>
      <div class="project__copy"><p class="project__meta"><span>04 / EDTECH APP</span><span data-extra-i18n="lomonosovType">Мобильное приложение</span></p><h3>Мой Ломоносов</h3><p data-extra-i18n="lomonosovDescription">Личный кабинет «Мой Ломоносов» для учеников, родителей и преподавателей: домашние задания, чаты, расписание уроков, отчёты и учебная статистика в одном приложении.</p><div class="project__results"><span data-extra-i18n="lomonosovResultOne">ДЗ, чаты и расписание в одном месте</span><span data-extra-i18n="lomonosovResultTwo">Роли ученика, родителя и преподавателя</span></div><ul aria-label="Технологии"><li>Expo</li><li>React Native</li><li>API</li><li>UX/UI</li></ul></div>`;
    if (futureCard) projectList.insertBefore(lomonosovCard, futureCard); else projectList.appendChild(lomonosovCard);
  }

  if (projectList && !autoCard) {
    const futureCard = [...projectList.querySelectorAll('.project')].find((card) => card.textContent.includes('YOUR PROJECT'));
    autoCard = document.createElement('article');
    autoCard.className = 'project reveal';
    autoCard.dataset.projectAuto = '';
    autoCard.innerHTML = `
      <a class="project__cover" href="https://insolent77.github.io/artemiy-site/" target="_blank" rel="noreferrer" aria-label="Открыть проект Автосервис">
        <div class="preview project-preview project-preview--auto" aria-hidden="true">
          <div class="project-preview__frame auto-ui">
            <div class="auto-ui__top"><span class="auto-ui__logo">АВТОСЕРВИС</span><i></i><i></i><i></i></div>
            <div class="auto-ui__copy"><small>РЕМОНТ АВТОМОБИЛЕЙ</small><strong>РЕМОНТ КУЗОВЩИНЫ</strong><strong class="auto-ui__accent">ГАЗЕЛЕЙ И ЛЕГКОВЫХ</strong><p></p><p></p></div>
            <div class="auto-ui__garage"><span class="auto-ui__car auto-ui__car--one"></span><span class="auto-ui__car auto-ui__car--two"></span><div class="auto-ui__lights"></div></div>
            <div class="auto-ui__services"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
        </div><span class="project__arrow">↗</span>
      </a>
      <div class="project__copy"><p class="project__meta"><span>05 / BUSINESS LANDING</span><span data-extra-i18n="autoType">Одностраничный сайт</span></p><h3>Автосервис</h3><p data-extra-i18n="autoDescription">Промо-сайт автосервиса: услуги, преимущества, контакты и быстрые переходы к звонку, соцсетям и Яндекс.Картам.</p><div class="project__results"><span data-extra-i18n="autoResultOne">Адаптивный лендинг под телефон и ПК</span><span data-extra-i18n="autoResultTwo">Кликабельные контакты и карта</span></div><ul aria-label="Технологии"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Responsive</li></ul></div>`;
    if (futureCard) projectList.insertBefore(autoCard, futureCard); else projectList.appendChild(autoCard);
  }

  const futureCard = projectList && [...projectList.querySelectorAll('.project')].find((card) => card.textContent.includes('YOUR PROJECT'));
  const futureMeta = futureCard?.querySelector('.project__meta span:first-child');
  if (futureMeta) futureMeta.textContent = '06 / YOUR PROJECT';

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

  const addedProjects = [lomonosovCard, autoCard].filter(Boolean);
  addedProjects.forEach((addedProject) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addedProject.classList.add('is-visible');
    } else if ('IntersectionObserver' in window && scrollContainer) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      }, { root: scrollContainer, threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      observer.observe(addedProject);
    } else {
      addedProject.classList.add('is-visible');
    }
  });

  const alexCarouselScript = document.createElement('script');
  alexCarouselScript.src = 'alex-carousel.js';
  alexCarouselScript.defer = true;
  document.body.appendChild(alexCarouselScript);
})();
