import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk | 10,000 Steps. Two Different Shoes. | PlanetHike',
  description: 'The Chaos Walk is PlanetHike’s free 10,000-step social walking experience on Sunday, 17 October 2027: two different shoes, off colours, one Chaos Fan and your city.',
  alternates: { canonical: '/the-chaos-walk' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE CHAOS WALK / SUNDAY, 17 OCTOBER 2027"
    title="10,000 steps. Zero normal."
    intro="A perfectly ordinary walk, except everybody has agreed their shoes should stop getting along. Wear two unmistakably different, comfortable shoes. Bring your own style, your friends and whatever level of chaos suits you. Around 10,000 steps, no race clock and no purchase required."
    bullets={['Free pre-registration','Around 10,000 steps','Two different shoes','Your own look; Fan optional']}
    sections={[
      {heading:'Look wrong on purpose',body:'Your shoes have worked as a matching pair for years. Give them a day apart. Choose visibly different colours or styles, but wear shoes that fit properly and are safe for the route. Everything else is your call.'},
      {heading:'Walk the city',body:'The target is around 10,000 steps, not a race time. You move through the city with friends, strangers and a series of Chaos Drops designed to create moments along the way.'},
      {heading:'Lift the Fan',body:'If you have a Chaos Fan, bring it for the shared photo moment. The Fan is optional: you can join for free without buying or carrying merchandise.'},
      {heading:'Make it yours',body:'Every city brings its own route, people and personality. The global code stays simple enough to recognise anywhere: 10,000 steps, two different shoes, off colours and one very visible day.'}
    ]}
    faq={[
      {q:'Is it a race?',a:'No. The point is the experience, not a finish time.'},
      {q:'Do I need to be fit?',a:'You should be comfortable with the distance or build up to it beforehand. The route is a social walk, not a competitive race.'},
      {q:'Do I have to buy merchandise?',a:'No. The walk is free. The Chaos Fan is optional and can feature in shared photo moments. No merchandise is required to join.'},
      {q:'When is it?',a:'Sunday, 17 October 2027. Local city details will be emailed to pre-registered participants and published on the site when confirmed.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="Test your shoe chaos"
    secondaryHref="/#shoe-challenge"
  />;
}
