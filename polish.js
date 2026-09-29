(() => {
  const extraTranslations = {
    ru: {
      appearanceToggle: 'Оформление',
      alexResultOne: 'Сайт + админ-панель + личный кабинет',
      alexResultTwo: 'Полный цикл разработки',
      textMateResultOne: 'Исправляет ошибки, переводит и сокращает текст',
      textMateResultTwo: 'Не нужно копировать текст в другой сервис',
      gitResultOne: 'Показывает изменения в порядке их появления',
      gitResultTwo: 'Помогает проследить разные направления работы',
      lomonosovType: 'Мобильное приложение',
      lomonosovTitle: 'Мой Ломоносов — всё для учёбы',
      autoTitle: 'Сайт автосервиса',
      lomonosovDescription: 'Приложение «Мой Ломоносов» для учеников, родителей и преподавателей. Здесь можно посмотреть расписание, найти домашнее задание, написать в чат и узнать, как идут дела с учёбой. Всё собрано в одном месте, чтобы нужное было под рукой.',
      lomonosovResultOne: 'Расписание и домашние задания под рукой',
      lomonosovResultTwo: 'Можно общаться и следить за успехами в учёбе',
      autoType: 'Сайт для бизнеса',
      autoDescription: 'Сайт автосервиса в Саратове. Собрал на одной странице услуги, контакты и карту, чтобы человек мог быстро узнать, с чем здесь помогут, позвонить и найти дорогу. Удобно открыть с телефона, когда помощь нужна прямо сейчас.',
      autoResultOne: 'Услуги и контакты на одной странице',
      autoResultTwo: 'Можно сразу позвонить или открыть карту',
      futureResultOne: 'Помогу разобраться, какой сайт вам нужен',
      futureResultTwo: 'Объясню, как всё устроено и как этим пользоваться',
      trustTitle: 'Есть задача, но нет тз — это нормально',
      trustText: 'Не нужно заранее разбираться в технических деталях. Расскажите, что хотите получить, а я помогу с остальным.'
    },
    en: {
      appearanceToggle: 'Appearance',
      alexResultOne: 'Website + admin panel + student portal',
      alexResultTwo: 'Full-cycle development',
      textMateResultOne: 'Corrects, translates and shortens text',
      textMateResultTwo: 'No need to copy text into another service',
      gitResultOne: 'See changes in the order they happened',
      gitResultTwo: 'Follow different lines of work',
      lomonosovType: 'Mobile application',
      lomonosovTitle: 'My Lomonosov — school in one app',
      autoTitle: 'A website for a car repair shop',
      lomonosovDescription: 'My Lomonosov is an app for students, parents and teachers. Check the timetable, find homework, send a message or see how learning is going. Everything is in one place and easy to reach.',
      lomonosovResultOne: 'Timetable and homework within easy reach',
      lomonosovResultTwo: 'Keep in touch and follow learning progress',
      autoType: 'Business website',
      autoDescription: 'A website for a car repair shop in Saratov. Services, contact details and a map are on one page, so visitors can see what the shop repairs, call and find their way there. Easy to open on a phone when help is needed.',
      autoResultOne: 'Services and contact details on one page',
      autoResultTwo: 'Call the shop or open the map directly',
      futureResultOne: 'I’ll help you work out what kind of website you need',
      futureResultTwo: 'I’ll explain how it works and how to use it',
      trustTitle: 'It’s okay to have a task without a written brief',
      trustText: 'You don’t need to figure out the technical details first. Tell me what you want to achieve, and I’ll help with the rest.'
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
      <div class="project__copy"><p class="project__meta"><span>04 / EDTECH APP</span><span data-extra-i18n="lomonosovType">Мобильное приложение</span></p><h3 data-extra-i18n="lomonosovTitle">Мой Ломоносов — всё для учёбы</h3><p data-extra-i18n="lomonosovDescription">Приложение «Мой Ломоносов» для учеников, родителей и преподавателей. Здесь можно посмотреть расписание, найти домашнее задание, написать в чат и узнать, как идут дела с учёбой. Всё собрано в одном месте, чтобы нужное было под рукой.</p><div class="project__results"><span data-extra-i18n="lomonosovResultOne">Расписание и домашние задания под рукой</span><span data-extra-i18n="lomonosovResultTwo">Можно общаться и следить за успехами в учёбе</span></div><ul aria-label="Технологии"><li>Expo</li><li>React Native</li><li>API</li><li>UX/UI</li></ul></div>`;
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
      <div class="project__copy"><p class="project__meta"><span>05 / BUSINESS LANDING</span><span data-extra-i18n="autoType">Сайт для бизнеса</span></p><h3 data-extra-i18n="autoTitle">Сайт автосервиса</h3><p data-extra-i18n="autoDescription">Сайт автосервиса в Саратове. Собрал на одной странице услуги, контакты и карту, чтобы человек мог быстро узнать, с чем здесь помогут, позвонить и найти дорогу. Удобно открыть с телефона, когда помощь нужна прямо сейчас.</p><div class="project__results"><span data-extra-i18n="autoResultOne">Услуги и контакты на одной странице</span><span data-extra-i18n="autoResultTwo">Можно сразу позвонить или открыть карту</span></div><ul aria-label="Технологии"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Responsive</li></ul></div>`;
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
