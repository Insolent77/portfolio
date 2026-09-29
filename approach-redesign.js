(() => {
  const section = document.querySelector('#approach');
  if (!section || section.dataset.flowReady === 'true') return;
  section.dataset.flowReady = 'true';

  const copy = {
    ru: {
      label: 'Подход',
      title: 'Как строится<br>работа над <em>сайтом</em>',
      intro: 'Прозрачный и понятный процесс — от идеи до готового сайта. Вы всегда знаете, на каком этапе находимся.',
      noteTop: 'Если можно сделать лучше —\nпредложу решение',
      noteLeft: 'Вы делитесь\nидеей — я задаю\nнужные вопросы',
      noteRight: 'Вы получаете\nготовый сайт\nи инструкции',
      s1t: 'Обсуждаем задачу',
      s1c: 'Изучаем ваши цели, аудиторию\nи пожелания к сайту.',
      s2t: 'Делаю бесплатное демо',
      s2c: 'Создаю первую версию главной\nстраницы, чтобы вы увидели стиль\nи подход.',
      s3t: 'Вносим правки',
      s3c: 'Учитываю ваши комментарии\nи дорабатываю сайт до результата,\nкоторый вам нравится.',
      s4t: 'Запускаем проект',
      s4c: 'Переношу сайт на ваш домен,\nнастраиваю всё необходимое\nи передаю управление.',
      free: 'Бесплатно'
    },
    en: {
      label: 'Approach',
      title: 'How the<br>website process <em>works</em>',
      intro: 'A clear and transparent process from idea to launch. You always know which stage we are at.',
      noteTop: 'If there is a better way —\nI’ll suggest it',
      noteLeft: 'You share\nthe idea — I ask\nthe right questions',
      noteRight: 'You receive\na finished website\nand instructions',
      s1t: 'Discuss the task',
      s1c: 'We explore your goals, audience\nand expectations for the website.',
      s2t: 'Create a free demo',
      s2c: 'I build the first homepage version\nso you can see the style\nand approach.',
      s3t: 'Make revisions',
      s3c: 'I use your feedback and refine\nthe website until the result\nfeels right.',
      s4t: 'Launch the project',
      s4c: 'I move the site to your domain,\nconfigure everything needed\nand hand over control.',
      free: 'Free'
    }
  };

  section.innerHTML = `
    <div class="approach-ref">
      <header class="approach-ref__head reveal is-visible">
        <p class="section-label approach-ref__label"><span>02</span><span data-flow-copy="label"></span></p>
        <h2 id="approach-title" data-flow-copy-html="title"></h2>
        <p class="approach-ref__intro" data-flow-copy="intro"></p>
      </header>

      <div class="approach-ref__note approach-ref__note--top"><span data-flow-copy="noteTop"></span><i>↙</i></div>
      <div class="approach-ref__note approach-ref__note--left"><span data-flow-copy="noteLeft"></span><i>↘</i></div>
      <div class="approach-ref__note approach-ref__note--right"><i>⌁</i><span data-flow-copy="noteRight"></span></div>

      <div class="approach-ref__card approach-ref__card--one reveal is-visible">
        <span class="approach-ref__num">01</span>
        <div class="approach-ref__icon">◯</div>
        <h3 data-flow-copy="s1t"></h3>
        <p data-flow-copy="s1c"></p>
        <b class="approach-ref__button">→</b>
      </div>

      <div class="approach-ref__card approach-ref__card--two reveal is-visible">
        <span class="approach-ref__num">02</span>
        <div class="approach-ref__icon approach-ref__icon--featured">▣</div>
        <small>🎁 <span data-flow-copy="free"></span></small>
        <h3 data-flow-copy="s2t"></h3>
        <p data-flow-copy="s2c"></p>
        <b class="approach-ref__button approach-ref__button--blue">→</b>
      </div>

      <div class="approach-ref__card approach-ref__card--three reveal is-visible">
        <span class="approach-ref__num">03</span>
        <div class="approach-ref__icon approach-ref__icon--warm">✎</div>
        <h3 data-flow-copy="s3t"></h3>
        <p data-flow-copy="s3c"></p>
        <b class="approach-ref__button">→</b>
      </div>

      <div class="approach-ref__card approach-ref__card--four reveal is-visible">
        <span class="approach-ref__num">04</span>
        <div class="approach-ref__icon">↗</div>
        <h3 data-flow-copy="s4t"></h3>
        <p data-flow-copy="s4c"></p>
        <b class="approach-ref__button">→</b>
      </div>

      <span class="approach-ref__arrow approach-ref__arrow--1">↘</span>
      <span class="approach-ref__arrow approach-ref__arrow--2">↙</span>
      <span class="approach-ref__arrow approach-ref__arrow--3">↘</span>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    #approach{padding:34px clamp(18px,3.5vw,52px) 48px!important;overflow:hidden;background:#f5e6ca!important;color:#071f55!important;border-top:1px solid rgba(0,71,171,.09);border-bottom:1px solid rgba(0,71,171,.09)}
    .approach-ref{position:relative;min-height:760px;max-width:1180px;margin:0 auto}
    .approach-ref__head{position:absolute;left:10.2%;top:4.5%;width:49%}
    .approach-ref__label{margin-bottom:15px!important;color:#0047ab!important}
    .approach-ref__label span:last-child{color:#0047ab!important}
    .approach-ref__head h2{margin:0;font:600 clamp(44px,5.1vw,76px)/.93 var(--font-body)!important;letter-spacing:-.055em;color:#071f55!important}
    .approach-ref__head h2 em{font-style:normal;color:#1664ec!important}
    .approach-ref__intro{max-width:650px;margin-top:17px;color:#264a83!important;font-size:clamp(14px,1.42vw,19px);line-height:1.45;white-space:normal}

    .approach-ref__card{position:absolute;border:1px solid rgba(255,255,255,.9);border-radius:24px;background:rgba(255,250,242,.84);box-shadow:0 14px 36px rgba(39,65,107,.09),inset 0 1px 0 rgba(255,255,255,.95);padding:30px 36px 28px;color:#071f55;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
    .approach-ref__card--one{left:11.2%;top:36.3%;width:42%;height:202px}
    .approach-ref__card--two{right:7.9%;top:34.4%;width:42.2%;height:230px;background:linear-gradient(145deg,rgba(237,247,255,.96),rgba(220,237,255,.86));border-color:#b7d3ff;box-shadow:0 16px 42px rgba(0,71,171,.17),0 0 0 1px rgba(255,255,255,.8) inset}
    .approach-ref__card--three{left:16.3%;top:70%;width:36.5%;height:190px}
    .approach-ref__card--four{right:10.8%;top:71.6%;width:37.7%;height:185px}
    .approach-ref__num{position:absolute;left:28px;top:26px;width:39px;height:39px;display:grid;place-items:center;border-radius:50%;background:rgba(233,241,255,.95);border:1px solid rgba(0,71,171,.12);font:700 12px/1 var(--font-body);color:#0047ab}
    .approach-ref__icon{position:absolute;left:87px;top:25px;width:70px;height:70px;display:grid;place-items:center;border-radius:18px;background:linear-gradient(145deg,#eaf2ff,#dceaff);border:1px solid rgba(255,255,255,.95);box-shadow:0 10px 24px rgba(0,71,171,.10);color:#0d56d8;font-size:28px}
    .approach-ref__icon--featured{background:linear-gradient(145deg,#246fff,#0047ab);color:#fff;box-shadow:0 10px 28px rgba(0,71,171,.30)}
    .approach-ref__icon--warm{background:linear-gradient(145deg,#fff4d6,#f4e1ab);color:#0b3a87}
    .approach-ref__card h3{position:absolute;left:112px;top:112px;margin:0;font:700 clamp(20px,1.7vw,27px)/1.05 var(--font-body);letter-spacing:-.035em;color:#071f55}
    .approach-ref__card p{position:absolute;left:112px;top:151px;max-width:340px;margin:0;color:#31558a;font-size:13px;line-height:1.45;white-space:pre-line}
    .approach-ref__card--two h3{top:118px}.approach-ref__card--two p{top:156px}.approach-ref__card--three h3,.approach-ref__card--four h3{left:96px;top:86px}.approach-ref__card--three p,.approach-ref__card--four p{left:96px;top:122px;font-size:12.5px}
    .approach-ref__card small{position:absolute;right:24px;top:22px;padding:8px 14px;border-radius:999px;background:#d8e8ff;color:#0047ab;font-size:11px;font-weight:700}
    .approach-ref__button{position:absolute;right:23px;bottom:22px;width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:#fff;border:1px solid rgba(0,71,171,.10);box-shadow:0 8px 20px rgba(23,59,112,.10);font-size:20px;color:#0b3a87}
    .approach-ref__button--blue{background:#1766ec;color:#fff;box-shadow:0 8px 22px rgba(0,71,171,.28)}

    .approach-ref__arrow{position:absolute;z-index:3;color:#1262ea;font:400 53px/1 var(--font-body);filter:drop-shadow(0 5px 10px rgba(0,71,171,.12))}
    .approach-ref__arrow--1{left:51.1%;top:45%;transform:rotate(-5deg)}
    .approach-ref__arrow--2{left:50%;top:62.5%;transform:rotate(12deg)}
    .approach-ref__arrow--3{left:51%;top:78%;transform:rotate(-8deg)}
    .approach-ref__note{position:absolute;z-index:4;color:#0a4daf;font:500 15px/1.25 var(--font-body);font-style:italic;white-space:pre-line;letter-spacing:-.01em}
    .approach-ref__note i{display:block;color:#0f5fe6;font-style:normal;font-size:40px;line-height:1}
    .approach-ref__note--top{right:4.6%;top:11.8%;transform:rotate(-7deg);text-align:left}.approach-ref__note--top i{margin-top:4px;margin-left:-56px;transform:rotate(9deg)}
    .approach-ref__note--left{left:.4%;top:47.8%;width:115px;transform:rotate(-7deg)}.approach-ref__note--left i{margin-left:58px;margin-top:4px;transform:rotate(7deg)}
    .approach-ref__note--right{right:.3%;bottom:6.8%;width:130px;transform:rotate(5deg)}.approach-ref__note--right i{font-size:30px;margin-bottom:3px}

    @media(max-width:980px){
      .approach-ref{min-height:auto;display:grid;grid-template-columns:1fr 1fr;gap:18px;padding-top:10px}
      .approach-ref__head{position:relative;left:auto;top:auto;width:auto;grid-column:1/-1;margin-bottom:18px}
      .approach-ref__card{position:relative!important;left:auto!important;right:auto!important;top:auto!important;width:auto!important;height:auto!important;min-height:190px}
      .approach-ref__card h3,.approach-ref__card p{position:relative!important;left:auto!important;top:auto!important;margin-left:82px}.approach-ref__card h3{margin-top:85px}.approach-ref__card p{margin-top:10px}
      .approach-ref__arrow,.approach-ref__note{display:none}
    }
    @media(max-width:620px){
      #approach{padding:34px 16px 38px!important}
      .approach-ref{grid-template-columns:1fr}.approach-ref__head{grid-column:1}
      .approach-ref__head h2{font-size:42px!important}.approach-ref__intro{font-size:14px}
      .approach-ref__card{min-height:190px;padding:24px}.approach-ref__num{left:22px;top:22px}.approach-ref__icon{left:76px;top:21px;width:58px;height:58px}.approach-ref__card h3,.approach-ref__card p{margin-left:0!important}.approach-ref__card h3{margin-top:82px}.approach-ref__card p{font-size:12.5px}
    }
  `;
  document.head.appendChild(style);

  const apply = () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const t = copy[lang];
    section.querySelectorAll('[data-flow-copy]').forEach((node) => node.textContent = t[node.dataset.flowCopy] || '');
    section.querySelectorAll('[data-flow-copy-html]').forEach((node) => node.innerHTML = t[node.dataset.flowCopyHtml] || '');
  };
  apply();
  new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();