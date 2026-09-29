(() => {
  const section = document.querySelector('#approach');
  if (!section || section.dataset.flowReady === 'true') return;
  section.dataset.flowReady = 'true';

  const copy = {
    ru: {
      label: 'Подход',
      title: 'Как строится<br><em>работа над сайтом</em>',
      intro: 'Прозрачный и понятный процесс — от идеи до готового сайта. Вы всегда знаете, на каком этапе находится проект.',
      noteTop: 'Если можно сделать лучше — предложу решение.',
      noteLeft: 'Вы делитесь идеей — я задаю нужные вопросы',
      noteRight: 'Вы получаете готовый сайт и понятные инструкции',
      s1t: 'Обсуждаем задачу',
      s1c: 'Изучаю ваши цели, аудиторию и пожелания к сайту.',
      s2t: 'Делаю бесплатное демо',
      s2c: 'Создаю первую версию главной страницы, чтобы вы увидели стиль и подход ещё до оплаты.',
      s3t: 'Вносим правки',
      s3c: 'Учитываю ваши комментарии и дорабатываю сайт до результата, который вам нравится.',
      s4t: 'Запускаем проект',
      s4c: 'Переношу сайт на ваш домен, настраиваю всё необходимое и передаю управление.',
      free: 'Бесплатно'
    },
    en: {
      label: 'Approach',
      title: 'How the<br><em>website process works</em>',
      intro: 'A clear and transparent process from idea to launch. You always know what stage the project is at.',
      noteTop: 'If I see a better option, I’ll suggest it.',
      noteLeft: 'You share the idea — I ask the right questions',
      noteRight: 'You get a finished website and clear instructions',
      s1t: 'Discuss the task',
      s1c: 'I study your goals, audience and expectations for the website.',
      s2t: 'Create a free demo',
      s2c: 'I build the first version of the homepage so you can see the style and approach before payment.',
      s3t: 'Make revisions',
      s3c: 'I use your feedback and refine the website until the result feels right.',
      s4t: 'Launch the project',
      s4c: 'I move the website to your domain, configure what is needed and hand over access.',
      free: 'Free'
    }
  };

  section.innerHTML = `
    <div class="approach-flow__head reveal is-visible">
      <div>
        <p class="section-label"><span>02</span><span data-flow-copy="label"></span></p>
        <h2 id="approach-title" data-flow-copy-html="title"></h2>
        <p class="approach-flow__intro" data-flow-copy="intro"></p>
      </div>
      <div class="approach-flow__note approach-flow__note--top"><span>↘</span><b data-flow-copy="noteTop"></b></div>
    </div>

    <div class="approach-flow">
      <div class="approach-flow__side-note approach-flow__side-note--left" data-flow-copy="noteLeft"></div>
      <article class="approach-flow__card approach-flow__card--one reveal is-visible">
        <span class="approach-flow__num">01</span><div class="approach-flow__icon">◯</div>
        <h3 data-flow-copy="s1t"></h3><p data-flow-copy="s1c"></p><i>→</i>
      </article>

      <article class="approach-flow__card approach-flow__card--two approach-flow__card--featured reveal is-visible">
        <span class="approach-flow__num">02</span><div class="approach-flow__icon">▣</div><small data-flow-copy="free"></small>
        <h3 data-flow-copy="s2t"></h3><p data-flow-copy="s2c"></p><i>→</i>
      </article>

      <span class="approach-flow__arrow approach-flow__arrow--a">↘</span>
      <span class="approach-flow__arrow approach-flow__arrow--b">↙</span>
      <span class="approach-flow__arrow approach-flow__arrow--c">↘</span>

      <article class="approach-flow__card approach-flow__card--three reveal is-visible">
        <span class="approach-flow__num">03</span><div class="approach-flow__icon approach-flow__icon--warm">✎</div>
        <h3 data-flow-copy="s3t"></h3><p data-flow-copy="s3c"></p><i>→</i>
      </article>

      <article class="approach-flow__card approach-flow__card--four reveal is-visible">
        <span class="approach-flow__num">04</span><div class="approach-flow__icon">↗</div>
        <h3 data-flow-copy="s4t"></h3><p data-flow-copy="s4c"></p><i>→</i>
      </article>
      <div class="approach-flow__side-note approach-flow__side-note--right" data-flow-copy="noteRight"></div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    #approach{padding-top:clamp(54px,7vw,92px)!important;padding-bottom:clamp(54px,7vw,92px)!important}
    .approach-flow__head{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr);gap:44px;align-items:end;margin-bottom:34px}
    .approach-flow__head h2{max-width:720px;margin-top:12px;font:400 clamp(42px,5.2vw,78px)/.98 var(--font-display);letter-spacing:-.035em}
    .approach-flow__head h2 em{color:var(--accent);font-style:italic;font-weight:400}
    .approach-flow__intro{max-width:650px;margin-top:20px;color:var(--glass-muted);font-size:clamp(14px,1.3vw,18px);line-height:1.6}
    .approach-flow__note{justify-self:end;align-self:center;max-width:310px;padding:16px 18px;display:flex;gap:12px;align-items:center;border:1px solid var(--glass-line);border-radius:18px;background:var(--glass-soft);box-shadow:0 18px 40px rgba(0,0,0,.08)}
    .approach-flow__note span{color:var(--accent);font-size:28px}.approach-flow__note b{font-size:13px;line-height:1.45}

    .approach-flow{position:relative;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:auto auto;gap:28px 34px;min-height:560px;padding:18px 44px 8px}
    .approach-flow__card{position:relative;min-height:220px;padding:28px 30px 26px;border:1px solid var(--glass-line);border-radius:28px;background:color-mix(in srgb,var(--glass-strong) 52%,transparent);box-shadow:0 24px 60px rgba(0,0,0,.12);backdrop-filter:blur(16px);overflow:hidden}
    .approach-flow__card--one{grid-column:2/7;grid-row:1}.approach-flow__card--two{grid-column:8/13;grid-row:1;margin-top:-10px}.approach-flow__card--three{grid-column:3/7;grid-row:2}.approach-flow__card--four{grid-column:8/12;grid-row:2}
    .approach-flow__card--featured{border-color:color-mix(in srgb,var(--accent) 68%,var(--glass-line));background:linear-gradient(145deg,color-mix(in srgb,var(--accent) 16%,var(--glass-soft)),color-mix(in srgb,var(--glass-strong) 58%,transparent));box-shadow:0 24px 70px color-mix(in srgb,var(--accent) 18%,transparent)}
    .approach-flow__num{position:absolute;top:22px;left:24px;width:38px;height:38px;display:grid;place-items:center;border:1px solid var(--glass-line);border-radius:50%;font-size:11px;font-weight:700;color:var(--accent);background:var(--glass-soft)}
    .approach-flow__icon{width:64px;height:64px;margin:14px 0 22px 56px;display:grid;place-items:center;border-radius:18px;background:color-mix(in srgb,var(--accent) 13%,var(--glass-soft));border:1px solid color-mix(in srgb,var(--accent) 32%,var(--glass-line));color:var(--accent);font-size:28px;box-shadow:0 12px 26px color-mix(in srgb,var(--accent) 12%,transparent)}
    .approach-flow__icon--warm{color:#f0b665;background:rgba(240,182,101,.12);border-color:rgba(240,182,101,.25)}
    .approach-flow__card small{position:absolute;top:24px;right:24px;padding:7px 12px;border-radius:999px;background:color-mix(in srgb,var(--accent) 13%,var(--glass-soft));color:var(--accent);font-size:9px;font-weight:700}
    .approach-flow__card h3{font:600 clamp(20px,2vw,28px)/1.1 var(--font-body);letter-spacing:-.03em}.approach-flow__card p{max-width:420px;margin-top:12px;color:var(--glass-muted);font-size:13px;line-height:1.55}
    .approach-flow__card>i{position:absolute;right:24px;bottom:22px;width:40px;height:40px;display:grid;place-items:center;border:1px solid var(--glass-line);border-radius:50%;color:var(--accent);font-style:normal;font-size:20px;background:var(--glass-soft)}
    .approach-flow__arrow{position:absolute;z-index:4;color:var(--accent);font-size:48px;line-height:1;text-shadow:0 5px 18px color-mix(in srgb,var(--accent) 25%,transparent)}
    .approach-flow__arrow--a{left:50%;top:22%;transform:rotate(-3deg)}.approach-flow__arrow--b{left:49%;top:49%;transform:rotate(6deg)}.approach-flow__arrow--c{left:51%;bottom:18%;transform:rotate(-7deg)}
    .approach-flow__side-note{position:absolute;max-width:150px;color:color-mix(in srgb,var(--accent) 88%,var(--glass-text));font-size:12px;line-height:1.45;font-style:italic;transform:rotate(-5deg)}
    .approach-flow__side-note--left{left:0;top:22%}.approach-flow__side-note--right{right:0;bottom:10%;transform:rotate(5deg)}

    body[data-glass='milk'] .approach-flow__card{box-shadow:0 20px 50px rgba(28,50,85,.08)}
    body[data-glass='sand'] .approach-flow__card{box-shadow:0 20px 50px rgba(0,71,171,.10)}
    @media(max-width:900px){.approach-flow__head{grid-template-columns:1fr}.approach-flow__note{justify-self:start}.approach-flow{grid-template-columns:1fr;grid-template-rows:none;padding:8px 0;gap:18px}.approach-flow__card{grid-column:1!important;grid-row:auto!important;margin:0!important;min-height:190px}.approach-flow__arrow,.approach-flow__side-note{display:none}}
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