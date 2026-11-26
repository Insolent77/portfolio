begin;
create schema if not exists portfolio_private;
revoke all on schema portfolio_private from public, anon, authenticated;
create table if not exists portfolio_private.visitors (id uuid primary key);
create table if not exists portfolio_private.controls (
  id text primary key, label text not null, clicks bigint not null default 0
);
create table if not exists portfolio_private.owners (
  id uuid primary key references auth.users(id) on delete cascade
);
alter table portfolio_private.visitors enable row level security;
alter table portfolio_private.controls enable row level security;
alter table portfolio_private.owners enable row level security;
create table if not exists portfolio_private.daily_visitors (
  day date not null, visitor_id uuid not null, primary key (day, visitor_id)
);
alter table portfolio_private.daily_visitors add column if not exists last_activity_at timestamptz;
alter table portfolio_private.daily_visitors add column if not exists contacted boolean not null default false;
create table if not exists portfolio_private.daily_clicks (
  day date not null, control_id text references portfolio_private.controls(id),
  clicks bigint not null, primary key (day, control_id)
);
create table if not exists portfolio_private.tracking_start (
  id boolean primary key check (id), day date not null
);
insert into portfolio_private.tracking_start values (true, timezone('Europe/Moscow', now())::date)
on conflict do nothing;
alter table portfolio_private.daily_visitors enable row level security;
alter table portfolio_private.daily_clicks enable row level security;
alter table portfolio_private.tracking_start enable row level security;
alter table portfolio_private.tracking_start add column if not exists contact_since date
  not null default timezone('Europe/Moscow', now())::date;

insert into portfolio_private.controls (id,label) values
  ('skip', 'К содержимому'),
  ('appearance', 'Оформление'),
  ('theme-mist', 'Кремовый фон с голубым свечением'),
  ('theme-coffee', 'Тёмный кофейный фон'),
  ('theme-home', 'Домашний интерьер'),
  ('theme-glow', 'Абстрактный свет'),
  ('theme-cobalt', 'Кобальтовый фон'),
  ('theme-porcelain', 'Светлое оформление с синими акцентами'),
  ('theme-dark', 'Тёмное стекло'),
  ('theme-milk', 'Молочное стекло'),
  ('theme-cocoa', 'Коричневое стекло'),
  ('theme-sand', 'Песочное стекло'),
  ('sound', 'Звук'),
  ('nav-projects', 'Меню · Проекты'),
  ('nav-approach', 'Меню · Подход'),
  ('nav-contacts', 'Меню · Контакты'),
  ('language', 'Язык'),
  ('brand', 'Логотип'),
  ('hero-contact', 'Первый экран · Обсудить проект'),
  ('hero-work', 'Первый экран · Посмотреть работы'),
  ('scroll', 'Листайте страницу'),
  ('alex', 'Проект · Alex Educator'),
  ('textmate', 'Проект · TextMate'),
  ('git-time', 'Проект · Git Time Machine'),
  ('future-cover', 'Будущий сайт · Обложка'),
  ('future-contact', 'Будущий сайт · Обсудить проект'),
  ('contact-tg', 'Контакты · Telegram'),
  ('contact-gh', 'Контакты · GitHub'),
  ('contact-avito', 'Контакты · Avito'),
  ('footer-top', 'Подвал · Наверх'),
  ('lomonosov', 'Проект · Мой Ломоносов'),
  ('auto', 'Проект · Автосервис'),
  ('enot', 'Проект · Енот делает ремонт'),
  ('slide-0', 'Alex Educator · Слайд 1'),
  ('slide-1', 'Alex Educator · Слайд 2'),
  ('slide-2', 'Alex Educator · Слайд 3'),
  ('prev', 'Предыдущий скриншот'),
  ('dot-0', 'Alex Educator · Индикатор 1'),
  ('dot-1', 'Alex Educator · Индикатор 2'),
  ('dot-2', 'Alex Educator · Индикатор 3'),
  ('next', 'Следующий скриншот'),
  ('thumb-0', 'Alex Educator · Миниатюра 1'),
  ('thumb-1', 'Alex Educator · Миниатюра 2'),
  ('thumb-2', 'Alex Educator · Миниатюра 3')
