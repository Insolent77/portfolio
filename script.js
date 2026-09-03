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
    heroTitle: 'Сайты, в которых<br><em>легко разобраться.</em>',
    heroLead: 'Создаю спокойные и понятные цифровые продукты — от структуры и дизайна до кода, запуска и поддержки.',
    heroCta: 'Обсудить проект', heroWork: 'Посмотреть работы',
    factPlaceLabel: 'Работаю', factPlace: 'Удалённо', factFocusLabel: 'Фокус', factFocus: 'Польза + простота',
    scrollHint: 'Листайте внутри окна',
    projectsLabel: 'Избранные проекты',
    projectsTitle: 'Не просто страницы.<br><em>Рабочие системы.</em>',
    projectsIntro: 'В каждом проекте сначала разбираюсь в задаче, а затем соединяю содержание, интерфейс и разработку в одно целое.',
    fullCycle: 'Полный цикл', webApp: 'Веб-приложение', browserExtension: 'Расширение',
    alexDescription: 'Цифровая экосистема преподавателя: сайт, тестирование, электронные договоры, расписание, админ-панель и кабинет ученика.',
    gitDescription: 'Интерактивная временная карта, которая превращает историю коммитов и веток в понятный рассказ о развитии проекта.',
    textMateDescription: 'ИИ-расширение для работы с выделенным текстом: исправляет ошибки, переводит, сокращает и переписывает текст в нужном стиле — локально через Ollama или через облачный API.',
    inProgress: 'Место для нового', futureTitle: 'Здесь может быть ваш проект',
    futureDescription: 'Если вам нужен понятный сайт, сервис или нестандартный цифровой продукт — обсудим задачу и соберём решение под неё.', futureCta: 'Обсудить проект',
    approachLabel: 'Подход', approachTitle: 'Один специалист.<br><em>Весь путь продукта.</em>',
    approachIntro: 'Вам не нужно координировать нескольких исполнителей. Я погружаюсь в задачу, создаю дизайн, пишу код и остаюсь рядом после запуска.',
    stepOneTitle: 'Понять задачу', stepOneCopy: 'Обсудим цель, пользователей и желаемый результат простыми словами.',
    stepTwoTitle: 'Собрать решение', stepTwoCopy: 'Продумую структуру, интерфейс и техническую основу как единую систему.',
    stepThreeTitle: 'Проверить и запустить', stepThreeCopy: 'Тестирую ключевые сценарии, публикую проект и передаю понятные инструкции.',
    stepFourTitle: 'Развивать дальше', stepFourCopy: 'Не исчезаю после запуска: проект можно поддерживать и постепенно улучшать.',
    principleOne: 'Понятный язык', principleTwo: 'Адаптив для любого экрана', principleThree: 'Без лишних функций',
    contactsLabel: 'Контакты', contactsTitle: 'Расскажите об идее.<br><em>Начнём с разговора.</em>',
    contactsIntro: 'Техническое задание не обязательно. Опишите задачу своими словами — я уточню главное и предложу следующий шаг.',
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
    heroTitle: 'Websites that are<br><em>easy to understand.</em>',
    heroLead: 'I create calm and clear digital products — from structure and design to code, launch and ongoing support.',
    heroCta: 'Discuss a project', heroWork: 'View my work',
    factPlaceLabel: 'Working', factPlace: 'Remotely', factFocusLabel: 'Focus', factFocus: 'Value + clarity',
    scrollHint: 'Scroll inside the window',
    projectsLabel: 'Selected projects',
    projectsTitle: 'More than pages.<br><em>Working systems.</em>',
    projectsIntro: 'Every project begins with understanding the problem. Then content, interface and development become one coherent product.',
    fullCycle: 'Full cycle', webApp: 'Web application', browserExtension: 'Browser extension',
    alexDescription: 'A digital ecosystem for a teacher: website, testing, e-contracts, schedule, admin panel and student portal.',
    gitDescription: 'An interactive timeline that turns commits and branches into a clear story of how a project evolved.',
    textMateDescription: 'An AI-powered browser extension for selected text: corrects mistakes, translates, shortens and rewrites in the needed tone, using local Ollama models or a cloud API.',
    inProgress: 'Space for a new project', futureTitle: 'Your project could be here',
    futureDescription: 'If you need a clear website, service or custom digital product, we can discuss the task and build the right solution around it.', futureCta: 'Discuss a project',
    approachLabel: 'Approach', approachTitle: 'One specialist.<br><em>The entire product journey.</em>',
    approachIntro: 'You do not need to coordinate several contractors. I understand the task, create the design, write the code and stay involved after launch.',
    stepOneTitle: 'Understand the task', stepOneCopy: 'We discuss the goal, users and desired outcome in plain language.',
    stepTwoTitle: 'Build the solution', stepTwoCopy: 'I design the structure, interface and technical foundation as one system.',
    stepThreeTitle: 'Test and launch', stepThreeCopy: 'I test the key journeys, publish the project and provide clear instructions.',
    stepFourTitle: 'Keep improving', stepFourCopy: 'I stay available after launch so the product can be supported and improved over time.',
    principleOne: 'Plain language', principleTwo: 'Responsive on every screen', principleThree: 'No unnecessary features',
    contactsLabel: 'Contact', contactsTitle: 'Tell me about your idea.<br><em>Let’s start with a conversation.</em>',
    contactsIntro: 'A technical specification is optional. Describe the task in your own words — I will clarify what matters and suggest the next step.',
    avitoText: 'Website development', footerText: 'Design and development with people in mind', backTop: 'Back to top ↑'
  }
};

const appearanceNames = {
  ru: {
    background: { coffee: 'Тёмный кофейный фон', home: 'Домашний интерьер', glow: 'Абстрактный свет' },
    glass: { dark: 'Тёмное стекло', milk: 'Молочное стекло', cocoa: 'Коричневое стекло' }
  },
  en: {
    background: { coffee: 'Dark coffee background', home: 'Cozy home interior', glow: 'Abstract warm light' },
    glass: { dark: 'Dark glass', milk: 'Milky glass', cocoa: 'Cocoa glass' }
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
const supportedBackgrounds = ['coffee', 'home', 'glow'];
const supportedGlass = ['dark', 'milk', 'cocoa'];

let currentLanguage = supportedLanguages.includes(params.get('lang'))
  ? params.get('lang')
  : (supportedLanguages.includes(storage.get('portfolio-language')) ? storage.get('portfolio-language') : 'ru');

let currentBackground = supportedBackgrounds.includes(params.get('background'))
  ? params.get('background')
  : (supportedBackgrounds.includes(storage.get('portfolio-background')) ? storage.get('portfolio-background') : 'coffee');

let currentGlass = supportedGlass.includes(params.get('glass'))
  ? params.get('glass')
  : (supportedGlass.includes(storage.get('portfolio-glass')) ? storage.get('portfolio-glass') : 'cocoa');

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
  currentBackground = supportedBackgrounds.includes(background) ? background : 'coffee';
  document.body.dataset.background = currentBackground;
  document.querySelectorAll('[data-background-choice]').forEach((button) => {
    const active = button.dataset.backgroundChoice === currentBackground;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (persist) storage.set('portfolio-background', currentBackground);
}

function applyGlass(glass, persist = true) {
  currentGlass = supportedGlass.includes(glass) ? glass : 'cocoa';
  document.body.dataset.glass = currentGlass;
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