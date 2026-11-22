-- Tracks one-time launch-alert acceptance by Resend. The row remains protected by existing RLS:
-- anonymous users have INSERT only; only the service-role processor may update.
alter table public.planethike_preregistrations
  add column if not exists fan_launch_notified_at timestamptz null;
comment on column public.planethike_preregistrations.fan_launch_notified_at is
  'Timestamp when Resend accepted the one-time Chaos Fan Edition 001 ordering-open notification; null while pending.';
