const params = new URLSearchParams(location.search);
const qaMode = params.get('qa') === '1';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

const translations = {
  ru: {
    title: 'INS — разработка сайтов под ключ',
    description: 'Разработка современных сайтов под ключ: дизайн, frontend, backend, админ-панели и личные кабинеты. Портфолио INS.',
    ogTitle: 'INS — сайты, которые работают на бизнес',
    ogDescription: 'Дизайн и разработка сайтов под ключ: от структуры и прототипа до запуска и поддержки.',
    skipLink: 'Перейти к содержимому', loading: 'ЗАПУСК',
    brandAria: 'Наверх', brandCopy: 'web design<br>& development', navAria: 'Основная навигация',
    navProjects: '<span>01</span> кейсы', navServices: '<span>02</span> услуги', navProcess: '<span>03</span> процесс', navContact: '<span>04</span> контакты',
    status: 'открыт к проектам', menu: 'меню', menuAria: 'Открыть меню', languageAria: 'Переключить язык',
    heroKicker: 'Веб-разработчик полного цикла', heroLocation: 'Удалённо · 2026',
    heroTitle: 'Сайты, которые<br><em>выглядят убедительно</em><br>и работают на бизнес',
    heroLead: 'Проектирую и разрабатываю современные сайты под ключ: от смысла и структуры до интерфейса, логики, запуска и поддержки.',
    heroPrimary: 'Обсудить проект', heroSecondary: 'Смотреть кейсы',
    proofAria: 'Ключевые преимущества', proofOne: 'проекта<br>в продакшене', proofTwo: 'специалист<br>на весь цикл', proofThree: 'адаптив<br>под устройства',
    portraitAlt: 'Веб-разработчик INS', availabilityLabel: 'Сейчас', availabilityTitle: 'Открыт к новым<br>проектам',
    availabilityCopy: 'Опишите задачу в Telegram — задам уточняющие вопросы и предложу формат работы.', availabilityCta: 'Написать',
    tickerAria: 'Направления работы', tickerOne: 'САЙТЫ ПОД КЛЮЧ', tickerTwo: 'АДМИН-ПАНЕЛИ', tickerThree: 'ЛИЧНЫЕ КАБИНЕТЫ',
    projectsLabel: 'КЕЙСЫ / РЕЗУЛЬТАТ', projectsEyebrow: 'Не просто красивые экраны',
    projectsTitle: 'Проекты с логикой,<br><em>которой пользуются</em>',
    projectsIntro: 'В каждом кейсе начинаю с задачи пользователя и бизнеса, затем собираю структуру, дизайн и рабочий продукт в единую систему.',
    fullCycle: 'ПОЛНЫЙ ЦИКЛ', webExperience: 'ВЕБ-ПРИЛОЖЕНИЕ', projectResult: 'Результат', openProject: 'Открыть проект',
    alexRole: 'Задача: объединить сайт преподавателя и рабочие процессы в одном продукте',
    alexDescription: 'Разработал цифровую экосистему: продающий сайт, тестирование, электронные договоры, админ-панель, личный кабинет ученика, расписание и домашние задания.',
    alexResult: 'Единая система вместо разрозненных ручных процессов', alexAria: 'Открыть проект Alex Educator', eduPreview: 'Учёба и управление<br>в одном окне.',
    gitRole: 'Задача: сделать историю проекта понятной без чтения десятков технических файлов',
    gitDescription: 'Создал браузерный инструмент, который превращает коммиты, ветки и изменения файлов в наглядную интерактивную временную карту.',
    gitResult: 'Историю разработки можно исследовать визуально и последовательно', gitAria: 'Открыть проект Git Time Machine',
    servicesLabel: 'УСЛУГИ / ФОРМАТЫ', servicesHeadNote: 'ПОНЯТНАЯ СМЕТА ДО СТАРТА', servicesEyebrow: 'От первой страницы до продукта',
    servicesTitle: 'Выберите масштаб.<br><em>Я соберу решение.</em>',
    servicesIntro: 'Стоимость зависит от объёма, логики и интеграций. До начала работ фиксируем задачу, состав проекта, этапы и ориентир по срокам.',
    serviceOneType: 'БЫСТРЫЙ ЗАПУСК', serviceOneTitle: 'Лендинг или сайт-визитка',
    serviceOneCopy: 'Для услуги, эксперта или нового направления: сильный первый экран, понятная структура, адаптив и форма связи.',
    serviceOneItemOne: 'Прототип и дизайн', serviceOneItemTwo: 'Разработка и адаптив', serviceOneItemThree: 'Базовая SEO-подготовка',
    popular: 'ПОПУЛЯРНЫЙ ФОРМАТ', serviceTwoType: 'БИЗНЕС-СИСТЕМА', serviceTwoTitle: 'Сайт с админ-панелью',
    serviceTwoCopy: 'Когда контент, заявки, каталог или статусы нужно управлять самостоятельно без правок в коде.',
    serviceTwoItemOne: 'Управление контентом', serviceTwoItemTwo: 'Формы, база данных, уведомления', serviceTwoItemThree: 'Роли, фильтры и статусы',
    serviceThreeType: 'ЦИФРОВОЙ ПРОДУКТ', serviceThreeTitle: 'Личный кабинет или сервис',
    serviceThreeCopy: 'Авторизация, пользовательские сценарии, расписание, оплаты, документы, аналитика и нестандартная логика.',
    serviceThreeItemOne: 'Проектирование сценариев', serviceThreeItemTwo: 'Frontend и backend', serviceThreeItemThree: 'Тестирование и запуск',
    from: 'от', servicesNote: '<strong>Уже есть сайт?</strong> Беру задачи на доработку, редизайн, автоматизацию и поддержку — от 2 000 ₽.', estimateTask: 'Оценить задачу',
    processLabel: 'ПРОЦЕСС / БЕЗ ХАОСА', processHeadNote: 'ВЫ ВИДИТЕ ПРОГРЕСС', processEyebrow: 'Понятно, что происходит на каждом этапе',
    processTitle: 'От сообщения<br><em>до работающего сайта</em>',
    processIntro: 'Без бесконечных согласований и технического тумана. Сначала фиксируем цель, потом последовательно собираем результат.',
    startDiscussion: 'Начать обсуждение',
    stepOneTitle: 'Разбираемся в задаче', stepOneCopy: 'Вы рассказываете о продукте, аудитории и цели. Я уточняю детали, предлагаю формат и составляю оценку.',
    stepTwoTitle: 'Проектируем структуру', stepTwoCopy: 'Определяем страницы, сценарии и содержание. Уже на этом этапе видно, как сайт будет вести пользователя к действию.',
    stepThreeTitle: 'Делаем дизайн и разработку', stepThreeCopy: 'Собираю визуальную систему и сразу учитываю адаптив, скорость, доступность и будущую поддержку.',
    stepFourTitle: 'Проверяем и запускаем', stepFourCopy: 'Тестирую ключевые сценарии, исправляю детали, переношу на хостинг и передаю понятные инструкции.',
    trustEyebrow: 'Что получает заказчик', trustTitle: 'Не набор экранов.<br><em>Рабочий инструмент.</em>',
    trustIntro: 'Дизайн должен привлекать внимание, но задача сайта — понятно объяснять ценность, вызывать доверие и помогать человеку сделать следующий шаг.',
    trustOneTitle: 'Фокус на цели', trustOneCopy: 'Каждый блок отвечает на вопрос клиента и ведёт к заявке, покупке или нужному действию.',
    trustTwoTitle: 'Современный адаптив', trustTwoCopy: 'Интерфейс остаётся аккуратным и удобным на телефоне, планшете и большом экране.',
    trustThreeTitle: 'Логика под задачу', trustThreeCopy: 'Формы, базы данных, роли, статусы и автоматизация создаются под реальный процесс, а не ради функции.',
    trustFourTitle: 'Поддержка после запуска', trustFourCopy: 'Не исчезаю после публикации: можно продолжить развитие сайта и подключить регулярную поддержку.',
    contactLabel: 'КОНТАКТ / СТАРТ', contactHeadNote: 'ВАША ИДЕЯ → РАБОЧИЙ ПРОДУКТ', contactQuestion: 'Есть задача, но пока непонятен объём?',
    contactTitle: 'Напишите.<br><em>Разложим по шагам.</em>',
    contactCopy: 'Пришлите ссылку, пример или просто опишите идею своими словами. Я уточню главное и предложу подходящий формат разработки.',
    contactPrompt: 'Для быстрой оценки напишите: что нужно сделать, для кого сайт и есть ли примеры, которые нравятся.',
    footerCopy: 'ДИЗАЙН + РАЗРАБОТКА С ФОКУСОМ НА РЕЗУЛЬТАТ', backTop: 'НАВЕРХ ↑', mobileCta: 'Обсудить проект',
    themeNames: { dark: 'тёмная', light: 'светлая' },
    themeAria: { dark: 'Тёмная тема. Нажмите, чтобы включить светлую', light: 'Светлая тема. Нажмите, чтобы включить тёмную' }
  },
  en: {
    title: 'INS — full-cycle web development',
    description: 'Modern websites built end to end: design, frontend, backend, admin panels and client portals. INS portfolio.',
    ogTitle: 'INS — websites built to work for business',
    ogDescription: 'Full-cycle web design and development: from structure and prototype to launch and support.',
    skipLink: 'Skip to content', loading: 'LAUNCH',
    brandAria: 'Back to top', brandCopy: 'web design<br>& development', navAria: 'Main navigation',
    navProjects: '<span>01</span> cases', navServices: '<span>02</span> services', navProcess: '<span>03</span> process', navContact: '<span>04</span> contact',
    status: 'open for projects', menu: 'menu', menuAria: 'Open menu', languageAria: 'Switch language',
    heroKicker: 'Full-cycle web developer', heroLocation: 'Remote · 2026',
    heroTitle: 'Websites that<br><em>look convincing</em><br>and work for business',
    heroLead: 'I design and build modern websites end to end: from positioning and structure to interface, logic, launch and support.',
    heroPrimary: 'Discuss a project', heroSecondary: 'View case studies',
    proofAria: 'Key advantages', proofOne: 'products<br>in production', proofTwo: 'specialist<br>for the full cycle', proofThree: 'responsive<br>on every device',
    portraitAlt: 'INS web developer', availabilityLabel: 'Now', availabilityTitle: 'Open for<br>new projects',
    availabilityCopy: 'Describe your task in Telegram — I will ask the right questions and suggest a suitable format.', availabilityCta: 'Message me',
    tickerAria: 'Areas of expertise', tickerOne: 'FULL-CYCLE WEBSITES', tickerTwo: 'ADMIN PANELS', tickerThree: 'CLIENT PORTALS',
    projectsLabel: 'CASES / OUTCOME', projectsEyebrow: 'More than polished screens',
    projectsTitle: 'Products with logic<br><em>people actually use</em>',
    projectsIntro: 'Every case starts with a user and business problem. I then bring structure, design and implementation into one coherent product.',
    fullCycle: 'FULL CYCLE', webExperience: 'WEB APPLICATION', projectResult: 'Outcome', openProject: 'Open project',
    alexRole: 'Challenge: bring an educator’s website and daily workflows into one product',
    alexDescription: 'Built a digital ecosystem: marketing website, testing, e-contracts, admin panel, student portal, schedule and homework workflows.',
    alexResult: 'One connected system instead of fragmented manual processes', alexAria: 'Open Alex Educator project', eduPreview: 'Learning and management<br>in one place.',
    gitRole: 'Challenge: make a project history understandable without reading dozens of technical files',
    gitDescription: 'Built a browser tool that turns commits, branches and file changes into a clear interactive timeline.',
    gitResult: 'Development history becomes visual, sequential and easy to explore', gitAria: 'Open Git Time Machine project',
    servicesLabel: 'SERVICES / FORMATS', servicesHeadNote: 'CLEAR SCOPE BEFORE START', servicesEyebrow: 'From one page to a full product',
    servicesTitle: 'Choose the scale.<br><em>I will build the solution.</em>',
    servicesIntro: 'Pricing depends on scope, logic and integrations. Before work starts, we agree on the task, deliverables, stages and timeline range.',
    serviceOneType: 'FAST LAUNCH', serviceOneTitle: 'Landing page or portfolio site',
    serviceOneCopy: 'For a service, expert or new direction: a strong hero, clear structure, responsive layout and a contact flow.',
    serviceOneItemOne: 'Prototype and visual design', serviceOneItemTwo: 'Development and responsive layout', serviceOneItemThree: 'Basic SEO setup',
    popular: 'POPULAR FORMAT', serviceTwoType: 'BUSINESS SYSTEM', serviceTwoTitle: 'Website with an admin panel',
    serviceTwoCopy: 'For content, leads, catalogs or statuses that need to be managed without editing code.',
    serviceTwoItemOne: 'Content management', serviceTwoItemTwo: 'Forms, database and notifications', serviceTwoItemThree: 'Roles, filters and statuses',
    serviceThreeType: 'DIGITAL PRODUCT', serviceThreeTitle: 'Client portal or web service',
    serviceThreeCopy: 'Authentication, user flows, schedules, payments, documents, analytics and custom business logic.',
    serviceThreeItemOne: 'User-flow design', serviceThreeItemTwo: 'Frontend and backend', serviceThreeItemThree: 'Testing and launch',
    from: 'from', servicesNote: '<strong>Already have a website?</strong> I also take redesign, automation, improvements and support tasks — from ₽2,000.', estimateTask: 'Estimate a task',
    processLabel: 'PROCESS / NO CHAOS', processHeadNote: 'YOU SEE THE PROGRESS', processEyebrow: 'Every stage is visible and understandable',
    processTitle: 'From the first message<br><em>to a working website</em>',
    processIntro: 'No endless approvals or technical fog. We define the goal first, then build the outcome step by step.',
    startDiscussion: 'Start a discussion',
    stepOneTitle: 'Understand the challenge', stepOneCopy: 'You explain the product, audience and goal. I clarify the details, propose a format and prepare an estimate.',
    stepTwoTitle: 'Design the structure', stepTwoCopy: 'We define pages, user flows and content. At this point, it is already clear how the website will lead users to action.',
    stepThreeTitle: 'Design and develop', stepThreeCopy: 'I build the visual system while accounting for responsive behavior, speed, accessibility and future support.',
    stepFourTitle: 'Test and launch', stepFourCopy: 'I test key flows, polish the details, deploy the site and provide clear handover instructions.',
    trustEyebrow: 'What the client gets', trustTitle: 'Not a set of screens.<br><em>A working tool.</em>',
    trustIntro: 'Design should earn attention, but a website must also explain value, build trust and help people take the next step.',
    trustOneTitle: 'Goal-oriented structure', trustOneCopy: 'Every section answers a customer question and moves them toward an inquiry, purchase or required action.',
    trustTwoTitle: 'Modern responsive design', trustTwoCopy: 'The interface stays polished and usable on phones, tablets, laptops and large screens.',
    trustThreeTitle: 'Logic built for the task', trustThreeCopy: 'Forms, databases, roles, statuses and automation are designed around the real process, not added for show.',
    trustFourTitle: 'Support after launch', trustFourCopy: 'I do not disappear after publishing: the product can keep evolving with ongoing support.',
    contactLabel: 'CONTACT / START', contactHeadNote: 'YOUR IDEA → WORKING PRODUCT', contactQuestion: 'Have a task but not sure about the scope?',
    contactTitle: 'Send a message.<br><em>We will break it down.</em>',
    contactCopy: 'Share a link, an example or simply describe the idea in your own words. I will clarify the essentials and suggest the right development format.',
    contactPrompt: 'For a quick estimate, include: what needs to be built, who it is for and any examples you like.',
    footerCopy: 'DESIGN + DEVELOPMENT FOCUSED ON OUTCOMES', backTop: 'BACK TO TOP ↑', mobileCta: 'Discuss a project',
    themeNames: { dark: 'dark', light: 'light' },
    themeAria: { dark: 'Dark theme. Press to switch to light', light: 'Light theme. Press to switch to dark' }
  }
};

