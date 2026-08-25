import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk | 10,000 Steps. Two Different Shoes. | PlanetHike',
  description: 'The Chaos Walk is PlanetHike’s free 10,000-step social walking experience for May 2027: two different shoes, off colours, one Chaos Fan and your city.',
  alternates: { canonical: '/the-chaos-walk' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE CHAOS WALK / MAY 2027"
    title="10,000 steps. Zero normal."
    intro="For one day, your city becomes the stage: wear two unmistakably different shoes, clash your colours, grab the Chaos Fan and walk around 10,000 steps with people who came to stand out together."
    bullets={['Free pre-registration','Around 10,000 steps','Two different shoes','Off colours + the Chaos Fan']}
    sections={[
      {heading:'Look wrong on purpose',body:'The Chaos Walk starts before the first step. Your shoes should obviously mismatch. Your colours should clash. Your outfit should look like you decided normal could take the day off.'},
      {heading:'Walk the city',body:'The target is around 10,000 steps, not a race time. You move through the city with friends, strangers and a series of Chaos Drops designed to create moments along the way.'},
      {heading:'Lift the Fan',body:'The Chaos Fan is the shared object across all those different looks. Carry it through the walk, use it in challenge moments and lift it together for the city-wide fan shot.'},
      {heading:'Make it yours',body:'Every city brings its own route, people and personality. The global code stays simple enough to recognise anywhere: 10,000 steps, two different shoes, off colours and one very visible day.'}
    ]}
    faq={[
      {q:'Is it a race?',a:'No. The point is the experience, not a finish time.'},
      {q:'Do I need to be fit?',a:'You should be comfortable with the distance or build up to it beforehand. The route is a social walk, not a competitive race.'},
      {q:'Do I have to buy merchandise?',a:'No. The walk is free. The Chaos Fan is strongly encouraged because it is part of the shared event ritual, but merchandise is not an entry requirement.'},
      {q:'When is it?',a:'May 2027. The exact date will be announced to pre-registered participants and published on the site.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="Explore the Chaos Shop"
    secondaryHref="/shop"
  />;
}
