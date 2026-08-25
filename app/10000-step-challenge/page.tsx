import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: '10,000 Step Challenge | Free Social Walking Challenge | PlanetHike',
  description: 'Take on around 10,000 steps with PlanetHike and make the distance unforgettable through The Chaos Walk in May 2027.',
  alternates: { canonical: '/10000-step-challenge' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="10,000 STEPS / ZERO BORING"
    title="10,000 steps. Make them look different."
    intro="The distance is familiar. The day is not: two different shoes, off colours, a Chaos Fan, city-wide challenge moments and around 10,000 steps with people who came to stand out."
    bullets={['Around 10,000 steps','Free pre-registration','Walk with a city or group','No race pace required']}
    sections={[
      {heading:'Why 10,000 steps?',body:'It is simple, familiar and easy to understand anywhere. PlanetHike uses it as the backbone for a social event rather than a competitive race.'},
      {heading:'The distance is only the start',body:'Chaos Drops, group moments and the visual ritual turn a normal step target into something people can photograph, share and remember.'},
      {heading:'Two different shoes',body:'Make the mismatch obvious, but keep both shoes comfortable enough for the distance. Different colours, styles or silhouettes all work.'},
      {heading:'Bring your people',body:'Walk with friends, colleagues, a club, a school group or your city crew. The point is not who finishes first — it is what happens along the way.'}
    ]}
    faq={[
      {q:'How many miles is 10,000 steps?',a:'It varies by stride length. For many adults it is roughly 4 to 5 miles, but your own distance may differ.'},
      {q:'How long does 10,000 steps take?',a:'Many people take around 1.5 to 2 hours of active walking. The Chaos Walk may take longer because the challenge moments are part of the experience.'},
      {q:'Can beginners join?',a:'Yes, but build up gradually if 10,000 steps is more than you normally walk. This is a social walk, not a race.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="Read The Chaos Walk"
    secondaryHref="/the-chaos-walk"
  />;
}
