import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Walk for a Cause Without Fundraising Pressure | PlanetHike',
  description: 'Join The Chaos Walk free in May 2027. No fundraising target: PlanetHike plans to give from official Chaos Fan sales instead.',
  alternates: { canonical: '/walk-for-a-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="WALK FOR A CAUSE / WITHOUT THE GUILT TRIP"
    title="Walk for a cause. Keep the fun."
    intro="You should not need a sponsorship target to earn your place on the route. The Chaos Walk stays free while PlanetHike plans to generate its cause contribution through official Chaos Fan sales."
    bullets={['Free participation','No pledge target','10,000-step social walk','Fan sales support the cause']}
    sections={[
      {heading:'No fundraising homework',body:'Pre-register, show up in two different shoes and walk. We are not asking every participant to chase friends for pledges before they can enjoy the event.'},
      {heading:'A product people actually want',body:'The Chaos Fan is designed to be part of the experience first: useful on the walk, obvious in photographs and collectible afterwards.'},
      {heading:'Then make the sale matter',body:'PlanetHike plans to give a meaningful amount from every official Fan sold to its human-impact mission. The partner and exact contribution will be published before sales begin.'},
      {heading:'Make impact shareable too',body:'After the event, PlanetHike intends to report the Fan contribution and the partner receiving it so participants can see what the day helped create.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="See the PlanetHike cause"
    secondaryHref="/the-cause"
  />;
}
