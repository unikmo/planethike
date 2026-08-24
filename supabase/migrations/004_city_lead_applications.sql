create table if not exists public.planethike_city_lead_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(first_name) between 1 and 80),
  last_name text not null check (char_length(last_name) between 1 and 80),
  email text not null check (char_length(email) <= 254),
  country_code text not null check (char_length(country_code) = 2),
  country text not null,
  city text not null check (char_length(city) between 1 and 120),
  current_role text not null check (char_length(current_role) between 1 and 160),
  local_network text not null check (local_network in ('small', 'some', 'strong')),
  crew_status text not null check (crew_status in ('need_recruit', 'one_or_two', 'crew_ready')),
  organizing_experience text not null check (char_length(organizing_experience) between 1 and 1800),
  motivation text not null check (char_length(motivation) between 1 and 1800),
  route_permit_ack boolean not null default false,
  safety_accessibility_ack boolean not null default false,
  privacy_accepted_at timestamptz not null,
  marketing_consent boolean not null default false,
  marketing_consent_at timestamptz,
  source text not null default 'planethike.org',
  status text not null default 'new' check (status in ('new', 'reviewing', 'qualified', 'approved', 'declined', 'withdrawn')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists planethike_city_lead_email_city_uq
  on public.planethike_city_lead_applications (lower(email), lower(city));

alter table public.planethike_city_lead_applications enable row level security;

revoke all on public.planethike_city_lead_applications from anon, authenticated;
grant insert on public.planethike_city_lead_applications to anon, authenticated;

drop policy if exists allow_public_city_lead_application_insert on public.planethike_city_lead_applications;
create policy allow_public_city_lead_application_insert
on public.planethike_city_lead_applications
for insert
to anon, authenticated
with check (
  source = 'planethike.org'
  and privacy_accepted_at is not null
  and route_permit_ack is true
  and safety_accessibility_ack is true
  and status = 'new'
);

create index if not exists planethike_city_lead_status_created_idx
  on public.planethike_city_lead_applications (status, created_at desc);
