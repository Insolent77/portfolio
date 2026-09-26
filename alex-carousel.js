(() => {
  const card = [...document.querySelectorAll('.project')].find((node) =>
    node.querySelector('h3')?.textContent.trim() === 'Alex Educator' ||
    node.querySelector('a[href*="alex-educator.com"]')
  );
  if (!card || card.dataset.alexStaticReady === 'true') return;
  card.dataset.alexStaticReady = 'true';
  card.className = 'project reveal is-visible project--alex-static';

  const shots = [
    { label: 'Главная страница', src: 'assets/alex-home-new.webp' },
    { label: 'Админка — расписание', src: 'assets/alex-schedule-new.webp' },
    { label: 'Отзывы', src: 'assets/alex-reviews-new.webp' }
  ];

  const copy = {
    ru: {badge:'Веб-приложение',subtitle:'Сайт и админ-панель для преподавателя английского языка',description:'Современный сайт для преподавателя английского языка с описанием услуг, отзывами, формой записи и CEFR тестом. Также разработана удобная админ-панель для управления заявками, уроками и расписанием.',tech:'Технологии',project:'Посмотреть проект',github:'GitHub'},
    en: {badge:'Web application',subtitle:'Website and admin panel for an English tutor',description:'A modern website for an English tutor with services, testimonials, a booking form and a CEFR test, plus an admin panel for requests, lessons and schedules.',tech:'Technologies',project:'View project',github:'GitHub'}
  };

  const features = [
    ['Современный и стильный дизайн','Адаптивный сайт под все устройства','▣'],
    ['CEFR тест и форма записи','Автоматическая обработка заявок','▦'],
    ['Админ-панель','Управление расписанием, учениками и заявками','⚙'],
    ['Поддержка двух языков','Русский и английский интерфейс','◎']
  ];

  card.innerHTML = `
    <div class="alex-static-info">
      <span class="alex-static-badge" data-alex-copy="badge"></span>
      <h3>Alex Educator</h3>
      <p class="alex-static-subtitle" data-alex-copy="subtitle"></p>
      <p class="alex-static-description" data-alex-copy="description"></p>
      <div class="alex-static-features">${features.map((f)=>`<div><i>${f[2]}</i><p><b>${f[0]}</b><span>${f[1]}</span></p></div>`).join('')}</div>
      <div class="alex-static-tech"><small data-alex-copy="tech"></small><div><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Responsive</span></div></div>
      <div class="alex-static-actions"><a href="https://alex-educator.com" target="_blank" rel="noreferrer"><span>↗</span><b data-alex-copy="project"></b></a><a class="secondary" href="https://github.com/Insolent77/alex-educator" target="_blank" rel="noreferrer"><span>●</span><b data-alex-copy="github"></b></a></div>
    </div>
    <div class="alex-static-gallery">
      <div class="alex-static-stage">${shots.map((shot,i)=>`<button type="button" data-slide="${i}" aria-label="${shot.label}"><img src="${shot.src}" alt="${shot.label}" decoding="async"></button>`).join('')}</div>
      <div class="alex-static-nav"><button type="button" data-prev aria-label="Предыдущий скриншот">‹</button><div>${shots.map((_,i)=>`<button type="button" data-dot="${i}" aria-label="Скриншот ${i+1}"></button>`).join('')}</div><button type="button" data-next aria-label="Следующий скриншот">›</button></div>
      <div class="alex-static-thumbs">${shots.map((shot,i)=>`<button type="button" data-thumb="${i}" aria-label="${shot.label}"><img src="${shot.src}" alt="" decoding="async"></button>`).join('')}</div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    .project--alex-static{grid-column:1/-1!important;display:grid!important;grid-template-columns:26% 74%!important;min-height:620px!important;padding:22px!important;overflow:hidden!important;border-radius:24px!important;background:radial-gradient(circle at 72% 40%,rgba(25,80,148,.22),transparent 34%),linear-gradient(145deg,#0d2036 0%,#081827 55%,#071420 100%)!important;border:1px solid rgba(72,132,205,.28)!important;box-shadow:0 28px 85px rgba(1,8,18,.36)!important;color:#f2f7ff!important;transform:none!important}.project--alex-static:hover{transform:none!important}.project--alex-static *{box-sizing:border-box}
    .alex-static-info{padding:22px 28px 6px 18px;display:flex;flex-direction:column;min-width:0}.alex-static-badge{align-self:flex-start;padding:9px 15px;border-radius:999px;background:#243f60;border:1px solid rgba(142,181,230,.28);font:600 10px/1 var(--font-body);color:#eef5ff}.project--alex-static h3{margin:18px 0 0!important;font:600 34px/1.05 var(--font-body)!important;letter-spacing:-.03em!important;color:#fff!important}.alex-static-subtitle{margin:11px 0 0!important;color:#c2d0e0!important;font-size:11px!important;line-height:1.55!important}.alex-static-description{margin:23px 0 0!important;color:#9eafc3!important;font-size:9.6px!important;line-height:1.72!important}
    .alex-static-features{display:grid;gap:12px;margin-top:22px}.alex-static-features>div{display:grid;grid-template-columns:39px minmax(0,1fr);gap:11px;align-items:center}.alex-static-features i{width:37px;height:37px;display:grid;place-items:center;border-radius:10px;background:rgba(34,75,126,.48);border:1px solid rgba(103,158,241,.2);color:#66a3ff;font-style:normal;font-size:18px}.alex-static-features p{display:grid;gap:2px;margin:0!important}.alex-static-features b{font-size:9px;color:#f5f8fd}.alex-static-features span{font-size:7.8px;color:#8497af}.alex-static-tech{margin-top:23px;padding-top:17px;border-top:1px solid rgba(255,255,255,.1)}.alex-static-tech small{display:block;margin-bottom:9px;font-size:8px;color:#d6e0ec}.alex-static-tech div{display:flex;flex-wrap:wrap;gap:7px}.alex-static-tech span{padding:7px 11px;border-radius:999px;background:rgba(33,54,79,.68);border:1px solid rgba(125,157,196,.2);font-size:7px;color:#dfe8f3}.alex-static-actions{display:flex;gap:10px;margin-top:auto;padding-top:22px;flex-wrap:wrap}.alex-static-actions a{width:max-content;min-height:43px;padding:0 19px;border-radius:10px;display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#3382f4,#17469f);border:1px solid rgba(107,159,246,.35);font-size:8px;color:#fff;text-decoration:none}.alex-static-actions a.secondary{background:rgba(25,44,65,.88);border-color:rgba(255,255,255,.12)}
    .alex-static-gallery{position:relative;min-width:0;padding-top:6px}.alex-static-stage{position:relative;height:405px;perspective:1250px;overflow:visible}.alex-static-stage button{position:absolute;top:26px;width:66%;height:338px;padding:0;border:0;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 30px 60px rgba(1,7,16,.46);transition:left .55s cubic-bezier(.22,.61,.36,1),right .55s cubic-bezier(.22,.61,.36,1),transform .55s cubic-bezier(.22,.61,.36,1),opacity .4s ease;cursor:pointer;opacity:.62}.alex-static-stage img{display:block;width:100%;height:100%;object-fit:contain!important;object-position:center;background:#fff;image-rendering:auto}.alex-static-stage .is-center{left:17%;right:auto;z-index:5;opacity:1;transform:scale(1)}.alex-static-stage .is-left{left:-12%;right:auto;z-index:2;transform:scale(.86) rotateY(9deg);transform-origin:right center}.alex-static-stage .is-right{right:-12%;left:auto;z-index:2;transform:scale(.86) rotateY(-9deg);transform-origin:left center}
    .alex-static-nav{height:48px;display:flex;align-items:center;justify-content:center;gap:17px}.alex-static-nav>button{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(126,159,199,.26);background:rgba(17,37,60,.9);color:#fff;font-size:20px}.alex-static-nav>div{display:flex;gap:8px}.alex-static-nav>div button{width:8px;height:8px;padding:0;border:0;border-radius:50%;background:#2c4766}.alex-static-nav>div button.is-active{background:#2f7df8}.alex-static-thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:570px;margin:2px auto 0}.alex-static-thumbs button{height:90px;padding:0;border:2px solid transparent;border-radius:9px;overflow:hidden;background:#fff}.alex-static-thumbs button.is-active{border-color:#2f7df8}.alex-static-thumbs img{display:block;width:100%;height:100%;object-fit:contain!important;object-position:center;background:#fff;image-rendering:auto}
    @media(max-width:960px){.project--alex-static{grid-template-columns:1fr!important;padding:18px!important}.alex-static-info{padding:14px 10px 26px}.alex-static-actions{margin-top:24px;padding-top:0}.alex-static-stage{height:355px}.alex-static-stage button{height:300px;width:76%}.alex-static-stage .is-center{left:12%}.alex-static-stage .is-left{left:-42%}.alex-static-stage .is-right{right:-42%}}
    @media(max-width:560px){.project--alex-static{padding:14px!important;border-radius:18px!important}.alex-static-info{padding:12px 6px 24px}.project--alex-static h3{font-size:30px!important}.alex-static-stage{height:250px}.alex-static-stage button{top:5px;width:100%;height:230px;left:0!important;right:auto!important;transform:none!important;opacity:0}.alex-static-stage .is-center{opacity:1;z-index:5}.alex-static-thumbs{gap:6px}.alex-static-thumbs button{height:58px}}
  `;
  document.head.appendChild(style);

  const slides=[...card.querySelectorAll('[data-slide]')],dots=[...card.querySelectorAll('[data-dot]')],thumbs=[...card.querySelectorAll('[data-thumb]')];let current=0,timer;
  const render=()=>{slides.forEach((slide,i)=>{slide.classList.remove('is-left','is-center','is-right');const p=(i-current+slides.length)%slides.length;slide.classList.add(p===0?'is-center':p===1?'is-right':'is-left')});dots.forEach((d,i)=>d.classList.toggle('is-active',i===current));thumbs.forEach((t,i)=>t.classList.toggle('is-active',i===current))};
  const go=(i)=>{current=(i+slides.length)%slides.length;render();clearInterval(timer);timer=setInterval(()=>{current=(current+1)%slides.length;render()},5000)};
  card.querySelector('[data-prev]').addEventListener('click',()=>go(current-1));card.querySelector('[data-next]').addEventListener('click',()=>go(current+1));dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));thumbs.forEach((t,i)=>t.addEventListener('click',()=>go(i)));slides.forEach((s,i)=>s.addEventListener('click',()=>go(i)));
  const applyCopy=()=>{const t=copy[document.documentElement.lang==='en'?'en':'ru'];card.querySelectorAll('[data-alex-copy]').forEach(n=>n.textContent=t[n.dataset.alexCopy])};applyCopy();new MutationObserver(applyCopy).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});render();timer=setInterval(()=>{current=(current+1)%slides.length;render()},5000);
})();