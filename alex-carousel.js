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
