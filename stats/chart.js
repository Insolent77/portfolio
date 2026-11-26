function renderDailyChart(days) {
  const svg = document.querySelector('#chart');
  const detail = document.querySelector('#day-detail');
  document.querySelector('#period').textContent = 'По дням · московское время';
  svg.replaceChildren();
  detail.replaceChildren();
  const dates = days.map(day => day.day);
  if (!dates.length) {
    const today = new Intl.DateTimeFormat('sv-SE', { timeZone:'Europe/Moscow' }).format(new Date());
    for (let offset = 6; offset >= 0; offset--) {
      const date = new Date(today + 'T12:00:00Z');
      date.setUTCDate(date.getUTCDate() - offset);
      dates.push(date.toISOString().slice(0,10));
    }
  }
  const clicks = days.map(day => day.buttons.reduce((sum, b) => sum + b.clicks, 0));
  const peak = Math.max(4, ...clicks, ...days.map(day => day.visitors));
  const magnitude = 10 ** Math.floor(Math.log10(peak / 4));
  const step = [1,2,5,10].find(n => n * magnitude >= peak / 4) * magnitude;
  const max = step * 4;
  const left = 48, right = 650, bottom = 208;
  const x = i => dates.length === 1 ? (left + right) / 2 : left + i * (right-left) / (dates.length-1);
  const y = n => bottom - n / max * 185;
  function add(tag, attrs, label) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);
    if (label !== undefined) el.textContent = label;
    svg.append(el);
    return el;
  }
  for (let n = 0; n <= max; n += step) {
    add('line',{x1:left,x2:right,y1:y(n),y2:y(n),stroke:'#d8e2ea','stroke-dasharray':'2 4'});
    add('text',{x:left-7,y:y(n)+4,'text-anchor':'end'}, n);
  }
  function dateLabel(i, style) {
    return new Date(dates[i] + 'T12:00:00Z').toLocaleDateString('ru-RU', {day:'numeric',month:style,timeZone:'Europe/Moscow'});
  }
  const last = dates.length - 1;
  for (const i of new Set([0, Math.round(last/4), Math.round(last/2), Math.round(3*last/4), last])) {
    add('text',{x:x(i),y:236,'text-anchor':'middle'}, dateLabel(i,'numeric'));
  }
  if (!days.length) {
    add('text',{x:(left+right)/2,y:112,'text-anchor':'middle'}, 'Пока нет данных по дням');
    detail.textContent = 'Для начала дневного учёта выполните обновлённый portfolio.sql в Supabase.';
    return;
  }
  const guide = add('line',{y1:16,y2:bottom,stroke:'#827665','stroke-dasharray':'3 5'});
  const markers = [];
  const defs = add('defs',{});
  for (const [series,color,id] of [[days.map(d=>d.visitors),'#319bd8','visits'],[clicks,'#209660','clicks']]) {
    const pattern = add('pattern',{id,width:7,height:7,patternUnits:'userSpaceOnUse',patternTransform:'rotate(35)'});
    defs.append(pattern);
    pattern.append(add('rect',{width:7,height:7,fill:color,opacity:.08}),
      add('rect',{width:2,height:7,fill:color,opacity:.30}));
    let curve = 'M '+x(0)+' '+y(series[0]);
    for (let i=1; i<series.length; i++) {
      const mid = (x(i-1)+x(i))/2;
      curve += ' C '+mid+' '+y(series[i-1])+', '+mid+' '+y(series[i])+', '+x(i)+' '+y(series[i]);
    }
    add('path',{d:curve+' L '+x(last)+' '+bottom+' L '+x(0)+' '+bottom+' Z',fill:'url(#'+id+')'});
    add('path',{d:curve,fill:'none',stroke:color,'stroke-width':2.5});
    series.forEach((v,i) => add('circle',{cx:x(i),cy:y(v),r:id==='visits'?4:2.8,fill:color}));
    markers.push([add('circle',{r:id==='visits'?6:3.5,fill:color,stroke:'#fff'}),series]);
  }
  let selected;
  function select(i) {
    selected = Math.max(0, Math.min(i, days.length-1));
    const day = days[selected];
    guide.setAttribute('x1',x(selected));
    guide.setAttribute('x2',x(selected));
    for (const [marker,series] of markers) {
      marker.setAttribute('cx',x(selected));
      marker.setAttribute('cy',y(series[selected]));
    }
    const title = document.createElement('strong');
    title.textContent = dateLabel(selected,'long');
    const summary = document.createElement('div');
    summary.textContent = 'Посетители · '+day.visitors+'　 Нажатия · '+clicks[selected];
    detail.replaceChildren(title,summary);
    const list = document.createElement('ul');
    for (const b of day.buttons) {
      const li = document.createElement('li');
      li.textContent = b.label+' · '+b.clicks;
      list.append(li);
    }
    if (list.children.length) detail.append(list);
  }
  svg.onpointerdown = svg.onpointermove = event => {
    const bounds = svg.getBoundingClientRect();
    const pos = (event.clientX-bounds.left) / bounds.width * 680;
    select(Math.round((pos-left)/(right-left)*(days.length-1)));
  };
  svg.onkeydown = event => {
    if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    select(selected + (event.key === 'ArrowLeft' ? -1 : 1));
  };
  select(days.length-1);
}
