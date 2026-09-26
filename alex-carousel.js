(() => {
  const card = [...document.querySelectorAll('.project')].find((node) => node.querySelector('h3')?.textContent.trim() === 'Alex Educator');
  if (!card || card.dataset.alexScreensReady === 'true') return;
  card.dataset.alexScreensReady = 'true';
  card.className = 'project reveal is-visible project--alex-screens';

  const shot = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400`;
  const shots = [
    { label: 'Личный кабинет', src: shot('https://lk.alex-educator.com/') },
    { label: 'Главная страница', src: shot('https://alex-educator.com/') },
    { label: 'Админ-панель', src: shot('https://www.admin.alex-educator.com/') }
  ];

  const copy = {
    ru: {
      badge: 'Веб-приложение',
      subtitle: 'Сайт и админ-панель для преподавателя английского языка',
      description: 'Современный сайт для преподавателя английского языка с описанием услуг, отзывами, формой записи и CEFR тестом. Также разработана удобная админ-панель для управления заявками, уроками и расписанием.',
      feature1: ['Современный и стильный дизайн', 'Адаптивный сайт под все устройства'],
      feature2: ['CEFR тест и форма записи', 'Автоматическая обработка заявок'],
      feature3: ['Админ-панель', 'Управление расписанием, учениками и заявками'],
      feature4: ['Поддержка двух языков', 'Русский и английский интерфейс'],
      tech: 'Технологии',
      project: 'Посмотреть проект',
      github: 'GitHub'
    },
    en: {
      badge: 'Web application',
      subtitle: 'Website and admin panel for an English tutor',
      description: 'A modern English tutor website with services, testimonials, booking form and CEFR test, plus an admin panel for requests, lessons and schedules.',
      feature1: ['Modern visual design', 'Responsive website for every screen'],
      feature2: ['CEFR test and booking form', 'Automatic request processing'],
      feature3: ['Admin panel', 'Schedule, students and requests management'],
      feature4: ['Two languages', 'Russian and English interface'],
      tech: 'Technologies',
      project: 'View project',
      github: 'GitHub'
    }
  };

  const icons = [
    '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H4zM8 20h8M12 16v4"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 6h16v14H4zM8 3v6M16 3v6M4 10h16"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3l2 2.5 3.2-.3.8 3.1 2.8 1.6-1.6 2.8.3 3.2-3.1.8L12 21l-2.5-2-3.2.3-.8-3.1-2.8-1.6 1.6-2.8-.3-3.2 3.1-.8L12 3zM9.5 12l1.5 1.5 3.5-4"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>'
  ];

  card.innerHTML = `
    <div class="alex-ref-info">
      <span class="alex-ref-badge" data-k="badge"></span>
      <h3>Alex Educator</h3>
      <p class="alex-ref-subtitle" data-k="subtitle"></p>
      <p class="alex-ref-description" data-k="description"></p>

      <div class="alex-ref-features">
        ${[1,2,3,4].map((n,i)=>`<div>${icons[i]}<p><b data-f="${n}" data-p="0"></b><span data-f="${n}" data-p="1"></span></p></div>`).join('')}
      </div>

      <div class="alex-ref-tech">
        <small data-k="tech"></small>
        <div><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>HTML</span><span>CSS</span><span>Responsive</span></div>
      </div>

      <div class="alex-ref-actions">
        <a class="alex-ref-cta" href="https://alex-educator.com" target="_blank" rel="noreferrer"><span>↗</span><b data-k="project"></b></a>
        <a class="alex-ref-cta alex-ref-cta--secondary" href="https://github.com/Insolent77/alex-educator" target="_blank" rel="noreferrer"><span>◉</span><b data-k="github"></b></a>
      </div>
    </div>

    <div class="alex-ref-gallery">
      <div class="alex-ref-stage" aria-label="Скриншоты проекта">
        ${shots.map((s,i)=>`<button type="button" class="alex-ref-slide" data-slide="${i}" aria-label="${s.label}"><img src="${s.src}" alt="${s.label}" loading="lazy"></button>`).join('')}
      </div>

      <div class="alex-ref-controls">
        <button type="button" data-prev aria-label="Предыдущий скриншот">‹</button>
        <div class="alex-ref-dots">${shots.map((_,i)=>`<button type="button" data-dot="${i}" aria-label="Скриншот ${i+1}"></button>`).join('')}</div>
        <button type="button" data-next aria-label="Следующий скриншот">›</button>
      </div>

      <div class="alex-ref-thumbs">
        ${shots.map((s,i)=>`<button type="button" data-thumb="${i}" aria-label="${s.label}"><img src="${s.src}" alt="" loading="lazy"></button>`).join('')}
      </div>
    </div>`;

  const style = document.createElement('style');
  style.dataset.alexScreens = 'true';
  style.textContent = `
    .project--alex-screens{grid-column:1/-1!important;display:grid!important;grid-template-columns:26% 74%!important;min-height:620px!important;padding:22px!important;overflow:hidden!important;border-radius:24px!important;background:radial-gradient(circle at 72% 40%,rgba(25,80,148,.22),transparent 34%),linear-gradient(145deg,#0d2036 0%,#081827 55%,#071420 100%)!important;border:1px solid rgba(72,132,205,.28)!important;box-shadow:0 28px 85px rgba(1,8,18,.36)!important;color:#f2f7ff!important;transform:none!important}
    .project--alex-screens:hover{transform:none!important}.project--alex-screens *{box-sizing:border-box}
    .alex-ref-info{padding:22px 28px 6px 18px;display:flex;flex-direction:column;min-width:0}
    .alex-ref-badge{align-self:flex-start;padding:9px 15px;border-radius:999px;background:linear-gradient(180deg,#263f60,#1d3552);border:1px solid rgba(142,181,230,.28);font:600 10px/1 var(--font-body);color:#eef5ff}
    .project--alex-screens h3{margin:18px 0 0!important;font:600 34px/1.05 var(--font-body)!important;letter-spacing:-.03em!important;color:#fff!important}
    .alex-ref-subtitle{margin:11px 0 0!important;color:#c2d0e0!important;font-size:11px!important;line-height:1.55!important}
    .alex-ref-description{margin:23px 0 0!important;color:#9eafc3!important;font-size:9.6px!important;line-height:1.72!important}
    .alex-ref-features{display:grid;gap:12px;margin-top:22px}
    .alex-ref-features>div{display:grid;grid-template-columns:39px minmax(0,1fr);gap:11px;align-items:center}
    .alex-ref-features svg{width:37px;height:37px;padding:9px;border-radius:10px;background:rgba(34,75,126,.48);stroke:#66a3ff;fill:none;stroke-width:1.65;border:1px solid rgba(103,158,241,.2)}
    .alex-ref-features p{display:grid;gap:2px;margin:0!important}.alex-ref-features b{font-size:9px;color:#f5f8fd}.alex-ref-features span{font-size:7.8px;color:#8497af}
    .alex-ref-tech{margin-top:23px;padding-top:17px;border-top:1px solid rgba(255,255,255,.1)}
    .alex-ref-tech small{display:block;margin-bottom:9px;font-size:8px;color:#d6e0ec}.alex-ref-tech div{display:flex;flex-wrap:wrap;gap:7px}
    .alex-ref-tech span{padding:7px 11px;border-radius:999px;background:rgba(33,54,79,.68);border:1px solid rgba(125,157,196,.2);font-size:7px;color:#dfe8f3}
    .alex-ref-actions{display:flex;gap:10px;margin-top:auto;padding-top:22px;flex-wrap:wrap}
    .alex-ref-cta{width:max-content;min-height:43px;padding:0 19px;border-radius:10px;display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#3382f4,#17469f);border:1px solid rgba(107,159,246,.35);box-shadow:0 12px 28px rgba(24,92,197,.22);font-size:8px;color:#fff;text-decoration:none}
    .alex-ref-cta--secondary{background:rgba(25,44,65,.88);box-shadow:none;border-color:rgba(255,255,255,.12)}

    .alex-ref-gallery{position:relative;min-width:0;padding-top:6px}
    .alex-ref-stage{position:relative;height:405px;perspective:1250px;overflow:visible}
    .alex-ref-slide{position:absolute;top:26px;width:66%;height:338px;padding:0;border:0;border-radius:14px;overflow:hidden;background:#fff;box-shadow:0 30px 60px rgba(1,7,16,.46);transition:left .55s cubic-bezier(.22,.61,.36,1),right .55s cubic-bezier(.22,.61,.36,1),transform .55s cubic-bezier(.22,.61,.36,1),opacity .4s ease;cursor:pointer;opacity:.62}
    .alex-ref-slide img{display:block;width:100%;height:100%;object-fit:cover;background:#f8f8fa}
    .alex-ref-slide.is-center{left:17%;right:auto;z-index:5;opacity:1;transform:scale(1)}
    .alex-ref-slide.is-left{left:-12%;right:auto;z-index:2;transform:scale(.86) rotateY(9deg);transform-origin:right center}
    .alex-ref-slide.is-right{right:-12%;left:auto;z-index:2;transform:scale(.86) rotateY(-9deg);transform-origin:left center}

    .alex-ref-controls{height:48px;display:flex;align-items:center;justify-content:center;gap:17px}
    .alex-ref-controls>button{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(126,159,199,.26);background:rgba(17,37,60,.9);color:#fff;font-size:20px}
    .alex-ref-dots{display:flex;gap:8px}.alex-ref-dots button{width:8px;height:8px;padding:0;border:0;border-radius:50%;background:#2c4766}.alex-ref-dots button.is-active{background:#2f7df8}
    .alex-ref-thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:570px;margin:2px auto 0}
    .alex-ref-thumbs button{height:90px;padding:0;border:2px solid transparent;border-radius:9px;overflow:hidden;background:#dfe6ef;box-shadow:0 8px 20px rgba(0,0,0,.14)}
    .alex-ref-thumbs button.is-active{border-color:#2f7df8}.alex-ref-thumbs img{display:block;width:100%;height:100%;object-fit:cover;background:#fff}

    @media(max-width:960px){.project--alex-screens{grid-template-columns:1fr!important;padding:18px!important}.alex-ref-info{padding:14px 10px 26px}.alex-ref-actions{margin-top:24px;padding-top:0}.alex-ref-stage{height:355px}.alex-ref-slide{height:300px;width:76%}.alex-ref-slide.is-center{left:12%}.alex-ref-slide.is-left{left:-42%}.alex-ref-slide.is-right{right:-42%}}
    @media(max-width:560px){.project--alex-screens{padding:14px!important;border-radius:18px!important}.alex-ref-info{padding:12px 6px 24px}.project--alex-screens h3{font-size:30px!important}.alex-ref-stage{height:250px}.alex-ref-slide{top:5px;width:100%;height:230px;left:0!important;right:auto!important;transform:none!important;opacity:0}.alex-ref-slide.is-center{opacity:1;z-index:5}.alex-ref-thumbs{gap:6px}.alex-ref-thumbs button{height:58px}}
  `;
  document.head.appendChild(style);

  const slides = [...card.querySelectorAll('[data-slide]')];
  const dots = [...card.querySelectorAll('[data-dot]')];
  const thumbs = [...card.querySelectorAll('[data-thumb]')];
  let current = 1;

  const render = () => {
    slides.forEach((slide, i) => {
      slide.classList.remove('is-left','is-center','is-right');
      const pos = (i - current + slides.length) % slides.length;
      slide.classList.add(pos === 0 ? 'is-center' : pos === 1 ? 'is-right' : 'is-left');
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    thumbs.forEach((thumb, i) => thumb.classList.toggle('is-active', i === current));
  };

  const go = (index) => { current = (index + slides.length) % slides.length; render(); };
  card.querySelector('[data-prev]').addEventListener('click', () => go(current - 1));
  card.querySelector('[data-next]').addEventListener('click', () => go(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => go(i)));
  slides.forEach((slide, i) => slide.addEventListener('click', () => go(i)));

  const applyCopy = () => {
    const t = copy[document.documentElement.lang === 'en' ? 'en' : 'ru'];
    card.querySelectorAll('[data-k]').forEach((node) => node.textContent = t[node.dataset.k]);
    [1,2,3,4].forEach((n) => {
      const pair = t['feature' + n];
      card.querySelector(`[data-f="${n}"][data-p="0"]`).textContent = pair[0];
      card.querySelector(`[data-f="${n}"][data-p="1"]`).textContent = pair[1];
    });
  };

  applyCopy();
  new MutationObserver(applyCopy).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  render();
})();