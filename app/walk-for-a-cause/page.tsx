import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Walk for a Cause Without a Fundraising Paywall | PlanetHike',
  description: 'The Chaos Walk is planned as free participation. PlanetHike is verifying a future sales-linked reconstructive-surgery contribution before any impact promise becomes active.',
  alternates: { canonical: '/walk-for-a-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="FUN FIRST / HUMAN IMPACT AFTER VERIFICATION"
    title="Walk for a Cause"
    intro="PlanetHike is building a genuinely fun walking experience first. Participation is planned to stay free, while any future sales-linked human-impact promise must be documented before it becomes active."
    bullets={['Free participation model','No pledge requirement','Impact mechanism still being verified','Partner and transfer rules published before sales']}
    sections={[
      {heading:'Not a traditional fundraiser',body:'Participants should not need to collect pledges or hit a fundraising target to join. The event experience must stand on its own.'},
      {heading:'A human-impact direction',body:'PlanetHike is exploring reconstructive mouth and nose surgery as the human mission connected to future official merchandise.'},
      {heading:'No number before the proof',body:'A fixed contribution amount will only be stated as an active promise after the partner, agreement, settlement process and reporting standard are locked.'},
      {heading:'Fun is not a compromise',body:'The stronger the event experience, the less PlanetHike needs guilt-based fundraising language. Impact should benefit from participation people already want to share.'}
    ]}
    secondaryLabel="See the cause status"
    secondaryHref="/the-cause"
  />;
}
