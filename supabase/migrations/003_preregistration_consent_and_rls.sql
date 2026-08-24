alter table public.planethike_preregistrations
  add column if not exists privacy_accepted_at timestamptz,
  add column if not exists marketing_consent boolean not null default false,
  add column if not exists marketing_consent_at timestamptz,
  add column if not exists merchandise_interest boolean not null default false;

alter table public.planethike_preregistrations enable row level security;

drop policy if exists allow_public_preregistration_insert on public.planethike_preregistrations;

create policy allow_public_preregistration_insert
on public.planethike_preregistrations
for insert
to anon, authenticated
with check (
  char_length(first_name) between 1 and 80
  and char_length(email) <= 254
  and char_length(location) between 1 and 120
  and interest in ('walker', 'host', 'volunteer', 'team')
  and source = 'planethike.org'
  and privacy_accepted_at is not null
);

revoke select, update, delete on public.planethike_preregistrations from anon, authenticated;
grant insert on public.planethike_preregistrations to anon, authenticated;
