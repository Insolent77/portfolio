const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const translations = {
  ru: {
    title: 'INS — дизайн и разработка сайтов',
    description: 'INS — дизайн и разработка понятных сайтов и цифровых продуктов под ключ.',
    skipLink: 'Перейти к содержимому',
    backgroundLabel: 'Фон', glassLabel: 'Стекло',
    navProjects: 'Проекты', navApproach: 'Подход', navContacts: 'Контакты',
    availability: 'Открыт к проектам',
    heroKicker: 'Полный цикл разработки',
    heroArtNote: 'Ваша идея — готовый сайт',
    heroTitle: 'Сайты, в которых<br><em>легко разобраться.</em>',
    heroLead: 'Создаю спокойные и понятные цифровые продукты — от структуры и дизайна до кода, запуска и поддержки.',
    heroCta: 'Обсудить проект', heroWork: 'Посмотреть работы',
    factPlaceLabel: 'Работаю', factPlace: 'Удалённо', factFocusLabel: 'Фокус', factFocus: 'Польза + простота',
    scrollHint: 'Листайте страницу',
    projectsLabel: 'Портфолио',
    projectsTitle: 'Мои <em>проекты</em>',
    projectsIntro: 'Здесь можно посмотреть, что я уже сделал: сайты, приложения и небольшие инструменты для повседневных задач.',
    fullCycle: 'Полный цикл', webApp: 'Для разработчиков', browserExtension: 'Помощник в браузере',
    textMateTitle: 'TextMate — помощник с текстом',
    gitTitle: 'Git Time Machine — история проекта',
    alexDescription: 'Цифровая экосистема преподавателя: сайт, тестирование, электронные договоры, расписание, админ-панель и кабинет ученика.',
    gitDescription: 'Разработчики сохраняют изменения в коде с помощью Git. Со временем таких записей становится много, и разобраться в них непросто. Этот инструмент показывает историю проекта на карте: можно посмотреть, что менялось и как шла работа.',
    textMateDescription: 'Когда нужно поправить письмо, перевести абзац или сократить длинный текст, не обязательно открывать отдельный сервис. Выделяете нужный фрагмент на странице — TextMate помогает отредактировать его прямо в браузере.',
    inProgress: 'Место для нового', futureTitle: 'Ваш будущий сайт',
    futureDescription: 'Может быть, вы хотите рассказать о своём деле, принимать заявки или избавить себя от ручной работы. Напишите, что задумали. Вместе разберёмся, что для этого нужно и с чего начать.', futureCta: 'Обсудить проект',
    approachLabel: 'Подход', approachTitle: 'Один специалист.<br><em>Весь путь продукта.</em>',
    approachIntro: 'Вам не нужно координировать нескольких исполнителей. Я погружаюсь в задачу, создаю дизайн, пишу код и остаюсь рядом после запуска.',
    stepOneTitle: 'Понять задачу', stepOneCopy: 'Обсудим цель, пользователей и желаемый результат простыми словами.',
    stepTwoTitle: 'Собрать решение', stepTwoCopy: 'Продумую структуру, интерфейс и техническую основу как единую систему.',
    stepThreeTitle: 'Проверить и запустить', stepThreeCopy: 'Тестирую ключевые сценарии, публикую проект и передаю понятные инструкции.',
    stepFourTitle: 'Развивать дальше', stepFourCopy: 'Не исчезаю после запуска: проект можно поддерживать и постепенно улучшать.',
    principleOne: 'Понятный язык', principleTwo: 'Адаптив для любого экрана', principleThree: 'Без лишних функций',
    contactsLabel: 'Контакты', contactsTitle: 'Расскажите об идее,<br><em>и я помогу её реализовать</em>',
    contactsIntro: 'Напишите мне, что хотите сделать. Можно своими словами, с примерами или просто ссылкой на сайт, который вам нравится.',
    avitoText: 'Создание сайтов', footerText: 'Дизайн и разработка с вниманием к людям', backTop: 'Наверх ↑'
  },
  en: {
    title: 'INS — web design and development',
    description: 'INS — clear, thoughtful websites and digital products designed and developed end to end.',
    skipLink: 'Skip to content',
    backgroundLabel: 'Scene', glassLabel: 'Glass',
    navProjects: 'Projects', navApproach: 'Approach', navContacts: 'Contact',
    availability: 'Available for projects',
    heroKicker: 'Full-cycle development',
    heroArtNote: 'Your idea, brought to life',
    heroTitle: 'Websites that are<br><em>easy to understand.</em>',
    heroLead: 'I create calm and clear digital products — from structure and design to code, launch and ongoing support.',
    heroCta: 'Discuss a project', heroWork: 'View my work',
    factPlaceLabel: 'Working', factPlace: 'Remotely', factFocusLabel: 'Focus', factFocus: 'Value + clarity',
    scrollHint: 'Scroll the page',
    projectsLabel: 'Portfolio',
    projectsTitle: 'My <em>projects</em>',
    projectsIntro: 'Here are some things I’ve built: websites, apps and small tools for everyday tasks.',
    fullCycle: 'Full cycle', webApp: 'For developers', browserExtension: 'Browser helper',
    textMateTitle: 'TextMate — help with your writing',
    gitTitle: 'Git Time Machine — a project’s history',
    alexDescription: 'A digital ecosystem for a teacher: website, testing, e-contracts, schedule, admin panel and student portal.',
    gitDescription: 'Developers use Git to save changes to their code. Those records can get hard to follow as a project grows. This tool puts them on a map so you can explore what changed and how the work progressed.',
    textMateDescription: 'Need to tidy up an email, translate a paragraph or shorten a long passage? Select the text on a page and TextMate helps you edit it right in your browser.',
    inProgress: 'Space for a new project', futureTitle: 'Your next website',
    futureDescription: 'Maybe you want to introduce your business, receive enquiries or spend less time on repetitive work. Tell me what you have in mind. We’ll work out what you need and where to start.', futureCta: 'Discuss a project',
    approachLabel: 'Approach', approachTitle: 'One specialist.<br><em>The entire product journey.</em>',
    approachIntro: 'You do not need to coordinate several contractors. I understand the task, create the design, write the code and stay involved after launch.',
    stepOneTitle: 'Understand the task', stepOneCopy: 'We discuss the goal, users and desired outcome in plain language.',
    stepTwoTitle: 'Build the solution', stepTwoCopy: 'I design the structure, interface and technical foundation as one system.',
    stepThreeTitle: 'Test and launch', stepThreeCopy: 'I test the key journeys, publish the project and provide clear instructions.',
    stepFourTitle: 'Keep improving', stepFourCopy: 'I stay available after launch so the product can be supported and improved over time.',
    principleOne: 'Plain language', principleTwo: 'Responsive on every screen', principleThree: 'No unnecessary features',
    contactsLabel: 'Contact', contactsTitle: 'Tell me about your idea,<br><em>and I’ll help you build it</em>',
    contactsIntro: 'Send me a few words about what you’d like to make. Examples or a link to a website you like are welcome too.',
    avitoText: 'Website development', footerText: 'Design and development with people in mind', backTop: 'Back to top ↑'
  }
};

