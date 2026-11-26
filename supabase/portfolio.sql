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
begin
  if visitor is null then return; end if;
  if control is null then
    insert into portfolio_private.visitors values (visitor) on conflict do nothing;
  else
    update portfolio_private.controls set clicks = clicks + 1 where id = control;
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
    'controls', (select jsonb_agg(jsonb_build_object('label',label,'clicks',clicks)
      order by clicks desc, label) from portfolio_private.controls)
  );
end;
$$;
revoke all on function public.portfolio_report() from public, anon, authenticated;
grant execute on function public.portfolio_report() to authenticated;
commit;
