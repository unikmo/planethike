import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Workplace Step Challenge | Corporate Walking Challenge | PlanetHike',
  description: 'Give your team a 10,000-step workplace challenge they will actually remember. Join The Chaos Walk in May 2027.',
  alternates: { canonical: '/companies' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="FOR COMPANIES / TEAMS"
    title="A workplace step challenge people talk about afterwards"
    intro="Trade another anonymous leaderboard for a day your team can see, photograph and laugh about: around 10,000 steps, two different shoes, off colours and shared Chaos Drops."
    bullets={['Around 10,000 steps','Team-friendly','Free pre-registration','No race pace required']}
    sections={[
      {heading:'Make the team visible',body:'Everyone keeps their own style. The shared code is two different shoes and the Chaos Fan — enough to connect the group without putting employees in a matching event uniform.'},
      {heading:'Easy to explain',body:'Pre-register the team, choose the city, aim for around 10,000 steps and dress deliberately off. The event is social, not competitive.'},
      {heading:'One company, several cities',body:'Teams in different locations can join the same May 2027 edition. Each office can walk with its local city or create its own group.'},
      {heading:'Give the day another purpose',body:'PlanetHike plans to connect official Chaos Fan sales to a human-impact mission, with the cause partner and exact contribution published before sales open.'}
    ]}
    ctaLabel="Pre-register my team"
    ctaHref="/#join"
    secondaryLabel="How The Chaos Walk works"
    secondaryHref="/the-chaos-walk"
  />;
}