const appearanceNames = {
  ru: {
    background: { mist: 'Кремовый фон с голубым свечением', coffee: 'Тёмный кофейный фон', home: 'Домашний интерьер', glow: 'Абстрактный свет', cobalt: 'Кобальтовый фон' },
    glass: { porcelain: 'Светлое оформление с синими акцентами', dark: 'Тёмное стекло', milk: 'Молочное стекло', cocoa: 'Коричневое стекло', sand: 'Песочное стекло' }
  },
  en: {
    background: { mist: 'Cream background with a soft blue glow', coffee: 'Dark coffee background', home: 'Cozy home interior', glow: 'Abstract warm light', cobalt: 'Cobalt background' },
    glass: { porcelain: 'Light appearance with blue accents', dark: 'Dark glass', milk: 'Milky glass', cocoa: 'Cocoa glass', sand: 'Sand glass' }
  }
};

const soundLabels = {
  ru: { on: 'Выключить звуки', off: 'Включить звуки' },
  en: { on: 'Turn sounds off', off: 'Turn sounds on' }
};

const storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* File previews may block storage. */ }
  }
};

const params = new URLSearchParams(location.search);
const supportedLanguages = ['ru', 'en'];
const supportedBackgrounds = ['mist', 'coffee', 'home', 'glow', 'cobalt'];
const supportedGlass = ['porcelain', 'dark', 'milk', 'cocoa', 'sand'];

