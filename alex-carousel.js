(() => {
  // Mobile: keep native touch scrolling inside the content panel and
  // forward swipes that start outside the panel to the same scroller.
  const mobileScroll = document.querySelector('.scroll');
  if (mobileScroll) {
    mobileScroll.style.webkitOverflowScrolling = 'touch';
    mobileScroll.style.touchAction = 'pan-y';
    mobileScroll.style.overscrollBehaviorY = 'contain';

    let touchStartedOutside = false;
    let lastTouchY = 0;

    window.addEventListener('touchstart', (event) => {
      if (event.touches.length !== 1) return;
      const targetIsInsideScroller = event.target instanceof Element && event.target.closest('.scroll');
      touchStartedOutside = !targetIsInsideScroller;
      lastTouchY = event.touches[0].clientY;
    }, { passive: true, capture: true });

    window.addEventListener('touchmove', (event) => {
      if (!touchStartedOutside || event.touches.length !== 1) return;

      const currentY = event.touches[0].clientY;
      const delta = lastTouchY - currentY;
      lastTouchY = currentY;
      if (!delta) return;

      const maxScroll = mobileScroll.scrollHeight - mobileScroll.clientHeight;
      const nextScroll = Math.min(maxScroll, Math.max(0, mobileScroll.scrollTop + delta));
      if (nextScroll === mobileScroll.scrollTop) return;

      event.preventDefault();
      mobileScroll.scrollTop = nextScroll;
    }, { passive: false, capture: true });

    const finishTouch = () => { touchStartedOutside = false; };
    window.addEventListener('touchend', finishTouch, { passive: true, capture: true });
    window.addEventListener('touchcancel', finishTouch, { passive: true, capture: true });
  }

  const card = [...document.querySelectorAll('.project')].find((node) =>
    node.querySelector('h3')?.textContent.trim() === 'Alex Educator' ||
    node.querySelector('a[href*="alex-educator.com"]')
  );
  if (!card || card.dataset.alexStaticReady === 'true') return;
  card.dataset.alexStaticReady = 'true';
  card.className = 'project reveal is-visible project--alex-static';

  const shots = [
    { label: 'Главная страница', src: 'assets/alex-home-updated.png', ratio: 4 / 3 },
    { label: 'Админка — расписание', src: 'assets/alex-schedule-updated.png', ratio: 3 / 4 },
    { label: 'Кабинет ученика — домашние задания', src: 'assets/alex-student-ivan.png', ratio: 1906 / 825 }
  ];

  const copy = {
    ru: {
      badge:'Веб-приложение',
      subtitle:'Сайт и админ-панель для преподавателя английского языка',
      description:'Современный сайт для преподавателя английского языка с описанием услуг, отзывами, формой записи и CEFR тестом. Также разработана удобная админ-панель для управления заявками, уроками и расписанием.',
      tech:'Технологии',
      project:'Посмотреть проект',
      github:'GitHub',
      feature1Title:'Современный и стильный дизайн',
      feature1Text:'Адаптивный сайт под все устройства',
      feature2Title:'CEFR тест и форма записи',
      feature2Text:'Автоматическая обработка заявок',
      feature3Title:'Админ-панель',
      feature3Text:'Управление расписанием, учениками и заявками',
      feature4Title:'Поддержка двух языков',
      feature4Text:'Русский и английский интерфейс'
    },
    en: {
      badge:'Web application',
      subtitle:'Website and admin panel for an English tutor',
      description:'A modern website for an English tutor with services, testimonials, a booking form and a CEFR test, plus an admin panel for requests, lessons and schedules.',
      tech:'Technologies',
      project:'View project',
      github:'GitHub',
      feature1Title:'Modern and stylish design',
      feature1Text:'Responsive website for all devices',
      feature2Title:'CEFR test and booking form',
      feature2Text:'Automatic request processing',
      feature3Title:'Admin panel',
      feature3Text:'Manage schedules, students and requests',
      feature4Title:'Two-language support',
      feature4Text:'Russian and English interface'
    }
  };

  const featureIcons = ['▣', '▦', '⚙', '◎'];

  card.innerHTML = `
    <div class="alex-static-info">
      <span class="alex-static-badge" data-alex-copy="badge"></span>
      <h3>Alex Educator</h3>
      <p class="alex-static-subtitle" data-alex-copy="subtitle"></p>
      <p class="alex-static-description" data-alex-copy="description"></p>
      <div class="alex-static-features">${featureIcons.map((icon,i)=>`<div><i>${icon}</i><p><b data-alex-copy="feature${i+1}Title"></b><span data-alex-copy="feature${i+1}Text"></span></p></div>`).join('')}</div>
      <div class="alex-static-tech"><small data-alex-copy="tech"></small><div><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Responsive</span></div></div>
      <div class="alex-static-actions"><a href="https://alex-educator.com" target="_blank" rel="noreferrer"><span>↗</span><b data-alex-copy="project"></b></a><a class="secondary" href="https://github.com/Insolent77/alex-educator" target="_blank" rel="noreferrer"><span>●</span><b data-alex-copy="github"></b></a></div>
    </div>
    <div class="alex-static-gallery">
      <div class="alex-static-stage">${shots.map((shot,i)=>`<button type="button" data-slide="${i}" style="--shot-ratio:${shot.ratio}" aria-label="${shot.label}"><img src="${shot.src}" alt="${shot.label}"></button>`).join('')}</div>
      <div class="alex-static-nav"><button type="button" data-prev aria-label="Предыдущий скриншот">‹</button><div>${shots.map((_,i)=>`<button type="button" data-dot="${i}" aria-label="Скриншот ${i+1}"></button>`).join('')}</div><button type="button" data-next aria-label="Следующий скриншот">›</button></div>
      <div class="alex-static-thumbs">${shots.map((shot,i)=>`<button type="button" data-thumb="${i}" aria-label="${shot.label}"><img src="${shot.src}" alt=""></button>`).join('')}</div>
    </div>`;

  const slides=[...card.querySelectorAll('[data-slide]')],dots=[...card.querySelectorAll('[data-dot]')],thumbs=[...card.querySelectorAll('[data-thumb]')];let current=0,timer;
  const render=()=>{slides.forEach((slide,i)=>{slide.classList.remove('is-left','is-center','is-right');const p=(i-current+slides.length)%slides.length;slide.classList.add(p===0?'is-center':p===1?'is-right':'is-left')});dots.forEach((d,i)=>d.classList.toggle('is-active',i===current));thumbs.forEach((t,i)=>t.classList.toggle('is-active',i===current))};
  const go=(i)=>{current=(i+slides.length)%slides.length;render();clearInterval(timer);timer=setInterval(()=>{current=(current+1)%slides.length;render()},5000)};
  card.querySelector('[data-prev]').addEventListener('click',()=>go(current-1));card.querySelector('[data-next]').addEventListener('click',()=>go(current+1));dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));thumbs.forEach((t,i)=>t.addEventListener('click',()=>go(i)));slides.forEach((s,i)=>s.addEventListener('click',()=>go(i)));
  const applyCopy=()=>{const t=copy[document.documentElement.lang==='en'?'en':'ru'];card.querySelectorAll('[data-alex-copy]').forEach(n=>n.textContent=t[n.dataset.alexCopy] || '')};applyCopy();new MutationObserver(applyCopy).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});render();timer=setInterval(()=>{current=(current+1)%slides.length;render()},5000);
})();