on conflict (id) do update set label = excluded.label;

create or replace function public.portfolio_record(visitor uuid, control text)
returns void language plpgsql security definer set search_path = '' as $$
declare
  today date := timezone('Europe/Moscow', now())::date;
begin
  if visitor is null then return; end if;
  insert into portfolio_private.daily_visitors as v (day, visitor_id, last_activity_at, contacted)
  values (today, visitor, now(), coalesce(control in
    ('hero-contact','future-contact','future-cover','contact-tg','contact-avito'), false))
  on conflict (day, visitor_id) do update
    set last_activity_at = greatest(v.last_activity_at, excluded.last_activity_at),
        contacted = v.contacted or excluded.contacted;
  if control is null then
    insert into portfolio_private.visitors values (visitor) on conflict do nothing;
  else
    update portfolio_private.controls set clicks = clicks + 1 where id = control;
    if found then
      insert into portfolio_private.daily_clicks as d values (today, control, 1)
      on conflict (day, control_id) do update set clicks = d.clicks + 1;
    end if;
  end if;
end;
$$;
revoke all on function public.portfolio_record(uuid,text) from public, anon, authenticated;
grant execute on function public.portfolio_record(uuid,text) to anon, authenticated;

create or replace function public.portfolio_report()
returns jsonb language plpgsql stable security definer set search_path = '' as $$
begin
  if not exists (select 1 from portfolio_private.owners where id = auth.uid()) then
    raise insufficient_privilege;
  end if;
  return jsonb_build_object(
    'visitors', (select count(*) from portfolio_private.visitors),
    'daily', (
      with bounds as (
        select timezone('Europe/Moscow', now())::date as today, day as started
        from portfolio_private.tracking_start
      ), days as (
        select today - offset_days as day from bounds
        cross join generate_series(0, today - started) as offset_days
      )
      select jsonb_agg(jsonb_build_object(
        'day', days.day,
        'last_activity_at', (select max(v.last_activity_at) from portfolio_private.daily_visitors v where v.day = days.day),
        'visitors', (select count(*) from portfolio_private.daily_visitors v where v.day = days.day),
        'buttons', coalesce((select jsonb_agg(jsonb_build_object('label', c.label, 'clicks', d.clicks)
          order by d.clicks desc, c.label) from portfolio_private.daily_clicks d
          join portfolio_private.controls c on c.id = d.control_id where d.day = days.day), '[]'::jsonb)
      ) order by days.day) from days
    ),
    'controls', (select jsonb_agg(jsonb_build_object('label',label,'clicks',clicks)
      order by clicks desc, label) from portfolio_private.controls)
  );
end;
$$;
revoke all on function public.portfolio_report() from public, anon, authenticated;
grant execute on function public.portfolio_report() to authenticated;

create or replace function public.portfolio_period(date_from date, date_to date)
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare
  today date := timezone('Europe/Moscow', now())::date;
  period_length integer := date_to - date_from + 1;
begin
  if not exists (select 1 from portfolio_private.owners where id = auth.uid()) then
    raise insufficient_privilege;
  end if;
  if date_from is null or date_to is null or date_from > date_to then
    raise exception 'Invalid date range';
  end if;
  return (
    with periods(name, first_day, last_day) as (
      values ('current', date_from, least(date_to,today)),
             ('previous', date_from - period_length, least(date_to,today) - period_length)
    )
    select jsonb_object_agg(p.name, jsonb_build_object(
      'start', p.first_day, 'end', p.last_day,
      'visit_start', greatest(p.first_day,t.day), 'contact_start', greatest(p.first_day,t.contact_since),
      'visitors', counts.visitors, 'eligible', counts.eligible, 'contacts', counts.contacts
    ))
    from periods p cross join portfolio_private.tracking_start t
    cross join lateral (
      select count(distinct visitor_id) as visitors,
        count(distinct visitor_id) filter (where day >= t.contact_since) as eligible,
        count(distinct visitor_id) filter (where contacted) as contacts
      from portfolio_private.daily_visitors where day between p.first_day and p.last_day
    ) counts
  );
end;
$$;
revoke all on function public.portfolio_period(date,date) from public, anon, authenticated;
grant execute on function public.portfolio_period(date,date) to authenticated;
commit;
