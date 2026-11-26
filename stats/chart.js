function renderDailyChart(days) {
  const svg = document.querySelector('#chart');
  const detail = document.querySelector('#day-detail');
  document.querySelector('#period').textContent = days.length ? 'До 30 последних дней · московское время' : 'Дневной учёт начнётся после обновления базы.';
  svg.replaceChildren();
  detail.replaceChildren();
  svg.style.display = days.length ? '' : 'none';
  if (!days.length) return;
  const clicks = days.map(day => day.buttons.reduce((sum, b) => sum + b.clicks, 0));
  const peak = Math.max(1, ...clicks, ...days.map(day => day.visitors));
  const step = Math.pow(10, Math.floor(Math.log10(peak)));
  const max = Math.ceil(peak / step) * step;
  const left = 48, right = 650, bottom = 208;
  const x = i => days.length === 1 ? (left + right) / 2 : left + i * (right-left) / (days.length-1);
  const y = n => bottom - n / max * 185;
  function add(tag, attrs, label) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);
    if (label !== undefined) el.textContent = label;
    svg.append(el);
    return el;
  }
  for (const n of new Set([0, Math.round(max/2), max])) {
    add('line',{x1:left,x2:right,y1:y(n),y2:y(n),stroke:'#ded6c9'});
    add('text',{x:left-7,y:y(n)+4,'text-anchor':'end'}, n);
  }
  function dateLabel(i, style) {
    return new Date(days[i].day + 'T12:00:00Z').toLocaleDateString('ru-RU', {day:'numeric',month:style,timeZone:'Europe/Moscow'});
  }
  for (const i of new Set([0, Math.floor((days.length-1)/2), days.length-1])) {
    add('text',{x:x(i),y:236,'text-anchor':'middle'}, dateLabel(i,'numeric'));
  }
  const guide = add('line',{y1:16,y2:bottom,stroke:'#827665','stroke-dasharray':'3 5'});
  const markers = [];
  for (const [series,color] of [[clicks,'#a94c2d'],[days.map(d=>d.visitors),'#167467']]) {
    const points = series.map((v,i)=>x(i)+','+y(v)).join(' ');
    add('polygon',{points:x(0)+','+bottom+' '+points+' '+x(series.length-1)+','+bottom,fill:color,opacity:.12});
    add('polyline',{points,fill:'none',stroke:color,'stroke-width':3,'stroke-linejoin':'round'});
    markers.push([add('circle',{r:4,fill:color,stroke:'#fff'}),series]);
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
