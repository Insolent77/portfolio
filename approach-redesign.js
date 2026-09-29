(() => {
  const section = document.querySelector('#approach');
  if (!section || section.dataset.flowReady === 'true') return;
  section.dataset.flowReady = 'true';

  const copy = {
    ru: {
      label: 'Подход',
      title: 'Как строится<br>работа над <em>сайтом</em>',
      intro: 'Прозрачный и понятный процесс — от идеи до готового сайта.\nВы всегда знаете, на каком этапе находимся.',
      noteTop: 'Если можно\nсделать лучше —\nпредложу решение',
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
    <div class="approach-ref"><div class="approach-ref__scenery" aria-hidden="true"></div>
      <header class="approach-ref__head reveal is-visible">
        <p class="section-label approach-ref__label"><span>02 /</span><span data-flow-copy="label"></span></p>
        <h2 id="approach-title" data-flow-copy-html="title"></h2>
        <p class="approach-ref__intro" data-flow-copy="intro"></p>
      </header>

      <div class="approach-ref__note approach-ref__note--top"><span data-flow-copy="noteTop"></span><svg class="note-arrow" viewBox="0 0 100 85" aria-hidden="true"><path d="M94 5C57 12 25 44 22 72m-2-16 2 17 15-10"/></svg><svg class="note-bulb" viewBox="0 0 32 40" aria-hidden="true"><path d="M12 28c0-7-6-7-6-14a9 9 0 0 1 18 0c0 7-6 8-6 14m-6 0h6m-6 4h6m-5 3h4M15 0v-3M1 6l-4-3m31 3 4-3M1 18h-4m31 0h4"/></svg></div>
      <div class="approach-ref__note approach-ref__note--left"><span data-flow-copy="noteLeft"></span><svg class="note-arrow" viewBox="0 0 80 50" aria-hidden="true"><path d="M5 3c0 27 23 35 62 33m-8-6 9 6-9 7"/></svg></div>
      <div class="approach-ref__note approach-ref__note--right"><svg class="note-marks" viewBox="0 0 50 35" aria-hidden="true"><path d="m10 28 10-24m0 28L39 15"/></svg><span data-flow-copy="noteRight"></span></div>

      <div class="approach-ref__card approach-ref__card--one reveal is-visible">
        <span class="approach-ref__num">01</span>
        <div class="approach-ref__icon" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M12 8h16a9 9 0 0 1 9 9v5a9 9 0 0 1-9 9H17L8 36l1-8a9 9 0 0 1-6-8v-3a9 9 0 0 1 9-9Z"/></svg></div>
        <h3 data-flow-copy="s1t"></h3>
        <p data-flow-copy="s1c"></p>
        <span class="approach-ref__pebble" aria-hidden="true"></span>
      </div>

      <div class="approach-ref__card approach-ref__card--two reveal is-visible">
        <span class="approach-ref__num">02</span>
        <div class="approach-ref__icon approach-ref__icon--featured" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M6 7h28v21H6zM20 28v7m-8 0h16"/></svg></div>
        <small><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v11H4zM2 6h20v4H2zM12 6v15m0-15C3 7 5-2 9 2l3 4c9 1 7-8 3-4Z"/></svg> <span data-flow-copy="free"></span></small>
        <h3 data-flow-copy="s2t"></h3>
        <p data-flow-copy="s2c"></p>
        <span class="approach-ref__pebble" aria-hidden="true"></span>
      </div>

      <div class="approach-ref__card approach-ref__card--three reveal is-visible">
        <span class="approach-ref__num">03</span>
        <div class="approach-ref__icon approach-ref__icon--warm" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="m9 25 19-19 7 7-19 19-10 3 3-10Zm14-14 7 7M9 25l7 7"/></svg></div>
        <h3 data-flow-copy="s3t"></h3>
        <p data-flow-copy="s3c"></p>
        <span class="approach-ref__pebble" aria-hidden="true"></span>
      </div>

      <div class="approach-ref__card approach-ref__card--four reveal is-visible">
        <span class="approach-ref__num">04</span>
        <div class="approach-ref__icon" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M15 25c0-11 10-19 22-20 0 12-8 22-19 22l-3-2Zm0-8-8 1-4 7 12-1m9 2-1 8-7 4 1-11M9 29c-4 0-5 4-5 7 4 0 7-2 7-5"/><circle cx="27" cy="15" r="4"/></svg></div>
        <h3 data-flow-copy="s4t"></h3>
        <p data-flow-copy="s4c"></p>
        <span class="approach-ref__pebble" aria-hidden="true"></span>
      </div>

      <svg class="approach-ref__arrows" viewBox="0 0 1335 670" aria-hidden="true"><defs><linearGradient id="flow-ink"><stop stop-color="#075bff" stop-opacity="0"/><stop offset=".45" stop-color="#075bff"/></linearGradient></defs><g fill="none" stroke="url(#flow-ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M621 303c42-12 43 26 74 34m-10-11 10 11-15 4"/><path stroke="#075bff" d="M711 403c-32 7-55 43-81 67m4-15-4 15 15-6"/><path d="M596 521c57-34 73 23 112 25m-10-10 10 10-13 5"/></g></svg></div>`;

  const apply = () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
    const t = copy[lang];
    section.querySelectorAll('[data-flow-copy]').forEach((node) => node.textContent = t[node.dataset.flowCopy] || '');
    section.querySelectorAll('[data-flow-copy-html]').forEach((node) => node.innerHTML = t[node.dataset.flowCopyHtml] || '');
  };
  apply();
  new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
