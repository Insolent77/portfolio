document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const params = new URLSearchParams(location.search);
const qaMode = params.has('qa');
const loader = document.querySelector('.loader');

const translations = {
  en: {
    title: 'INS — Creative Developer',
    description: 'INS — creative developer. I design and build expressive digital products.',
    navAria: 'Main navigation', navAbout: '<span>01</span> about', navProjects: '<span>02</span> projects', navContact: '<span>03</span> contact',
    status: 'open for work', menu: 'menu', menuAria: 'Open menu', portraitAlt: 'Portrait of INS', brandAria: 'Back to the top', skillsAria: 'Skills', tickerAria: 'Areas of expertise', principlesAria: 'Working principles',
    heroTitleTop: 'CREATIVE', heroTitleBottom: 'DEVELOPER', bioTitle: 'IDEA.<br>DESIGN.<br><em>CODE.</em>',
    bioCopy: 'I create digital products where a distinctive visual language works together with thoughtful logic.',
    viewProjects: 'View<br>projects', aboutLabel: 'ABOUT / APPROACH',
    aboutTitle: 'Not just<br>“build a site.”<br><em>Create an experience.</em>',
    aboutLead: 'I combine design and development so the product feels expressive on the outside and logical within.',
    aboutCopy: 'I work from structure and user flows to typography, micro-animation and final implementation. I love systems that feel simple even when everything under the hood is complex.',
    principleOne: 'Clear<br>structure', principleTwo: 'Strong<br>visual idea', principleThree: 'Thoughtful<br>production code',
    projectsTitle: 'Selected<br><em>projects</em>',
    projectsIntro: 'Two products with two distinct personalities. What they share: attention to detail, logic and how the interface feels in use.',
    alexDescription: 'A digital ecosystem for an educator: public website, testing, student workspace, schedule, homework and analytics.',
    alexAria: 'Open Alex Educator project', eduPreview: 'Progress<br>without the noise.',
    gitDescription: "An interactive way to explore a Git project's history: commits, branches and changes become a clear visual timeline.",
    gitAria: 'Open Git Time Machine project', contactLabel: 'CONTACT / CONNECT', contactQuestion: 'Have an idea or a challenge?',
    contactTop: "LET'S", contactAction: 'TALK', contactCopy: 'Open to ambitious digital products, thoughtful collaborations and interesting challenges.',
    backTop: 'BACK TO TOP ↑', languageAria: 'Switch language',
    themeNames: { dark: 'dark', light: 'light', split: 'mixed' },
    themeAria: { dark: 'Dark theme. Activate to switch to light theme', light: 'Light theme. Activate to switch to mixed theme', split: 'Mixed theme. Activate to switch to dark theme' }
  },
  ru: {
    title: 'INS — Креативный разработчик',
    description: 'INS — креативный разработчик. Проектирую и создаю выразительные цифровые продукты.',
    navAria: 'Основная навигация', navAbout: '<span>01</span> обо мне', navProjects: '<span>02</span> проекты', navContact: '<span>03</span> контакты',
    status: 'открыт к проектам', menu: 'меню', menuAria: 'Открыть меню', portraitAlt: 'Портрет INS', brandAria: 'К началу страницы', skillsAria: 'Навыки', tickerAria: 'Направления работы', principlesAria: 'Принципы работы',
    heroTitleTop: 'CREATIVE', heroTitleBottom: 'DEVELOPER', bioTitle: 'ИДЕЯ.<br>ДИЗАЙН.<br><em>КОД.</em>',
    bioCopy: 'Создаю цифровые продукты, в которых характерный визуальный язык работает вместе с продуманной логикой.',
    viewProjects: 'Смотреть<br>проекты', aboutLabel: 'ABOUT / ПОДХОД',
    aboutTitle: 'Не просто<br>«сделать сайт».<br><em>Создать опыт.</em>',
    aboutLead: 'Я соединяю дизайн и разработку, чтобы продукт был выразительным снаружи и логичным внутри.',
    aboutCopy: 'Работаю от структуры и сценариев до типографики, микроанимаций и финальной реализации. Люблю системы, которые ощущаются простыми, даже если под капотом всё сложно.',
    principleOne: 'Ясная<br>структура', principleTwo: 'Сильная<br>визуальная идея', principleThree: 'Аккуратный<br>production-код',
    projectsTitle: 'Избранные<br><em>проекты</em>',
    projectsIntro: 'Два продукта — два разных характера. Общее: внимание к деталям, логике и тому, как интерфейс ощущается в работе.',
    alexDescription: 'Цифровая экосистема преподавателя: публичный сайт, тестирование, личный кабинет, расписание, домашние задания и аналитика.',
    alexAria: 'Открыть проект Alex Educator', eduPreview: 'Прогресс<br>без лишнего шума.',
    gitDescription: 'Интерактивный способ исследовать историю Git-проекта: коммиты, ветки и изменения превращаются в понятную временную карту.',
    gitAria: 'Открыть проект Git Time Machine', contactLabel: 'CONTACT / СВЯЗЬ', contactQuestion: 'Есть идея или задача?',
    contactTop: 'ДАВАЙТЕ', contactAction: 'ОБСУДИМ', contactCopy: 'Открыт к интересным digital-проектам, продуктовым задачам и сотрудничеству.',
    backTop: 'НАВЕРХ ↑', languageAria: 'Переключить язык',
    themeNames: { dark: 'тёмная', light: 'светлая', split: 'смешанная' },
    themeAria: { dark: 'Тёмная тема. Нажмите, чтобы включить светлую', light: 'Светлая тема. Нажмите, чтобы включить смешанную', split: 'Смешанная тема. Нажмите, чтобы включить тёмную' }
  }
};

