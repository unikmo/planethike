import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Walk for a Cause Without Fundraising Pressure | PlanetHike',
  description: 'Join The Chaos Walk free on Sunday, 17 October 2027. No fundraising target: 20% of qualifying Chaos Fan sales revenue supports a local cleft organisation in each confirmed walk city.',
  alternates: { canonical: '/walk-for-a-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="WALK FOR A CAUSE / WITHOUT THE GUILT TRIP"
    title="Walk for a cause. Keep the fun."
    intro="You should not need a sponsorship target to earn your place on the route. The Chaos Walk stays free while PlanetHike commits 20% of qualifying Chaos Fan sales revenue to local cleft organisations."
    bullets={['Free participation','No pledge target','10,000-step social walk','20% of qualifying Fan revenue supports a local cleft organisation']}
    sections={[
      {heading:'No fundraising homework',body:'Pre-register, show up in two different shoes and walk. We are not asking every participant to chase friends for pledges before they can enjoy the event.'},
      {heading:'A product people actually want',body:'The Chaos Fan is designed to be part of the experience first: useful on the walk, obvious in photographs and collectible afterwards.'},
      {heading:'Then make the sale matter',body:'For each confirmed walk city, PlanetHike commits 20% of qualifying Chaos Fan sales revenue to a named local cleft organisation. The local walk organisation selects the beneficiary, which may also choose to host or co-host the walk.'},
      {heading:'Make impact shareable too',body:'After the relevant sales period closes, PlanetHike reports the final donation and the receiving organisation so participants can see what the day helped create.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="See the PlanetHike cause"
    secondaryHref="/the-cause"
  />;
}

