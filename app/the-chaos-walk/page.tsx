import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk | 10,000-Step Social Walking Experience | PlanetHike',
  description: 'The Chaos Walk is PlanetHike’s free 10,000-step social walking experience planned for May 2027. Join first-access while exact dates and confirmed city details are finalized.',
  alternates: { canonical: '/the-chaos-walk' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE SIGNATURE EXPERIENCE / MAY 2027 / EXACT DATE TBA"
    title="The Chaos Walk"
    intro="A free 10,000-step social walking experience designed to turn an ordinary walk into a city-wide piece of controlled chaos. The first-access list is open; local event confirmation follows city readiness."
    bullets={['Free first-access list','10,000-step format','Two different shoes','One planned annual Chaos Fan']}
    sections={[
      {heading:'Not just a walk',body:'The route is designed around Chaos Drops: shared challenge moments that give confirmed cities the same global rhythm while leaving room for local personality.'},
      {heading:'The signature look',body:'Wear two different shoes, deliberately clash colours and bring a Chaos Fan. The point is not a uniform; it is a simple visual ritual that makes the experience recognisable.'},
      {heading:'City status matters',body:'A city is not confirmed because it appears in a form or interest list. PlanetHike confirms local event information only after an approved City Lead, local operating readiness and publishable details are in place.'},
      {heading:'Human impact follows verification',body:'PlanetHike intends to link official fan sales to a transparent reconstructive-surgery contribution. Partner, contribution amount, settlement and reporting details will be published before commerce opens.'}
    ]}
    faq={[
      {q:'Is The Chaos Walk free?',a:'The planned participation model is free. Merchandise is separate and optional.'},
      {q:'Is my city already confirmed?',a:'Not necessarily. Joining first-access records demand. PlanetHike publishes confirmed city information only after local operating readiness is verified.'},
      {q:'What is the exact May 2027 date?',a:'The exact date has not been announced yet. First-access members will receive the confirmed date when it is locked.'},
      {q:'Do I have to buy a Chaos Fan?',a:'No. Participation is not intended to require a purchase. A DIY fan route is planned where official commerce is unavailable.'}
    ]}
  />;
}