(() => {
  const COBALT = '#0047ab';
  const SAND = '#f5e6ca';
  const bgKey = 'portfolio-background';
  const glassKey = 'portfolio-glass';
  const migrationKey = 'portfolio-default-theme-cobalt-sand-v1';

  const style = document.createElement('style');
  style.textContent = `
    body[data-background='cobalt'] .ambient{background:${COBALT}!important}
    body[data-background='cobalt'] .ambient__coffee,
    body[data-background='cobalt'] .ambient__home,
    body[data-background='cobalt'] .ambient__glow{opacity:0!important}
    body[data-background='cobalt'] .ambient::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 18% 20%,rgba(255,255,255,.16),transparent 24%),radial-gradient(circle at 86% 80%,rgba(0,24,78,.32),transparent 34%),linear-gradient(135deg,#0c5cc8 0%,${COBALT} 46%,#00337f 100%)}
    body[data-background='cobalt'] .ambient::after{content:'';position:absolute;inset:-10%;background:linear-gradient(118deg,transparent 20%,rgba(245,230,202,.09) 37%,transparent 52%);transform:rotate(-8deg)}

    body[data-glass='sand']{
      --glass-bg:rgba(245,230,202,.84);
      --glass-strong:rgba(245,230,202,.96);
      --glass-soft:rgba(0,71,171,.075);
      --glass-line:rgba(0,71,171,.22);
      --glass-text:#08285a;
      --glass-muted:rgba(8,40,90,.64);
      --glass-shadow:0 36px 100px rgba(0,31,86,.30);
      --accent:${COBALT};
      --green:#457c66;
    }
    body[data-glass='sand'] .glass{box-shadow:var(--glass-shadow),inset 0 1px 0 rgba(255,255,255,.48)}
    body[data-glass='sand'] .toolbar{background:linear-gradient(180deg,rgba(245,230,202,.98),rgba(245,230,202,.88))}
    body[data-glass='sand'] .section-label span:first-child,
    body[data-glass='sand'] em,
    body[data-glass='sand'] .brand span,
    body[data-glass='sand'] .inline-link,
    body[data-glass='sand'] .project__arrow{color:${COBALT}!important}
    body[data-glass='sand'] .button--primary{background:${COBALT}!important;color:${SAND}!important;border-color:${COBALT}!important}
    body[data-glass='sand'] .availability i{background:${COBALT}!important}
    body[data-glass='sand'] ::selection{background:${COBALT};color:${SAND}}

    .choice--cobalt i{border-radius:50%;background:linear-gradient(135deg,#0b67d8,${COBALT} 58%,#002e74)!important}
    .choice--sand i{border-radius:3px;background:${SAND}!important;border-color:rgba(0,71,171,.28)!important}

    body[data-glass='sand'] .project--alex-static{background:linear-gradient(145deg,#fff8eb 0%,${SAND} 58%,#ead4aa 100%)!important;border-color:rgba(0,71,171,.25)!important;color:#08285a!important;box-shadow:0 28px 85px rgba(0,46,112,.20)!important}
    body[data-glass='sand'] .project--alex-static h3,
    body[data-glass='sand'] .alex-static-features b{color:#08285a!important}
    body[data-glass='sand'] .alex-static-subtitle,
    body[data-glass='sand'] .alex-static-description,
    body[data-glass='sand'] .alex-static-features span,
    body[data-glass='sand'] .alex-static-tech small{color:rgba(8,40,90,.68)!important}
    body[data-glass='sand'] .alex-static-badge,
    body[data-glass='sand'] .alex-static-tech span,
    body[data-glass='sand'] .alex-static-nav>button{background:rgba(0,71,171,.08)!important;border-color:rgba(0,71,171,.22)!important;color:#08285a!important}
    body[data-glass='sand'] .alex-static-features i{background:rgba(0,71,171,.10)!important;border-color:rgba(0,71,171,.18)!important;color:${COBALT}!important}
    body[data-glass='sand'] .alex-static-actions a{background:${COBALT}!important;color:${SAND}!important;border-color:${COBALT}!important}
    body[data-glass='sand'] .alex-static-actions a.secondary{background:rgba(0,71,171,.08)!important;color:#08285a!important;border-color:rgba(0,71,171,.22)!important}
    body[data-glass='sand'] .alex-static-nav>div button{background:rgba(0,71,171,.22)!important}
    body[data-glass='sand'] .alex-static-nav>div button.is-active{background:${COBALT}!important}
    body[data-glass='sand'] .alex-static-thumbs button.is-active{border-color:${COBALT}!important}
  `;
  document.head.appendChild(style);

  const backgroundGroup = document.querySelector('[data-background-choice]')?.closest('.switcher');
  const glassGroup = document.querySelector('[data-glass-choice]')?.closest('.switcher');

  if (backgroundGroup && !backgroundGroup.querySelector('[data-background-choice="cobalt"]')) {
    const button = document.createElement('button');
    button.className = 'choice choice--cobalt';
    button.type = 'button';
    button.dataset.backgroundChoice = 'cobalt';
    button.innerHTML = '<i></i>';
    backgroundGroup.appendChild(button);
    button.addEventListener('click', () => {
      document.body.dataset.background = 'cobalt';
      try { localStorage.setItem(bgKey, 'cobalt'); } catch {}
      document.querySelectorAll('[data-background-choice]').forEach((item) => {
        const active = item.dataset.backgroundChoice === 'cobalt';
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      syncLabels();
    });
  }

  if (glassGroup && !glassGroup.querySelector('[data-glass-choice="sand"]')) {
    const button = document.createElement('button');
    button.className = 'choice choice--sand';
    button.type = 'button';
    button.dataset.glassChoice = 'sand';
    button.innerHTML = '<i></i>';
    glassGroup.appendChild(button);
    button.addEventListener('click', () => {
      document.body.dataset.glass = 'sand';
      try { localStorage.setItem(glassKey, 'sand'); } catch {}
      document.querySelectorAll('[data-glass-choice]').forEach((item) => {
        const active = item.dataset.glassChoice === 'sand';
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      syncLabels();
    });
  }

  const syncLabels = () => {
    const en = document.documentElement.lang === 'en';
    const cobalt = document.querySelector('[data-background-choice="cobalt"]');
    const sand = document.querySelector('[data-glass-choice="sand"]');
    if (cobalt) {
      const label = en ? 'Cobalt background' : 'Кобальтовый фон';
      cobalt.setAttribute('aria-label', label); cobalt.title = label;
    }
    if (sand) {
      const label = en ? 'Sand glass' : 'Песочное стекло';
      sand.setAttribute('aria-label', label); sand.title = label;
    }
  };

  let storedBg = null;
  let storedGlass = null;
  let migrated = null;
  try {
    storedBg = localStorage.getItem(bgKey);
    storedGlass = localStorage.getItem(glassKey);
    migrated = localStorage.getItem(migrationKey);
  } catch {}

  if (!migrated) {
    document.body.dataset.background = 'cobalt';
    document.body.dataset.glass = 'sand';
    try {
      localStorage.setItem(bgKey, 'cobalt');
      localStorage.setItem(glassKey, 'sand');
      localStorage.setItem(migrationKey, '1');
    } catch {}
  } else {
    if (storedBg === 'cobalt') document.body.dataset.background = 'cobalt';
    if (storedGlass === 'sand') document.body.dataset.glass = 'sand';
  }

  document.querySelectorAll('[data-background-choice]').forEach((item) => {
    const active = item.dataset.backgroundChoice === document.body.dataset.background;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-glass-choice]').forEach((item) => {
    const active = item.dataset.glassChoice === document.body.dataset.glass;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });

  syncLabels();
  new MutationObserver(syncLabels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();