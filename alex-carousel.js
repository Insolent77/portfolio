(() => {
  const style = document.createElement('style');
  style.id = 'alex-carousel-style';
  style.textContent = `
    .alex-carousel{position:relative;width:min(92%,460px);height:222px;overflow:visible}
    .alex-carousel__stage{position:relative;width:100%;height:190px;perspective:900px}
    .alex-carousel__slide{position:absolute;inset:0;opacity:0;transform:translateX(22px) scale(.975) rotateY(-2deg);pointer-events:none;transition:opacity .55s var(--ease),transform .55s var(--ease);border:1px solid rgba(255,255,255,.16);border-radius:14px;overflow:hidden;box-shadow:0 24px 46px rgba(25,28,42,.24);background:#f5f6fb}
    .alex-carousel__slide.is-active{opacity:1;transform:translateX(0) scale(1) rotateY(0);pointer-events:auto}
    .alex-carousel__controls{position:absolute;left:50%;bottom:0;transform:translateX(-50%);display:flex;align-items:center;gap:12px;z-index:10}
    .alex-carousel__arrow{width:31px;height:31px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.22);background:rgba(22,28,45,.72);color:#fff;font:500 16px/1 var(--font-body);cursor:pointer;backdrop-filter:blur(8px);transition:transform .2s ease,border-color .2s ease,background .2s ease}
    .alex-carousel__arrow:hover{transform:scale(1.06);border-color:rgba(209,138,91,.72);background:rgba(26,33,54,.9)}
    .alex-carousel__dots{display:flex;gap:6px;align-items:center}
    .alex-carousel__dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.34);cursor:pointer;transition:width .2s ease,background .2s ease}
    .alex-carousel__dot.is-active{width:17px;border-radius:999px;background:#d18a5b}
    .alex-carousel__counter{position:absolute;right:8px;bottom:5px;color:rgba(255,255,255,.6);font:600 6px/1 var(--font-body);letter-spacing:.08em}

    .alex-site-ui{height:100%;padding:10px 12px 12px;background:linear-gradient(145deg,#f8f5ef,#eef3ff);color:#111b45;font-family:var(--font-body)}
    .alex-site-ui__nav{height:22px;display:flex;align-items:center;gap:8px;font-size:4.5px;border-bottom:1px solid rgba(17,27,69,.08)}
    .alex-site-ui__brand{display:flex;align-items:center;gap:5px;margin-right:auto;font-weight:700}.alex-site-ui__logo{width:15px;height:15px;display:grid;place-items:center;border-radius:5px;background:#111b45;color:#fff;font-size:5px}.alex-site-ui__nav i{font-style:normal;color:#65708d}.alex-site-ui__nav b{padding:4px 7px;border-radius:8px;background:#111b45;color:#fff;font-weight:600}
    .alex-site-ui__hero{display:grid;grid-template-columns:1fr .92fr;gap:10px;padding:13px 5px 8px}.alex-site-ui__hero small{display:block;color:#4962a8;font-size:4px;letter-spacing:.12em}.alex-site-ui__hero h4{margin:6px 0 0;font:700 16px/.98 var(--font-body);letter-spacing:-.05em;color:#101941}.alex-site-ui__hero h4 em{font-style:normal;color:#4369c4}.alex-site-ui__hero p{width:82%;height:4px;margin:8px 0 0;border-radius:8px;background:rgba(17,27,69,.12)}.alex-site-ui__hero p+p{width:63%;margin-top:4px}.alex-site-ui__portrait{position:relative;min-height:86px;border-radius:12px;background:linear-gradient(145deg,#d8e4fa,#9eb7de);overflow:hidden}.alex-site-ui__portrait:before{content:'';position:absolute;left:50%;top:14px;width:31px;height:31px;border-radius:50%;background:#e5c3aa;transform:translateX(-50%)}.alex-site-ui__portrait:after{content:'';position:absolute;left:50%;bottom:-8px;width:62px;height:61px;border-radius:34px 34px 10px 10px;background:#163a32;transform:translateX(-50%)}
    .alex-site-ui__services{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;padding:0 5px}.alex-site-ui__services article{height:47px;padding:6px;border:1px solid rgba(17,27,69,.08);border-radius:7px;background:rgba(255,255,255,.8)}.alex-site-ui__services b{display:block;font-size:5px}.alex-site-ui__services i{display:block;width:88%;height:3px;margin-top:6px;border-radius:6px;background:rgba(17,27,69,.11)}.alex-site-ui__services i+i{width:63%;margin-top:3px}

    .alex-admin-slide{display:grid;place-items:center;padding:12px;background:linear-gradient(145deg,#dce4f2,#f4efe8)}
    .alex-admin-slide img{width:106%;height:106%;object-fit:cover;object-position:center;border-radius:9px;box-shadow:0 18px 38px rgba(31,39,67,.18);transform:rotate(-.45deg)}

    .alex-lk-ui{height:100%;padding:9px 11px 11px;background:linear-gradient(145deg,#faf7f1,#eef3ff);color:#111b45;font-family:var(--font-body)}
    .alex-lk-ui__top{height:21px;display:flex;align-items:center;border-bottom:1px solid rgba(17,27,69,.08)}.alex-lk-ui__brand{display:flex;align-items:center;gap:5px;font-size:5px;font-weight:700;margin-right:auto}.alex-lk-ui__brand i{width:14px;height:14px;border-radius:5px;background:#111b45}.alex-lk-ui__nav{display:flex;gap:9px;font-size:4px;color:#65708d}.alex-lk-ui__nav b{color:#111b45}
    .alex-lk-ui__welcome{margin:10px auto 6px;width:68%;padding:9px 11px;border-radius:9px;background:linear-gradient(135deg,#eef3ff,#dae5fb)}.alex-lk-ui__welcome small{display:block;font-size:3.5px;letter-spacing:.08em}.alex-lk-ui__welcome strong{display:block;margin-top:3px;font-size:11px;letter-spacing:-.04em}
    .alex-lk-ui__stats{width:68%;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}.alex-lk-ui__stats span{height:18px;padding:4px;border:1px solid rgba(17,27,69,.07);border-radius:5px;background:#fff}.alex-lk-ui__stats i{display:block;width:18px;height:3px;border-radius:5px;background:rgba(17,27,69,.12)}.alex-lk-ui__stats b{display:block;margin-top:3px;font-size:5px}
    .alex-lk-ui__content{width:68%;margin:6px auto 0;display:grid;grid-template-columns:1.55fr .65fr;gap:6px}.alex-lk-ui__task,.alex-lk-ui__calendar{min-height:69px;border:1px solid rgba(17,27,69,.07);border-radius:7px;background:#fff;padding:7px}.alex-lk-ui__task small,.alex-lk-ui__calendar small{display:block;font-size:4px;font-weight:700}.alex-lk-ui__empty{width:24px;height:24px;margin:9px auto 5px;border-radius:8px;background:#edf1fa;position:relative}.alex-lk-ui__empty:after{content:'✓';position:absolute;inset:0;display:grid;place-items:center;color:#65708d;font-size:8px}.alex-lk-ui__task i{display:block;width:52%;height:3px;margin:5px auto;border-radius:5px;background:rgba(17,27,69,.08)}.alex-lk-ui__calendar div{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-top:8px}.alex-lk-ui__calendar b{height:7px;border-radius:2px;background:rgba(17,27,69,.06)}.alex-lk-ui__calendar b:nth-child(18){background:#111b45}

    @media(max-width:760px){.alex-carousel{width:96%;height:207px}.alex-carousel__stage{height:176px}.alex-site-ui__hero h4{font-size:14px}.alex-carousel__arrow{width:28px;height:28px}}
    @media(prefers-reduced-motion:reduce){.alex-carousel__slide{transition:none}.alex-carousel__arrow{transition:none}}
  `;
  document.head.appendChild(style);

  const card = [...document.querySelectorAll('.project')].find((node) => node.querySelector('h3')?.textContent.trim() === 'Alex Educator');
  const preview = card?.querySelector('.project-preview--alex');
  if (!preview || preview.dataset.carouselReady === 'true') return;
  preview.dataset.carouselReady = 'true';

  preview.innerHTML = `
    <div class="alex-carousel" data-alex-carousel>
      <div class="alex-carousel__stage">
        <div class="alex-carousel__slide is-active" data-slide="0">
          <div class="alex-site-ui">
            <div class="alex-site-ui__nav"><span class="alex-site-ui__brand"><span class="alex-site-ui__logo">AE</span>Alex the Educator</span><i>Home</i><i>Services</i><i>Testimonials</i><i>Test</i><b>Apply now</b></div>
            <div class="alex-site-ui__hero"><div><small>ENGLISH TUTORING WITH CLARITY AND CARE</small><h4>Perfection is<br>not a goal.<br>It’s a <em>standard.</em></h4><p></p><p></p></div><div class="alex-site-ui__portrait"></div></div>
            <div class="alex-site-ui__services"><article><b>B2–C1 Group Lessons</b><i></i><i></i></article><article><b>One-on-One Lessons</b><i></i><i></i></article><article><b>C1 mini-group</b><i></i><i></i></article></div>
          </div>
        </div>
        <div class="alex-carousel__slide" data-slide="1"><div class="alex-admin-slide"><img src="assets/alex-admin-preview.svg" alt=""></div></div>
        <div class="alex-carousel__slide" data-slide="2">
          <div class="alex-lk-ui">
            <div class="alex-lk-ui__top"><span class="alex-lk-ui__brand"><i></i>Alex the Educator</span><span class="alex-lk-ui__nav"><b>Главная</b><span>Расписание</span><span>Задания</span></span></div>
            <div class="alex-lk-ui__welcome"><small>ЛИЧНЫЙ КАБИНЕТ УЧЕНИКА</small><strong>Здравствуйте, ТЕСТОВЫЙ!</strong></div>
            <div class="alex-lk-ui__stats"><span><i></i><b>0</b></span><span><i></i><b>0</b></span><span><i></i><b>4</b></span><span><i></i><b>5</b></span></div>
            <div class="alex-lk-ui__content"><div class="alex-lk-ui__task"><small>Что сделать дальше</small><div class="alex-lk-ui__empty"></div><i></i></div><div class="alex-lk-ui__calendar"><small>Календарь занятий</small><div>${'<b></b>'.repeat(28)}</div></div></div>
          </div>
        </div>
        <span class="alex-carousel__counter">1 / 3</span>
      </div>
      <div class="alex-carousel__controls" aria-label="Переключение изображений Alex Educator">
        <span class="alex-carousel__arrow" role="button" tabindex="0" data-prev aria-label="Предыдущее изображение">‹</span>
        <div class="alex-carousel__dots"><span class="alex-carousel__dot is-active" role="button" tabindex="0" data-dot="0"></span><span class="alex-carousel__dot" role="button" tabindex="0" data-dot="1"></span><span class="alex-carousel__dot" role="button" tabindex="0" data-dot="2"></span></div>
        <span class="alex-carousel__arrow" role="button" tabindex="0" data-next aria-label="Следующее изображение">›</span>
      </div>
    </div>`;

  const carousel = preview.querySelector('[data-alex-carousel]');
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const dots = [...carousel.querySelectorAll('[data-dot]')];
  const counter = carousel.querySelector('.alex-carousel__counter');
  let index = 0;
  let timer = null;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const show = (nextIndex, userAction = false) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
    if (userAction) restart();
  };
  const stop = () => { if (timer) clearInterval(timer); timer = null; };
  const start = () => { if (reduced || timer) return; timer = setInterval(() => show(index + 1), 4500); };
  const restart = () => { stop(); start(); };

  const activate = (el, fn) => {
    el.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); fn(); });
    el.addEventListener('keydown', (event) => { if (event.key !== 'Enter' && event.key !== ' ') return; event.preventDefault(); event.stopPropagation(); fn(); });
  };
  activate(carousel.querySelector('[data-prev]'), () => show(index - 1, true));
  activate(carousel.querySelector('[data-next]'), () => show(index + 1, true));
  dots.forEach((dot, i) => activate(dot, () => show(i, true)));

  carousel.addEventListener('pointerenter', stop);
  carousel.addEventListener('pointerleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  start();
})();