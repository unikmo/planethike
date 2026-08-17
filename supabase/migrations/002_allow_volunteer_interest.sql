alter table public.planethike_preregistrations
  drop constraint if exists planethike_preregistrations_interest_check;

alter table public.planethike_preregistrations
  add constraint planethike_preregistrations_interest_check
  check (interest in ('walker', 'host', 'volunteer', 'team'));
