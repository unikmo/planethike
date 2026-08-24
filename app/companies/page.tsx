import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Workplace Step Challenge | Corporate Walking Challenge | PlanetHike',
  description: 'Give your team a workplace step challenge people actually want to talk about. Join The Chaos Walk first-access for May 2027.',
  alternates: { canonical: '/companies' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="FOR COMPANIES / TEAMS"
    title="A workplace step challenge people remember"
    intro="Turn the usual corporate wellness challenge into a shared cultural moment: 10,000 steps, team participation, Chaos Drops and a planned global event in May 2027."
    bullets={['Team-friendly format','Free first-access registration','City or group participation','Optional merchandise — sales not open yet']}
    sections={[
      {heading:'Beyond another leaderboard',body:'PlanetHike is designed around participation and memorable moments, not just step totals. Teams can walk together, dress off-colour and take on the same Chaos Drop rhythm as other confirmed locations.'},
      {heading:'Easy to explain internally',body:'The format is simple: join first-access free, aim for around 10,000 steps, wear two different shoes, bring a Chaos Fan if available and take part in the challenge moments.'},
      {heading:'Works across offices',body:'Companies with teams in different cities can register interest in the same edition while allowing local offices to organize their own crew. Local event status is confirmed separately.'},
      {heading:'Human impact only after verification',body:'PlanetHike intends to connect future official fan sales to a transparent reconstructive-surgery contribution. No active contribution claim will be made before the partner and money flow are locked.'}
    ]}
    ctaLabel="Join first-access as a team"
    ctaHref="/#join"
  />;
}
