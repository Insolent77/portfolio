(() => {
  const card = [...document.querySelectorAll('.project')].find((node) => node.querySelector('h3')?.textContent.trim() === 'Alex Educator');
  if (!card || card.dataset.realShowcaseReady === 'true') return;
  card.dataset.realShowcaseReady = 'true';
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
      tech: 'Технологии', project: 'Посмотреть проект', github: 'GitHub'
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
      tech: 'Technologies', project: 'View project', github: 'GitHub'
    }
  };

  const icon = (n) => [
    '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H4zM8 20h8M12 16v4"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 6h16v14H4zM8 3v6M16 3v6M4 10h16"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3l2 2.5 3.2-.3.8 3.1 2.8 1.6-1.6 2.8.3 3.2-3.1.8L12 21l-2.5-2-3.2.3-.8-3.1-2.8-1.6 1.6-2.8-.3-3.2 3.1-.8L12 3zM9.5 12l1.5 1.5 3.5-4"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>'
  ][n];

  card.innerHTML = `
    <div class="alex-showcase__info">
      <span class="alex-showcase__badge" data-alex-copy="type"></span>
      <h3>Alex Educator</h3>
      <p class="alex-showcase__subtitle" data-alex-copy="subtitle"></p>
      <p class="alex-showcase__description" data-alex-copy="description"></p>
      <div class="alex-showcase__features">${[0,1,2,3].map(i => `<div>${icon(i)}<p><b data-alex-feature-title="${i}"></b><span data-alex-feature-text="${i}"></span></p></div>`).join('')}</div>
      <div class="alex-showcase__tech"><small data-alex-copy="tech"></small><div><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Responsive</span></div></div>
      <div class="alex-showcase__actions"><a href="https://alex-educator.com" target="_blank" rel="noreferrer"><span>↗</span><b data-alex-copy="project"></b></a><a href="https://github.com/Insolent77/alex-educator" target="_blank" rel="noreferrer" class="secondary"><span>◉</span><b data-alex-copy="github"></b></a></div>
    </div>
    <div class="alex-showcase__visual" data-alex-showcase>
      <div class="alex-showcase__stage">
        <button class="alex-showcase__slide is-left" data-slide="0" type="button" aria-label="Личный кабинет"><img src="assets/alex-student-real.webp" alt="Реальный личный кабинет Alex Educator"></button>
        <button class="alex-showcase__slide is-center" data-slide="1" type="button" aria-label="Основной сайт"><img src="assets/alex-site-real.webp" alt="Реальный сайт Alex Educator"></button>
        <button class="alex-showcase__slide is-right" data-slide="2" type="button" aria-label="Админ-панель"><img src="assets/alex-admin-real.webp" alt="Реальная админ-панель Alex Educator"></button>
      </div>
      <div class="alex-showcase__nav"><button type="button" data-prev aria-label="Предыдущий слайд">‹</button><div class="alex-showcase__dots"><button data-dot="0" aria-label="Слайд 1"></button><button class="is-active" data-dot="1" aria-label="Слайд 2"></button><button data-dot="2" aria-label="Слайд 3"></button></div><button type="button" data-next aria-label="Следующий слайд">›</button></div>
      <div class="alex-showcase__thumbs"><button data-thumb="0" aria-label="Основной сайт"><img src="assets/alex-site-real.webp" alt=""></button><button data-thumb="1" aria-label="Админ-панель"><img src="assets/alex-admin-real.webp" alt=""></button><button data-thumb="2" aria-label="Личный кабинет"><img src="assets/alex-student-real.webp" alt=""></button></div>
    </div>`;

  const style = document.createElement('style');
  style.id = 'alex-real-showcase-style';
  style.textContent = `
    .project--alex-showcase{grid-column:1/-1!important;display:grid!important;grid-template-columns:31% 69%!important;min-height:620px!important;padding:26px!important;border-radius:24px!important;overflow:hidden!important;background:linear-gradient(145deg,#111d2c,#0a1522 72%)!important;border:1px solid rgba(112,146,190,.18)!important;box-shadow:0 28px 80px rgba(5,12,22,.28)!important;color:#e9f1fb!important}.project--alex-showcase:hover{transform:none!important}
    .alex-showcase__info{padding:20px 20px 12px 10px;display:flex;flex-direction:column;min-width:0}.alex-showcase__badge{align-self:flex-start;padding:8px 14px;border-radius:999px;background:linear-gradient(180deg,#314b70,#203955);border:1px solid rgba(145,179,224,.24);font:600 9px/1 var(--font-body);color:#e9f2ff}.project--alex-showcase h3{margin:18px 0 0;font:400 34px/1.05 var(--font-display);color:#fff}.alex-showcase__subtitle{margin:12px 0 0;color:#b7c4d6;font-size:11px;line-height:1.55;max-width:280px}.alex-showcase__description{margin:22px 0 0;color:#99a9bd;font-size:10px;line-height:1.6;max-width:300px}
    .alex-showcase__features{display:grid;gap:12px;margin-top:22px}.alex-showcase__features>div{display:grid;grid-template-columns:36px 1fr;gap:10px;align-items:center}.alex-showcase__features svg{width:34px;height:34px;padding:8px;border-radius:10px;background:rgba(44,80,125,.34);stroke:#6ea3ff;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;border:1px solid rgba(112,163,255,.16)}.alex-showcase__features p{display:grid;gap:2px}.alex-showcase__features b{font-size:9px;color:#e9f1fb}.alex-showcase__features span{font-size:8px;color:#8394aa;line-height:1.4}.alex-showcase__tech{margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,.09)}.alex-showcase__tech small{display:block;color:#dce6f2;font-size:8px;margin-bottom:10px}.alex-showcase__tech div{display:flex;flex-wrap:wrap;gap:7px}.alex-showcase__tech span{padding:7px 11px;border-radius:999px;background:rgba(37,59,84,.52);border:1px solid rgba(125,157,196,.16);font-size:7px;color:#c7d3e2}.alex-showcase__actions{display:flex;gap:10px;margin-top:auto;padding-top:24px}.alex-showcase__actions a{min-height:42px;padding:0 18px;border-radius:10px;background:linear-gradient(135deg,#3277e6,#173f9a);display:flex;align-items:center;gap:9px;border:1px solid rgba(102,151,245,.32);font-size:8px;color:#fff}.alex-showcase__actions a.secondary{background:rgba(30,47,67,.72);border-color:rgba(255,255,255,.10)}
    .alex-showcase__visual{position:relative;min-width:0;padding-top:12px}.alex-showcase__stage{position:relative;height:400px;perspective:1100px;overflow:visible}.alex-showcase__slide{position:absolute;top:26px;width:66%;height:330px;padding:0;border:0;border-radius:14px;overflow:hidden;background:#f7f8fb;box-shadow:0 30px 55px rgba(2,8,18,.35);transition:all .65s cubic-bezier(.22,.61,.36,1);opacity:.62;cursor:pointer}.alex-showcase__slide img{width:100%;height:100%;object-fit:contain;background:#f8f6f1;display:block}.alex-showcase__slide.is-center{left:17%;transform:scale(1);z-index:5;opacity:1}.alex-showcase__slide.is-left{left:-12%;transform:scale(.86) rotateY(10deg);transform-origin:right center;z-index:2}.alex-showcase__slide.is-right{right:-12%;transform:scale(.86) rotateY(-10deg);transform-origin:left center;z-index:2}
    .alex-showcase__nav{height:48px;display:flex;align-items:center;justify-content:center;gap:16px}.alex-showcase__nav>button{width:37px;height:37px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(126,159,199,.24);background:rgba(21,39,60,.82);color:#fff;font-size:19px}.alex-showcase__dots{display:flex;gap:7px}.alex-showcase__dots button{width:7px;height:7px;border-radius:50%;background:#314a67}.alex-showcase__dots button.is-active{background:#2f7af5;transform:scale(1.15)}.alex-showcase__thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:560px;margin:4px auto 0}.alex-showcase__thumbs button{height:88px;padding:0;border:2px solid transparent;border-radius:9px;overflow:hidden;background:#dce4ee;opacity:.9}.alex-showcase__thumbs button.is-active{border-color:#2f7af5;box-shadow:0 0 0 2px rgba(47,122,245,.14);opacity:1}.alex-showcase__thumbs img{width:100%;height:100%;object-fit:cover;display:block}
    @media(max-width:900px){.project--alex-showcase{grid-template-columns:1fr!important}.alex-showcase__info{padding:10px 10px 26px}.alex-showcase__stage{height:330px}.alex-showcase__slide{height:280px;width:78%}.alex-showcase__slide.is-center{left:11%}.alex-showcase__slide.is-left{left:-38%}.alex-showcase__slide.is-right{right:-38%}}@media(max-width:560px){.project--alex-showcase{padding:18px!important;min-height:0!important}.alex-showcase__stage{height:235px}.alex-showcase__slide{width:100%;height:220px;top:4px;left:0!important;right:auto!important;transform:none!important;opacity:0;pointer-events:none}.alex-showcase__slide.is-center{opacity:1;pointer-events:auto}.alex-showcase__thumbs{gap:6px}.alex-showcase__thumbs button{height:58px}.alex-showcase__nav{height:44px}.project--alex-showcase h3{font-size:30px}}@media(prefers-reduced-motion:reduce){.alex-showcase__slide{transition:none}}
  `;
  document.head.appendChild(style);

  const langCopy = () => { const lang = document.documentElement.lang === 'en' ? 'en' : 'ru'; const t = copy[lang]; card.querySelectorAll('[data-alex-copy]').forEach(el => el.textContent = t[el.dataset.alexCopy]); t.features.forEach((f,i) => { card.querySelector(`[data-alex-feature-title="${i}"]`).textContent=f[0]; card.querySelector(`[data-alex-feature-text="${i}"]`).textContent=f[1]; }); };
  langCopy(); new MutationObserver(langCopy).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  const slides=[...card.querySelectorAll('[data-slide]')], dots=[...card.querySelectorAll('[data-dot]')], thumbs=[...card.querySelectorAll('[data-thumb]')]; let center=1,timer;
  const render=()=>{slides.forEach((s,i)=>{s.classList.remove('is-left','is-center','is-right');const rel=(i-center+3)%3;s.classList.add(rel===0?'is-center':rel===1?'is-right':'is-left')});dots.forEach((d,i)=>d.classList.toggle('is-active',i===center));thumbs.forEach((t,i)=>t.classList.toggle('is-active',i===center));};
  const stop=()=>clearInterval(timer), start=()=>{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>go(center+1),5000)}, restart=()=>{stop();start()}, go=i=>{center=(i+3)%3;render();restart()};
  card.querySelector('[data-prev]').onclick=()=>go(center-1); card.querySelector('[data-next]').onclick=()=>go(center+1); dots.forEach((d,i)=>d.onclick=()=>go(i)); thumbs.forEach((t,i)=>t.onclick=()=>go(i)); slides.forEach((s,i)=>s.onclick=()=>go(i)); card.addEventListener('pointerenter',stop); card.addEventListener('pointerleave',start); render(); start();
})();