const languageToggle = document.querySelector('[data-language-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('.theme-toggle__label');
const savedLanguage = localStorage.getItem('portfolio-language');
const savedTheme = localStorage.getItem('portfolio-theme');
const requestedLanguage = params.get('lang');
const requestedTheme = params.get('theme');
let currentLanguage = ['ru', 'en'].includes(requestedLanguage) ? requestedLanguage : (['ru', 'en'].includes(savedLanguage) ? savedLanguage : 'ru');
let currentTheme = ['dark', 'light'].includes(requestedTheme) ? requestedTheme : (['dark', 'light'].includes(savedTheme) ? savedTheme : 'dark');

function setMeta(selector, value) {
  document.querySelector(selector)?.setAttribute('content', value);
}

function updateThemeControl() {
  const copy = translations[currentLanguage];
  if (themeLabel) themeLabel.textContent = copy.themeNames[currentTheme];
  themeToggle?.setAttribute('aria-label', copy.themeAria[currentTheme]);
}

function applyLanguage(language, persist = true) {
  currentLanguage = language === 'en' ? 'en' : 'ru';
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = copy.title;
  setMeta('meta[name="description"]', copy.description);
  setMeta('meta[property="og:title"]', copy.ogTitle);
  setMeta('meta[property="og:description"]', copy.ogDescription);
  setMeta('meta[property="og:locale"]', currentLanguage === 'ru' ? 'ru_RU' : 'en_US');
  setMeta('meta[name="twitter:title"]', copy.ogTitle);
  setMeta('meta[name="twitter:description"]', copy.ogDescription);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (typeof value === 'string') element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (typeof value === 'string') element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (typeof value === 'string') element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (typeof value === 'string') element.setAttribute('alt', value);
  });
  languageToggle?.setAttribute('aria-label', copy.languageAria);
  languageToggle?.querySelectorAll('[data-lang-option]').forEach((option) => option.classList.toggle('is-active', option.dataset.langOption === currentLanguage));
  updateThemeControl();
  if (persist) localStorage.setItem('portfolio-language', currentLanguage);
}