// Upgrade the former default pair once, preserving custom appearance choices.
if (!storage.get('portfolio-default-theme-studio-v1')) {
  if (storage.get('portfolio-background') === 'cobalt' && storage.get('portfolio-glass') === 'sand') {
    storage.set('portfolio-background', 'mist');
    storage.set('portfolio-glass', 'porcelain');
  }
  storage.set('portfolio-default-theme-studio-v1', '1');
}

let currentLanguage = supportedLanguages.includes(params.get('lang'))
  ? params.get('lang')
  : (supportedLanguages.includes(storage.get('portfolio-language')) ? storage.get('portfolio-language') : 'ru');

let currentBackground = supportedBackgrounds.includes(params.get('background'))
  ? params.get('background')
  : (supportedBackgrounds.includes(storage.get('portfolio-background')) ? storage.get('portfolio-background') : 'mist');

let currentGlass = supportedGlass.includes(params.get('glass'))
  ? params.get('glass')
  : (supportedGlass.includes(storage.get('portfolio-glass')) ? storage.get('portfolio-glass') : 'porcelain');

let soundEnabled = storage.get('portfolio-sound') !== 'off';
let audioContext = null;
let lastHoverSound = 0;
const soundToggle = document.querySelector('[data-sound-toggle]');

function setMeta(selector, value) {
  document.querySelector(selector)?.setAttribute('content', value);
}

function updateAppearanceLabels() {
  document.querySelectorAll('[data-background-choice]').forEach((button) => {
    const label = appearanceNames[currentLanguage].background[button.dataset.backgroundChoice];
    button.setAttribute('aria-label', label);
    button.title = label;
  });
  document.querySelectorAll('[data-glass-choice]').forEach((button) => {
    const label = appearanceNames[currentLanguage].glass[button.dataset.glassChoice];
    button.setAttribute('aria-label', label);
    button.title = label;
  });
}

function updateSoundToggle() {
  if (!soundToggle) return;
  const label = soundLabels[currentLanguage][soundEnabled ? 'on' : 'off'];
  soundToggle.classList.toggle('is-muted', !soundEnabled);
  soundToggle.setAttribute('aria-pressed', String(soundEnabled));
  soundToggle.setAttribute('aria-label', label);
  soundToggle.title = label;
}

function applyLanguage(language, persist = true) {
  currentLanguage = language === 'en' ? 'en' : 'ru';
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = copy.title;
  setMeta('meta[name="description"]', copy.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (typeof value === 'string') element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (typeof value === 'string') element.innerHTML = value;
  });
  document.querySelectorAll('[data-language-option]').forEach((option) => {
    option.classList.toggle('is-active', option.dataset.languageOption === currentLanguage);
  });
  updateAppearanceLabels();
  updateSoundToggle();
  if (persist) storage.set('portfolio-language', currentLanguage);
}

