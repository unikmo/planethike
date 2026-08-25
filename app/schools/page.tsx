import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'School Walking Challenge | Join The Chaos Walk | PlanetHike',
  description: 'Schools can join The Chaos Walk for a memorable 10,000-step day built around movement, creativity and two different shoes.',
  alternates: { canonical: '/schools' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="SCHOOLS / MAY 2027"
    title="A school walking challenge students will remember"
    intro="Turn a walking day into something students can see themselves in: around 10,000 steps, deliberately different shoes, off colours and a shared global moment."
    bullets={['Free participation','Around 10,000 steps','Group-friendly','School-led supervision']}
    sections={[
      {heading:'Make movement memorable',body:'The Chaos Walk gives students a simple visual ritual and a shared distance without turning the day into a race.'},
      {heading:'Different together',body:'Two different shoes and deliberately clashing colours create the fun. Nobody needs to buy or wear a matching PlanetHike uniform.'},
      {heading:'Schools lead the local setup',body:'Schools organise supervision, safeguarding, consent, accessibility and any local requirements for their participating students.'},
      {heading:'Join a city or walk as a school crew',body:'A school can take part with a confirmed local Chaos Walk where appropriate or organise its own supervised group around the same May 2027 format.'}
    ]}
    ctaLabel="Pre-register a school group"
    ctaHref="/#join"
    secondaryLabel="How The Chaos Walk works"
    secondaryHref="/the-chaos-walk"
  />;
}