function applyTheme(theme, persist = true) {
  currentTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = currentTheme;
  updateThemeControl();
  if (persist) localStorage.setItem('portfolio-theme', currentTheme);
}

applyLanguage(currentLanguage, false);
applyTheme(currentTheme, false);
languageToggle?.addEventListener('click', () => applyLanguage(currentLanguage === 'ru' ? 'en' : 'ru'));
themeToggle?.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));

const loader = document.querySelector('.loader');
document.body.classList.add('is-loading');
function finishIntro() {
  document.body.classList.remove('is-loading');
  loader?.classList.add('is-complete');
  window.setTimeout(() => loader?.remove(), reducedMotion || qaMode ? 0 : 900);
}
if (reducedMotion || qaMode) {
  finishIntro();
} else {
  const count = document.querySelector('.loader__count');
  const bar = document.querySelector('.loader__line i');
  const start = performance.now();
  const duration = 850;
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    if (count) count.textContent = String(Math.round(eased * 100)).padStart(2, '0');
    if (bar) bar.style.transform = `scaleX(${eased})`;
    progress < 1 ? requestAnimationFrame(tick) : finishIntro();
  };
  requestAnimationFrame(tick);
}

const revealElements = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !reducedMotion && !qaMode) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
  revealElements.forEach((element, index) => {
    element.style.setProperty('--delay', `${(index % 4) * 55}ms`);
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const portrait = document.querySelector('.portrait');
const portraitWrap = document.querySelector('[data-portrait]');
const handlePortraitLoad = () => portraitWrap?.classList.add('has-image');
portrait?.addEventListener('load', handlePortraitLoad);
portrait?.addEventListener('error', () => { portrait.hidden = true; });
if (portrait?.complete && portrait.naturalWidth) handlePortraitLoad();

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav?.classList.remove('is-open');
  menuButton?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open');
  menuButton.classList.toggle('is-open', Boolean(open));
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

const progressBar = document.querySelector('.scroll-progress i');
let scrollTicking = false;
function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  if (progressBar) progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  scrollTicking = false;
}
addEventListener('scroll', () => {
  if (!scrollTicking) requestAnimationFrame(updateScroll);
  scrollTicking = true;
}, { passive: true });
updateScroll();

const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('[data-nav-link]')];
if ('IntersectionObserver' in window && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.01, 0.2, 0.5] });
  sections.forEach((section) => sectionObserver.observe(section));
}

if (!coarsePointer && !reducedMotion) {
  const cursor = document.querySelector('.cursor-light');
  addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
    document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    cursor?.classList.add('is-active');
  }, { passive: true });

  document.querySelectorAll('.magnetic').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.1;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    element.addEventListener('pointerleave', () => { element.style.transform = ''; });
  });

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
      const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  document.querySelector('.hero')?.addEventListener('pointermove', (event) => {
    const x = (event.clientX / innerWidth - 0.5) * 10;
    const y = (event.clientY / innerHeight - 0.5) * 7;
    portraitWrap?.style.setProperty('--portrait-x', `${x}px`);
    portraitWrap?.style.setProperty('--portrait-y', `${y}px`);
  });
}

document.querySelectorAll('[data-project-card]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--px', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--py', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
