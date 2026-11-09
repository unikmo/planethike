alter table public.planethike_preregistrations
  add column if not exists country_code text check (char_length(country_code) = 2),
  add column if not exists country text,
  add column if not exists city text check (char_length(city) between 1 and 80),
  add column if not exists commerce_eligible boolean not null default false;

alter table public.planethike_preregistrations
  alter column country_code set not null,
  alter column country set not null,
  alter column city set not null;

drop policy if exists allow_public_preregistration_insert on public.planethike_preregistrations;

create policy allow_public_preregistration_insert
on public.planethike_preregistrations
for insert
to anon, authenticated
with check (
  char_length(first_name) between 1 and 80
  and char_length(email) <= 254
  and char_length(location) between 1 and 120
  and char_length(country_code) = 2
  and char_length(country) between 1 and 100
  and char_length(city) between 1 and 80
  and interest in ('walker', 'host', 'volunteer', 'team')
  and source = 'planethike.org'
  and privacy_accepted_at is not null
);
