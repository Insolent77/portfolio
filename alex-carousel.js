(() => {
  const card = [...document.querySelectorAll('.project')].find((node) => node.querySelector('h3')?.textContent.trim() === 'Alex Educator');
  if (!card || card.dataset.showcaseReady === 'true') return;
  card.dataset.showcaseReady = 'true';
  card.classList.add('project--alex-showcase');

  const copy = {
    ru: {
      type: 'Веб-приложение',
      subtitle: 'Сайт и админ-панель для преподавателя английского языка',
      description: 'Современный сайт для преподавателя английского языка с описанием услуг, отзывами, формой записи и CEFR тестом. Также разработана удобная админ-панель для управления заявками, уроками и расписанием.',
      features: [
        ['Современный и стильный дизайн', 'Адаптивный сайт под все устройства'],
        ['CEFR тест и форма записи', 'Автоматическая обработка заявок'],
        ['Админ-панель', 'Управление расписанием, учениками и заявками'],
        ['Поддержка двух языков', 'Русский и английский интерфейс']
      ],
      tech: 'Технологии',
      project: 'Посмотреть проект',
      github: 'GitHub'
    },
    en: {
      type: 'Web application',
      subtitle: 'Website and admin panel for an English tutor',
      description: 'A modern website for an English tutor with services, testimonials, booking form and CEFR test. It also includes an admin panel for managing requests, lessons and schedules.',
      features: [
        ['Modern visual design', 'Responsive layout for every screen'],
        ['CEFR test and booking form', 'Automated request processing'],
        ['Admin panel', 'Schedule, students and requests management'],
        ['Two-language support', 'Russian and English interface']
      ],
      tech: 'Technologies',
      project: 'View project',
      github: 'GitHub'
    }
  };

  const iconSvg = (n) => {
    const icons = [
      '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H4zM8 20h8M12 16v4"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M4 6h16v14H4zM8 3v6M16 3v6M4 10h16"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M12 3l2 2.5 3.2-.3.8 3.1 2.8 1.6-1.6 2.8.3 3.2-3.1.8L12 21l-2.5-2-3.2.3-.8-3.1-2.8-1.6 1.6-2.8-.3-3.2 3.1-.8L12 3zM9.5 12l1.5 1.5 3.5-4"/></svg>',
      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>'
    ];
    return icons[n] || icons[0];
  };

  const slideSite = `
    <div class="alex-screen alex-screen--site">
      <div class="alex-site__nav"><b><span>AE</span> Alex Educator</b><i>Главная</i><i>Обо мне</i><i>Услуги</i><i>Отзывы</i><i>Контакты</i><em>RU⌄</em><strong>Записаться</strong></div>
      <div class="alex-site__hero">
        <div class="alex-site__copy"><small>ИНДИВИДУАЛЬНЫЙ АНГЛИЙСКИЙ</small><h4>Английский<br>как навык<br>для <u>реальной жизни</u></h4><p></p><p></p><span>Записаться на консультацию</span></div>
        <div class="alex-site__photo"><i class="head"></i><i class="body"></i><b>5+<small>лет опыта</small></b></div>
      </div>
      <div class="alex-site__services"><article><i>▣</i><b>Индивидуальные занятия</b><p></p><p></p><strong>от 2 500 ₽</strong></article><article><i>◉</i><b>Мини-группа</b><p></p><p></p><strong>от 1 200 ₽</strong></article><article><i>▤</i><b>Английский для работы</b><p></p><p></p><strong>от 2 500 ₽</strong></article></div>
    </div>`;

  const slideAdmin = `
    <div class="alex-screen alex-screen--admin">
      <div class="alex-admin__sidebar"><b><span>AE</span> Alex Educator</b><i>Главная</i><i>Ученики</i><i class="active">Расписание</i><i>Заявки</i><i>Уроки</i><i>Материалы</i><i>Статистика</i></div>
      <div class="alex-admin__main"><header><small>РАСПИСАНИЕ</small><h4>Расписание</h4></header><div class="alex-admin__calendar"><div class="days"><span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span></div><div class="grid">${'<i></i>'.repeat(35)}</div><b class="lesson l1">Аня<br>B2</b><b class="lesson l2">Группа<br>B1</b><b class="lesson l3">Мария<br>A2</b><b class="lesson l4">Иван<br>C1</b><b class="lesson l5">Разговорный<br>клуб</b></div><div class="alex-admin__form"><small>Создать урок</small><p></p><p></p><p></p><button>Создать урок</button></div></div>
    </div>`;

  const slideStudent = `
    <div class="alex-screen alex-screen--student">
      <div class="alex-student__top"><b><span>AE</span> Alex Educator</b><i>Мой прогресс</i><i>Расписание</i><i>Домашние задания</i></div>
      <div class="alex-student__welcome"><small>ЛИЧНЫЙ КАБИНЕТ</small><h4>Привет, Анна!</h4><p>Продолжаем путь к вашим целям 🚀</p></div>
      <div class="alex-student__cards"><article><small>Следующий урок</small><b>Завтра, 14:00</b><p></p><button>Подготовиться</button></article><article><small>Домашнее задание</small><b>Unit 4: Business English</b><div><i></i></div><span>2/3</span></article><article><small>Сентябрь 2026</small><div class="mini-cal">${'<i></i>'.repeat(28)}</div></article></div>
    </div>`;

  card.innerHTML = `
    <div class="alex-showcase__info">
      <span class="alex-showcase__badge" data-alex-copy="type"></span>
      <h3>Alex Educator</h3>
      <p class="alex-showcase__subtitle" data-alex-copy="subtitle"></p>
      <p class="alex-showcase__description" data-alex-copy="description"></p>
      <div class="alex-showcase__features">
        ${[0,1,2,3].map((i)=>`<div>${iconSvg(i)}<p><b data-alex-feature-title="${i}"></b><span data-alex-feature-text="${i}"></span></p></div>`).join('')}
      </div>
      <div class="alex-showcase__tech"><small data-alex-copy="tech"></small><div><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Responsive</span></div></div>
      <div class="alex-showcase__actions"><a href="https://alex-educator.com" target="_blank" rel="noreferrer"><span>↗</span><b data-alex-copy="project"></b></a><a href="https://github.com/Insolent77/alex-educator" target="_blank" rel="noreferrer" class="secondary"><span>◉</span><b data-alex-copy="github"></b></a></div>
    </div>
    <div class="alex-showcase__visual" data-alex-showcase>
      <div class="alex-showcase__stage">
        <div class="alex-showcase__slide is-left" data-slide="0">${slideStudent}</div>
        <div class="alex-showcase__slide is-center" data-slide="1">${slideSite}</div>
        <div class="alex-showcase__slide is-right" data-slide="2">${slideAdmin}</div>
      </div>
      <div class="alex-showcase__nav"><button type="button" data-prev aria-label="Предыдущий слайд">‹</button><div class="alex-showcase__dots"><button class="is-active" data-dot="0"></button><button data-dot="1"></button><button data-dot="2"></button></div><button type="button" data-next aria-label="Следующий слайд">›</button></div>
      <div class="alex-showcase__thumbs"><button data-thumb="0">${slideSite}</button><button data-thumb="1">${slideAdmin}</button><button data-thumb="2">${slideStudent}</button></div>
    </div>`;

  const style = document.createElement('style');
  style.id = 'alex-showcase-style';
  style.textContent = `
    .project--alex-showcase{grid-column:1/-1!important;display:grid!important;grid-template-columns:31% 69%!important;min-height:620px!important;padding:26px!important;border-radius:24px!important;overflow:hidden!important;background:linear-gradient(145deg,#111d2c,#0a1522 72%)!important;border:1px solid rgba(112,146,190,.18)!important;box-shadow:0 28px 80px rgba(5,12,22,.28)!important;color:#e9f1fb!important}
    .project--alex-showcase .alex-showcase__info{padding:20px 20px 12px 10px;display:flex;flex-direction:column;min-width:0}
    .alex-showcase__badge{align-self:flex-start;padding:8px 14px;border-radius:999px;background:linear-gradient(180deg,#314b70,#203955);border:1px solid rgba(145,179,224,.24);font:600 9px/1 var(--font-body);color:#e9f2ff}
    .project--alex-showcase h3{margin:18px 0 0;font:400 34px/1.05 var(--font-display);color:#fff}
    .alex-showcase__subtitle{margin:12px 0 0;color:#b7c4d6;font-size:11px;line-height:1.55;max-width:280px}
    .alex-showcase__description{margin:22px 0 0;color:#99a9bd;font-size:10px;line-height:1.6;max-width:300px}
    .alex-showcase__features{display:grid;gap:12px;margin-top:22px}.alex-showcase__features>div{display:grid;grid-template-columns:36px 1fr;gap:10px;align-items:center}.alex-showcase__features svg{width:34px;height:34px;padding:8px;border-radius:10px;background:rgba(44,80,125,.34);stroke:#6ea3ff;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;border:1px solid rgba(112,163,255,.16)}.alex-showcase__features p{display:grid;gap:2px;margin:0}.alex-showcase__features b{font-size:9px;color:#e9f1fb}.alex-showcase__features span{font-size:8px;color:#8394aa;line-height:1.4}
    .alex-showcase__tech{margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,.09)}.alex-showcase__tech small{display:block;color:#dce6f2;font-size:8px;margin-bottom:10px}.alex-showcase__tech div{display:flex;flex-wrap:wrap;gap:7px}.alex-showcase__tech span{padding:7px 11px;border-radius:999px;background:rgba(37,59,84,.52);border:1px solid rgba(125,157,196,.16);font-size:7px;color:#c7d3e2}
    .alex-showcase__actions{display:flex;gap:10px;margin-top:auto;padding-top:24px}.alex-showcase__actions a{min-height:42px;padding:0 18px;border-radius:10px;background:linear-gradient(135deg,#3277e6,#173f9a);display:flex;align-items:center;gap:9px;border:1px solid rgba(102,151,245,.32);font-size:8px;color:#fff}.alex-showcase__actions a.secondary{background:rgba(30,47,67,.72);border-color:rgba(255,255,255,.10)}.alex-showcase__actions b{font-weight:600}.alex-showcase__actions span{font-size:14px}
    .alex-showcase__visual{position:relative;min-width:0;padding:12px 0 0}.alex-showcase__stage{position:relative;height:400px;perspective:1100px;overflow:visible}.alex-showcase__slide{position:absolute;top:26px;width:66%;height:330px;border-radius:14px;overflow:hidden;background:#f7f8fb;border:1px solid rgba(255,255,255,.15);box-shadow:0 30px 55px rgba(2,8,18,.35);transition:all .65s cubic-bezier(.22,.61,.36,1);opacity:.58;pointer-events:none}.alex-showcase__slide.is-center{left:17%;transform:translateX(0) scale(1);z-index:5;opacity:1;pointer-events:auto}.alex-showcase__slide.is-left{left:-12%;transform:scale(.86) rotateY(10deg);transform-origin:right center;z-index:2}.alex-showcase__slide.is-right{right:-12%;transform:scale(.86) rotateY(-10deg);transform-origin:left center;z-index:2}
    .alex-screen{height:100%;width:100%;color:#10204f;font-family:var(--font-body);background:linear-gradient(145deg,#fbf8f2,#edf3ff)}
    .alex-site__nav{height:42px;padding:0 18px;display:flex;align-items:center;gap:12px;font-size:4.5px}.alex-site__nav b{display:flex;align-items:center;gap:5px;margin-right:auto}.alex-site__nav b span{width:19px;height:19px;border-radius:6px;background:#10204f;color:#fff;display:grid;place-items:center}.alex-site__nav i{font-style:normal;color:#5d6780}.alex-site__nav em{font-style:normal;padding:5px 8px;border-radius:8px;background:#fff}.alex-site__nav strong{padding:6px 9px;border-radius:8px;background:#10204f;color:#fff;font-weight:600}.alex-site__hero{display:grid;grid-template-columns:1.1fr .9fr;gap:12px;padding:12px 18px 8px}.alex-site__copy small{font-size:4px;color:#4965af;letter-spacing:.12em}.alex-site__copy h4{margin:6px 0 0;font-size:20px;line-height:.94;letter-spacing:-.05em}.alex-site__copy h4 u{color:#3f6fd2;text-decoration:none}.alex-site__copy p{width:78%;height:3px;border-radius:5px;background:rgba(16,32,79,.12);margin:7px 0 0}.alex-site__copy p+p{width:60%;margin-top:4px}.alex-site__copy span{display:inline-block;margin-top:9px;padding:6px 9px;border-radius:7px;background:#10204f;color:#fff;font-size:4px}.alex-site__photo{min-height:150px;border-radius:14px;background:linear-gradient(135deg,#c8daf5,#8eaed9);position:relative;overflow:hidden}.alex-site__photo .head{position:absolute;left:50%;top:25px;width:43px;height:43px;border-radius:50%;background:#dfb89d;transform:translateX(-50%)}.alex-site__photo .body{position:absolute;left:50%;bottom:-12px;width:92px;height:104px;border-radius:48px 48px 12px 12px;background:#183a33;transform:translateX(-50%)}.alex-site__photo b{position:absolute;right:8px;top:52px;background:rgba(255,255,255,.9);border-radius:9px;padding:7px 9px;font-size:7px}.alex-site__photo b small{display:block;font-size:4px;color:#667085}.alex-site__services{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:8px 18px 16px}.alex-site__services article{min-height:86px;padding:9px;border-radius:10px;background:rgba(255,255,255,.8);border:1px solid rgba(16,32,79,.08)}.alex-site__services article>i{font-style:normal;color:#3b6fd2}.alex-site__services b{display:block;margin-top:4px;font-size:5px}.alex-site__services p{height:3px;width:80%;margin:7px 0 0;background:rgba(16,32,79,.10);border-radius:4px}.alex-site__services p+p{width:63%;margin-top:4px}.alex-site__services strong{display:block;margin-top:9px;font-size:5px}
    .alex-admin--placeholder{}.alex-admin__sidebar{position:absolute;left:0;top:0;bottom:0;width:21%;padding:15px 10px;background:#eaf0fb;border-right:1px solid #d7dfed}.alex-admin__sidebar b{display:flex;align-items:center;gap:5px;font-size:5px;margin-bottom:15px}.alex-admin__sidebar b span{width:18px;height:18px;background:#122451;color:#fff;border-radius:6px;display:grid;place-items:center}.alex-admin__sidebar i{display:block;padding:7px 7px;margin:4px 0;border-radius:6px;font-style:normal;font-size:4px;color:#5d6a83}.alex-admin__sidebar i.active{background:#284f96;color:#fff}.alex-admin__main{margin-left:21%;height:100%;padding:14px;position:relative}.alex-admin__main header small{font-size:3.8px;color:#7c8ca8;letter-spacing:.12em}.alex-admin__main header h4{margin:3px 0 8px;font-size:15px}.alex-admin__calendar{position:relative;width:72%;height:245px;background:#fff;border:1px solid #dfe5ef;border-radius:9px;padding:12px}.alex-admin__calendar .days{display:grid;grid-template-columns:repeat(7,1fr);font-size:4px;color:#72809a;text-align:center;margin-bottom:5px}.alex-admin__calendar .grid{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,1fr);height:190px}.alex-admin__calendar .grid i{border-right:1px solid #edf0f5;border-bottom:1px solid #edf0f5}.alex-admin__calendar .lesson{position:absolute;padding:5px;border-radius:5px;font-size:4px;line-height:1.4}.alex-admin__calendar .l1{left:19%;top:58px;background:#bfe1ff}.alex-admin__calendar .l2{left:43%;top:84px;background:#c7f1ce}.alex-admin__calendar .l3{left:12%;top:123px;background:#ffe5aa}.alex-admin__calendar .l4{left:68%;top:91px;background:#f9c6cc}.alex-admin__calendar .l5{left:48%;top:156px;background:#d9c9ff}.alex-admin__form{position:absolute;right:14px;top:68px;width:22%;padding:10px;background:#fff;border:1px solid #dfe5ef;border-radius:9px}.alex-admin__form small{font-size:5px;font-weight:700}.alex-admin__form p{height:18px;border:1px solid #e0e5ee;border-radius:5px;margin:7px 0}.alex-admin__form button{width:100%;height:24px;border:0;border-radius:6px;background:#173675;color:#fff;font-size:4px}
    .alex-student__top{height:42px;padding:0 18px;display:flex;align-items:center;gap:14px;font-size:4.5px}.alex-student__top b{display:flex;align-items:center;gap:5px;margin-right:auto}.alex-student__top b span{width:19px;height:19px;border-radius:6px;background:#10204f;color:#fff;display:grid;place-items:center}.alex-student__top i{font-style:normal;color:#64708a}.alex-student__welcome{margin:6px 18px 10px;padding:13px 15px;border-radius:12px;background:linear-gradient(135deg,#e6eefc,#f6f3ed)}.alex-student__welcome small{font-size:4px;letter-spacing:.1em}.alex-student__welcome h4{margin:4px 0 0;font-size:17px}.alex-student__welcome p{margin:4px 0 0;font-size:5px;color:#62708b}.alex-student__cards{display:grid;grid-template-columns:1.25fr 1fr .8fr;gap:8px;padding:0 18px 14px}.alex-student__cards article{min-height:185px;background:#fff;border:1px solid rgba(16,32,79,.08);border-radius:10px;padding:10px}.alex-student__cards small{font-size:4px;color:#6d7890}.alex-student__cards b{display:block;margin-top:7px;font-size:7px}.alex-student__cards p{height:4px;width:70%;border-radius:4px;background:rgba(16,32,79,.10);margin-top:10px}.alex-student__cards button{margin-top:12px;border:0;border-radius:6px;padding:6px 9px;background:#10204f;color:#fff;font-size:4px}.alex-student__cards article:nth-child(2) div{height:6px;margin-top:18px;background:#e9edf4;border-radius:5px;overflow:hidden}.alex-student__cards article:nth-child(2) div i{display:block;width:70%;height:100%;background:#5fb66e}.alex-student__cards article:nth-child(2) span{display:block;margin-top:5px;font-size:4px;text-align:right}.mini-cal{display:grid!important;grid-template-columns:repeat(7,1fr);gap:3px;margin-top:11px!important;height:auto!important;background:none!important}.mini-cal i{display:block!important;width:8px!important;height:8px!important;border-radius:2px;background:#edf0f6!important}.mini-cal i:nth-child(18){background:#244e99!important}
    .alex-showcase__nav{display:flex;justify-content:center;align-items:center;gap:18px;margin-top:8px}.alex-showcase__nav>button{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:#15253a;color:#fff;font-size:20px}.alex-showcase__dots{display:flex;gap:7px}.alex-showcase__dots button{width:7px;height:7px;border:0;border-radius:50%;background:#2a405b}.alex-showcase__dots button.is-active{background:#2f7cff}.alex-showcase__thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:72%;margin:15px auto 0}.alex-showcase__thumbs button{height:72px;padding:0;border:1px solid rgba(255,255,255,.10);border-radius:9px;overflow:hidden;background:#fff;opacity:.72}.alex-showcase__thumbs button.is-active{opacity:1;border-color:#4f91ff;box-shadow:0 0 0 2px rgba(79,145,255,.18)}.alex-showcase__thumbs .alex-screen{transform:scale(.28);transform-origin:top left;width:357%;height:357%;pointer-events:none}
    @media(max-width:1100px){.project--alex-showcase{grid-template-columns:35% 65%!important}.alex-showcase__stage{height:350px}.alex-showcase__slide{height:285px}.project--alex-showcase h3{font-size:30px}}
    @media(max-width:760px){.project--alex-showcase{grid-template-columns:1fr!important;padding:18px!important}.alex-showcase__info{padding:8px 4px 22px!important}.alex-showcase__visual{padding-top:0}.alex-showcase__stage{height:255px;overflow:hidden}.alex-showcase__slide{width:92%;height:225px;top:8px}.alex-showcase__slide.is-center{left:4%}.alex-showcase__slide.is-left,.alex-showcase__slide.is-right{opacity:0;pointer-events:none}.alex-showcase__thumbs{width:100%;gap:7px}.alex-showcase__thumbs button{height:58px}.alex-showcase__actions{margin-top:20px}.alex-showcase__description{max-width:none}.alex-showcase__subtitle{max-width:none}}
    @media(prefers-reduced-motion:reduce){.alex-showcase__slide{transition:none}}
  `;
  document.head.appendChild(style);

  const showcase = card.querySelector('[data-alex-showcase]');
  const slides = [...showcase.querySelectorAll('[data-slide]')];
  const dots = [...showcase.querySelectorAll('[data-dot]')];
  const thumbs = [...showcase.querySelectorAll('[data-thumb]')];
  let active = 1;
  let timer = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateCopy = () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const t = copy[lang];
    card.querySelectorAll('[data-alex-copy]').forEach((el) => { const key = el.dataset.alexCopy; if (t[key]) el.textContent = t[key]; });
    card.querySelectorAll('[data-alex-feature-title]').forEach((el) => { const i = +el.dataset.alexFeatureTitle; el.textContent = t.features[i][0]; });
    card.querySelectorAll('[data-alex-feature-text]').forEach((el) => { const i = +el.dataset.alexFeatureText; el.textContent = t.features[i][1]; });
  };
  updateCopy();
  new MutationObserver(updateCopy).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  const render = () => {
    slides.forEach((slide, i) => {
      slide.classList.remove('is-left','is-center','is-right');
      const diff = (i - active + slides.length) % slides.length;
      if (diff === 0) slide.classList.add('is-center');
      else if (diff === 1) slide.classList.add('is-right');
      else slide.classList.add('is-left');
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === active));
    thumbs.forEach((thumb, i) => thumb.classList.toggle('is-active', i === active));
  };
  const go = (i, manual = false) => { active = (i + slides.length) % slides.length; render(); if (manual) restart(); };
  const stop = () => { if (timer) clearInterval(timer); timer = null; };
  const start = () => { if (reduced || timer) return; timer = setInterval(() => go(active + 1), 5000); };
  const restart = () => { stop(); start(); };
  showcase.querySelector('[data-prev]').addEventListener('click', () => go(active - 1, true));
  showcase.querySelector('[data-next]').addEventListener('click', () => go(active + 1, true));
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i, true)));
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => go(i, true)));
  showcase.addEventListener('pointerenter', stop);
  showcase.addEventListener('pointerleave', start);
  showcase.addEventListener('focusin', stop);
  showcase.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  render();
  start();
})();