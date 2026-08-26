create table if not exists public.planethike_contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  topic text not null,
  message text not null,
  privacy_accepted_at timestamptz not null,
  source text not null default 'planethike.org',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint planethike_contact_name_len check (char_length(name) between 1 and 120),
  constraint planethike_contact_email_len check (char_length(email) between 3 and 254),
  constraint planethike_contact_topic check (topic in ('general','registration','city_lead','shop','partnership','press','privacy','other')),
  constraint planethike_contact_message_len check (char_length(message) between 10 and 4000),
  constraint planethike_contact_status check (status in ('new','reviewing','replied','closed'))
);

alter table public.planethike_contact_messages enable row level security;

revoke all on table public.planethike_contact_messages from anon, authenticated;
grant insert on table public.planethike_contact_messages to anon, authenticated;

drop policy if exists allow_public_planethike_contact_insert on public.planethike_contact_messages;
create policy allow_public_planethike_contact_insert
on public.planethike_contact_messages
for insert
to anon, authenticated
with check (
  source = 'planethike.org'
  and privacy_accepted_at is not null
  and status = 'new'
  and char_length(name) between 1 and 120
  and char_length(email) between 3 and 254
  and char_length(message) between 10 and 4000
);

create index if not exists idx_planethike_contact_messages_created_at
  on public.planethike_contact_messages(created_at desc);

create index if not exists idx_planethike_contact_messages_status
  on public.planethike_contact_messages(status, created_at desc);