function applyBackground(background, persist = true) {
  currentBackground = supportedBackgrounds.includes(background) ? background : 'mist';
  document.body.dataset.background = currentBackground;
  document.querySelectorAll('[data-background-choice]').forEach((button) => {
    const active = button.dataset.backgroundChoice === currentBackground;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (persist) storage.set('portfolio-background', currentBackground);
}

function applyGlass(glass, persist = true) {
  currentGlass = supportedGlass.includes(glass) ? glass : 'porcelain';
  document.body.dataset.glass = currentGlass;
  setMeta('meta[name="theme-color"]', { porcelain: '#faf5ec', sand: '#f5e6ca', milk: '#f6eddd', dark: '#10100f', cocoa: '#241a14' }[currentGlass]);
  document.querySelectorAll('[data-glass-choice]').forEach((button) => {
    const active = button.dataset.glassChoice === currentGlass;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (persist) storage.set('portfolio-glass', currentGlass);
}

applyLanguage(currentLanguage, false);
applyBackground(currentBackground, false);
applyGlass(currentGlass, false);
updateSoundToggle();

function getAudioContext() {
  if (!soundEnabled) return null;
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioContext = new AudioContextClass({ latencyHint: 'interactive' });
  }
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  return audioContext;
}

function makeTone({ frequency, endFrequency, duration, volume, type = 'sine', delay = 0 }) {
  const context = getAudioContext();
  if (!context) return;
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(endFrequency || frequency, 30), start + duration);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1900, start);
  filter.Q.setValueAtTime(0.55, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.025);
}

function playSound(kind) {
  if (!soundEnabled) return;
  if (kind === 'hover') {
    const now = performance.now();
    if (now - lastHoverSound < 110) return;
    lastHoverSound = now;
    makeTone({ frequency: 610, endFrequency: 570, duration: 0.045, volume: 0.012, type: 'sine' });
    return;
  }
  if (kind === 'background') {
    makeTone({ frequency: 235, endFrequency: 285, duration: 0.11, volume: 0.025, type: 'sine' });
    makeTone({ frequency: 470, endFrequency: 525, duration: 0.09, volume: 0.008, type: 'sine', delay: 0.018 });
    return;
  }
  if (kind === 'glass') {
    makeTone({ frequency: 760, endFrequency: 920, duration: 0.12, volume: 0.014, type: 'sine' });
    makeTone({ frequency: 1140, endFrequency: 980, duration: 0.08, volume: 0.005, type: 'sine', delay: 0.012 });
    return;
  }
  if (kind === 'language') {
    makeTone({ frequency: 430, endFrequency: 510, duration: 0.075, volume: 0.018, type: 'sine' });
    return;
  }
  if (kind === 'open') {
    makeTone({ frequency: 330, endFrequency: 420, duration: 0.12, volume: 0.022, type: 'sine' });
    makeTone({ frequency: 495, endFrequency: 630, duration: 0.14, volume: 0.012, type: 'sine', delay: 0.035 });
    return;
  }
  makeTone({ frequency: 185, endFrequency: 150, duration: 0.075, volume: 0.026, type: 'triangle' });
}

document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
  playSound('language');
  applyLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
});
document.querySelectorAll('[data-background-choice]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.backgroundChoice === currentBackground) return;
    playSound('background');
    applyBackground(button.dataset.backgroundChoice);
  });
});
document.querySelectorAll('[data-glass-choice]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.glassChoice === currentGlass) return;
    playSound('glass');
    applyGlass(button.dataset.glassChoice);
  });
});

soundToggle?.addEventListener('click', () => {
  if (soundEnabled) {
    playSound('click');
    soundEnabled = false;
  } else {
    soundEnabled = true;
    playSound('glass');
  }
  storage.set('portfolio-sound', soundEnabled ? 'on' : 'off');
  updateSoundToggle();
});

const soundTargets = [...document.querySelectorAll('a, button')];
soundTargets.forEach((element) => {
  if (element === soundToggle) return;
  element.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;
    playSound('hover');
  });
  element.addEventListener('click', () => {
    if (element.matches('[data-background-choice], [data-glass-choice], [data-language-toggle]')) return;
    playSound(element.matches('.project__cover, .contact-list a, .button--primary, .inline-link') ? 'open' : 'click');
  });
});

const scrollContainer = document.querySelector('.scroll');
const sections = [...document.querySelectorAll('.scroll section[id]')];
const navLinks = [...document.querySelectorAll('[data-nav-link]')];

