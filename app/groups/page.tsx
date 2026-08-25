import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Group Walking Challenge | Walk With Friends | PlanetHike',
  description: 'Bring friends, clubs or communities to The Chaos Walk: around 10,000 steps, two different shoes and one unforgettable day.',
  alternates: { canonical: '/groups' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="FRIENDS / CLUBS / COMMUNITIES"
    title="Bring your people. Dress wrong together."
    intro="The Chaos Walk gives friend groups, clubs and communities one simple mission: around 10,000 steps, two different shoes, off colours and enough shared chaos to talk about afterwards."
    bullets={['Bring your own crew','Around 10,000 steps','Free pre-registration','No race pace']}
    sections={[
      {heading:'Bring your own crew',body:'Friends, clubs, neighbourhood groups and informal communities can pre-register together and choose the city they want to join.'},
      {heading:'Look connected without matching',body:'Nobody needs a uniform. Two different shoes and the Chaos Fan create the shared PlanetHike code while every person keeps their own style.'},
      {heading:'Expect moments, not just mileage',body:'Chaos Drops break up the route with playful shared moments so the day creates stories and photographs instead of feeling like an ordinary long walk.'},
      {heading:'No city yet? Start one.',body:'If your city needs a local starter, one of you can apply to become a City Lead and build the crew around it.'}
    ]}
    ctaLabel="Pre-register my group"
    ctaHref="/#join"
    secondaryLabel="Lead my city"
    secondaryHref="/city-leads/apply"
  />;
}