const languageToggle = document.querySelector('[data-language-toggle]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('.theme-toggle__label');
const themeOrder = ['dark', 'light', 'split'];
const savedLanguage = localStorage.getItem('portfolio-language');
const savedTheme = localStorage.getItem('portfolio-theme');
const requestedLanguage = params.get('lang');
const requestedTheme = params.get('theme');
let currentLanguage = ['en', 'ru'].includes(requestedLanguage) ? requestedLanguage : (savedLanguage === 'ru' ? 'ru' : 'en');
let currentTheme = themeOrder.includes(requestedTheme) ? requestedTheme : (themeOrder.includes(savedTheme) ? savedTheme : 'dark');

function updateThemeControl() {
  themeLabel.textContent = translations[currentLanguage].themeNames[currentTheme];
  themeToggle.setAttribute('aria-label', translations[currentLanguage].themeAria[currentTheme]);
}

function applyLanguage(language, persist = true) {
  currentLanguage = language === 'ru' ? 'ru' : 'en';
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content', copy.description);
  document.querySelector('meta[property="og:description"]').setAttribute('content', copy.description);
  document.querySelectorAll('[data-i18n]').forEach((element) => element.textContent = copy[element.dataset.i18n]);
  document.querySelectorAll('[data-i18n-html]').forEach((element) => element.innerHTML = copy[element.dataset.i18nHtml]);
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => element.setAttribute('aria-label', copy[element.dataset.i18nAria]));
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => element.setAttribute('alt', copy[element.dataset.i18nAlt]));
  languageToggle.setAttribute('aria-label', copy.languageAria);
  languageToggle.querySelectorAll('[data-lang-option]').forEach((option) => option.classList.toggle('is-active', option.dataset.langOption === currentLanguage));
  updateThemeControl();
  if (persist) localStorage.setItem('portfolio-language', currentLanguage);
}

function applyTheme(theme, persist = true) {
  currentTheme = themeOrder.includes(theme) ? theme : 'dark';
  document.documentElement.dataset.theme = currentTheme;
  updateThemeControl();
  if (persist) localStorage.setItem('portfolio-theme', currentTheme);
}

applyLanguage(currentLanguage, false);
applyTheme(currentTheme, false);
languageToggle.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'ru' : 'en'));
themeToggle.addEventListener('click', () => applyTheme(themeOrder[(themeOrder.indexOf(currentTheme) + 1) % themeOrder.length]));

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
  const duration = 1100;
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    count.textContent = String(Math.round(eased * 100)).padStart(2, '0');
    bar.style.transform = `scaleX(${eased})`;
    progress < 1 ? requestAnimationFrame(tick) : finishIntro();
  };
  requestAnimationFrame(tick);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.setProperty('--delay', `${(index % 4) * 65}ms`);
  if (qaMode || reducedMotion) element.classList.add('is-visible');
  else revealObserver.observe(element);
});

const portraits = [...document.querySelectorAll('.portrait')];
const portraitWrap = document.querySelector('[data-portrait]');
const placeholder = document.querySelector('.portrait-placeholder');
const handlePortraitLoad = () => {
  portraitWrap.classList.add('has-image');
  placeholder.hidden = true;
};
portraits.forEach((portrait) => {
  portrait.addEventListener('load', handlePortraitLoad);
  portrait.addEventListener('error', () => portrait.hidden = true);
  if (portrait.complete && portrait.naturalWidth) handlePortraitLoad();
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());

const progressBar = document.querySelector('.scroll-progress i');
const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
let scrollTicking = false;
function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  if (!reducedMotion && innerWidth > 760) {
    parallaxItems.forEach((item) => {
      item.style.transform = `translate3d(${scrollY * Number(item.dataset.parallax)}px, 0, 0)`;
    });
  }
  scrollTicking = false;
}
addEventListener('scroll', () => {
  if (!scrollTicking) requestAnimationFrame(updateScroll);
  scrollTicking = true;
}, { passive: true });
updateScroll();

if (!coarsePointer && !reducedMotion) {
  const cursor = document.querySelector('.cursor-light');
  addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
    document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    cursor.classList.add('is-active');
  }, { passive: true });

  document.querySelectorAll('.magnetic').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    element.addEventListener('pointerleave', () => element.style.transform = '');
  });

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
      const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = '');
  });

  document.querySelector('.hero').addEventListener('pointermove', (event) => {
    const x = (event.clientX / innerWidth - 0.5) * 14;
    const y = (event.clientY / innerHeight - 0.5) * 10;
    portraitWrap.style.setProperty('--portrait-x', `${x}px`);
    portraitWrap.style.setProperty('--portrait-y', `${y}px`);
  });
}

document.querySelectorAll('[data-project-card]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--px', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--py', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
