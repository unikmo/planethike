-- Website Build Pro delta against the verified live schema on 2026-08-24.
-- This intentionally does not replay migrations 001/002 because the live table has drifted.

alter table public.planethike_preregistrations
  add column if not exists consent_at timestamptz;

drop policy if exists allow_public_preregistration_insert
  on public.planethike_preregistrations;

create policy allow_public_preregistration_insert
on public.planethike_preregistrations
for insert
to anon, authenticated
with check (
  char_length(first_name) between 1 and 80
  and char_length(email) between 3 and 254
  and char_length(location) between 1 and 120
  and interest = 'walker'
  and source = 'planethike.org'
  and consent_at is not null
);

create table if not exists public.planethike_city_lead_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(first_name) between 1 and 80),
  email text not null check (char_length(email) between 3 and 254),
  country_code text not null check (char_length(country_code) between 2 and 3),
  country text not null check (char_length(country) between 2 and 100),
  city text not null check (char_length(city) between 1 and 100),
  organizer_experience text not null check (char_length(organizer_experience) between 20 and 1200),
  crew_capacity text not null check (crew_capacity in ('solo', '1-2', '3-5', '6+')),
  local_reach text not null check (local_reach in ('starting', 'some', 'strong')),
  languages text check (languages is null or char_length(languages) <= 160),
  notes text check (notes is null or char_length(notes) <= 400),
  status text not null default 'new' check (status in ('new', 'review', 'approved', 'declined')),
  consent_at timestamptz not null,
  source text not null default 'planethike.org',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.planethike_city_lead_applications enable row level security;

revoke all on table public.planethike_city_lead_applications from anon, authenticated;
grant insert on table public.planethike_city_lead_applications to anon, authenticated;

drop policy if exists allow_public_city_lead_insert
  on public.planethike_city_lead_applications;

create policy allow_public_city_lead_insert
on public.planethike_city_lead_applications
for insert
to anon, authenticated
with check (
  char_length(first_name) between 1 and 80
  and char_length(email) between 3 and 254
  and char_length(country_code) between 2 and 3
  and char_length(country) between 2 and 100
  and char_length(city) between 1 and 100
  and char_length(organizer_experience) between 20 and 1200
  and crew_capacity in ('solo', '1-2', '3-5', '6+')
  and local_reach in ('starting', 'some', 'strong')
  and status = 'new'
  and consent_at is not null
  and source = 'planethike.org'
);

create unique index if not exists planethike_city_lead_email_city_uq
  on public.planethike_city_lead_applications (lower(email), lower(city));

create index if not exists planethike_city_lead_created_at_idx
  on public.planethike_city_lead_applications (created_at desc);

create index if not exists planethike_city_lead_status_idx
  on public.planethike_city_lead_applications (status);