// The page itself is fixed, so wheel gestures made over the surrounding
// background or toolbar need to be forwarded to the content scroller.
let outsideScrollTarget = null;
let outsideScrollFrame = null;
let outsideScrollTime = 0;

function animateOutsideScroll(time) {
  if (!scrollContainer || outsideScrollTarget === null) return;

  const elapsed = Math.min(34, Math.max(1, time - outsideScrollTime));
  const distance = outsideScrollTarget - scrollContainer.scrollTop;

  if (Math.abs(distance) < 0.5) {
    scrollContainer.scrollTop = outsideScrollTarget;
    scrollContainer.classList.remove('is-outside-scrolling');
    outsideScrollTarget = null;
    outsideScrollFrame = null;
    return;
  }

  const progress = 1 - Math.pow(0.01, elapsed / 260);
  scrollContainer.scrollTop += distance * progress;
  outsideScrollTime = time;
  outsideScrollFrame = requestAnimationFrame(animateOutsideScroll);
}

window.addEventListener('wheel', (event) => {
  const targetIsInsideScroller = event.target instanceof Element && event.target.closest('.scroll');
  if (!scrollContainer || event.defaultPrevented) return;

  if (targetIsInsideScroller) {
    if (outsideScrollFrame !== null) cancelAnimationFrame(outsideScrollFrame);
    scrollContainer.classList.remove('is-outside-scrolling');
    outsideScrollTarget = null;
    outsideScrollFrame = null;
    return;
  }

  const unit = event.deltaMode === WheelEvent.DOM_DELTA_LINE
    ? 16
    : (event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? scrollContainer.clientHeight : 1);
  const delta = (Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX) * unit;
  if (!delta) return;

  const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  const start = outsideScrollTarget ?? scrollContainer.scrollTop;
  const nextScroll = Math.min(maxScroll, Math.max(0, start + delta));
  if (nextScroll === start) return;

  event.preventDefault();
  if (reducedMotion) {
    scrollContainer.classList.add('is-outside-scrolling');
    scrollContainer.scrollTop = nextScroll;
    scrollContainer.classList.remove('is-outside-scrolling');
    return;
  }

  outsideScrollTarget = nextScroll;
  if (outsideScrollFrame === null) {
    scrollContainer.classList.add('is-outside-scrolling');
    outsideScrollTime = performance.now();
    outsideScrollFrame = requestAnimationFrame(animateOutsideScroll);
  }
}, { passive: false });

function scrollToSection(target, behavior = 'smooth') {
  if (!target || !scrollContainer) return;
  const containerTop = scrollContainer.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;
  const top = scrollContainer.scrollTop + targetTop - containerTop;
  scrollContainer.scrollTo({ top, behavior });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target || !scrollContainer) return;
    event.preventDefault();
    scrollToSection(target, reducedMotion ? 'auto' : 'smooth');
  });
});

if ('IntersectionObserver' in window && scrollContainer) {
  const navigationObserver = new IntersectionObserver((entries) => {
    const activeEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!activeEntry) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${activeEntry.target.id}`);
    });
  }, { root: scrollContainer, rootMargin: '-18% 0px -64% 0px', threshold: [0.01, 0.2, 0.5] });
  sections.forEach((section) => navigationObserver.observe(section));
}

const revealItems = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && scrollContainer && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { root: scrollContainer, threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  revealItems.forEach((item, index) => {
    item.style.setProperty('--delay', `${(index % 3) * 65}ms`);
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const initialSection = params.get('section') || location.hash.replace(/^#/, '');

if (initialSection) {
  document.body.dataset.initialSection = initialSection;
  const openInitialSection = () => {
    const target = document.getElementById(initialSection);
    target?.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
    requestAnimationFrame(() => {
      scrollToSection(target, 'auto');
      target?.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  };
  setTimeout(openInitialSection, 80);
  setTimeout(openInitialSection, 650);
}
