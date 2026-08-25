import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The PlanetHike Cause | Fun That Gives Back',
  description: 'PlanetHike plans to connect official Chaos Fan sales to reconstructive care and will publish the partner and exact contribution before Edition 001 goes on sale.',
  alternates: { canonical: '/the-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE CAUSE / FUN THAT GIVES BACK"
    title="A ridiculous walk. A serious impact."
    intro="The Chaos Walk should be worth joining because it is unforgettable. The Chaos Fan should also do more than look good in a photograph. PlanetHike plans to connect official Fan sales to reconstructive care."
    bullets={['The walk stays free','Cause partner announced before sales','Exact Fan contribution published before sales','Impact updates shared publicly']}
    sections={[
      {heading:'Why reconstructive care?',body:'Reconstructive mouth and nose care can affect breathing, eating, speech, appearance, confidence and everyday participation. That human impact is where PlanetHike intends to focus its giving.'},
      {heading:'The Fan helps fund it',body:'PlanetHike plans a meaningful contribution from every official Chaos Fan sold. The exact amount will be published alongside the cause partner before Edition 001 goes on sale.'},
      {heading:'Show the money flow',body:'When sales open, the site will explain who receives the contribution, how it is transferred and how PlanetHike reports what was given.'},
      {heading:'Fun first. Impact visible.',body:'Nobody should need guilt to join The Chaos Walk. The event should earn attention on its own — and then turn some of that attention into something useful.'}
    ]}
    ctaLabel="Pre-register for The Chaos Walk"
    ctaHref="/#join"
    secondaryLabel="Meet the Chaos Fan"
    secondaryHref="/shop/chaos-fan"
  />;
}
