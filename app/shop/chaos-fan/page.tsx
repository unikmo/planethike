import type { Metadata } from 'next';
import SeoLanding from '../../SeoLanding';

export const metadata: Metadata = {
  title: 'Chaos Fan Edition 001 | PlanetHike',
  description: 'Meet Chaos Fan Edition 001, the colourful folding hand fan made for The Chaos Walk on Sunday, 17 October 2027.',
  alternates: { canonical: '/shop/chaos-fan' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="EDITION 001 / THE CHAOS WALK / SUNDAY, 17 OCTOBER 2027"
    title="The Chaos Fan"
    intro="A colourful folding hand fan made to be carried, photographed, waved with a whole city and kept long after the 10,000 steps are done."
    bullets={['Target price €19.99 — not final','A real folding hand fan — no tech','Year 1’s only PlanetHike collectible','The walk stays free']}
    sections={[
      {heading:'The shared icon',body:'Two different shoes are the visual code. The Chaos Fan is the one optional collectible for Edition 001: one recognisable object thousands of different-looking people can lift at the same moment.'},
      {heading:'Made for the photograph',body:'Open it during the walk, use it in Chaos Drops, lift it for the city-wide fan shot and keep Edition 001 afterwards.'},
      {heading:'Useful, not disposable',body:'It is a real hand fan first. The goal is an object that earns its place on a warm walk and still feels worth keeping after the event.'},
      {heading:'Part of the ritual — and the local impact',body:'The Chaos Fan is event merchandise, not an entry requirement. For each confirmed walk city, PlanetHike commits 20% of qualifying Fan sales revenue to the named local cleft organisation. Qualifying revenue is the Fan item price excluding VAT and delivery charges, less refunds.'}
    ]}
    faq={[
      {q:'Do I need the Chaos Fan to join?',a:'No. The Chaos Walk is free and buying merchandise is not an entry requirement. The Fan is the shared event object we strongly encourage participants to bring.'},
      {q:'When can I buy Edition 001?',a:'Orders are not yet open. We will confirm the Fan sample, manufacturer, final pricing and fulfillment terms before announcing ordering. Register and tick the separate optional Fan alert to hear first.'},
      {q:'How much will it cost?',a:'The target price is €19.99 in Europe, not a final offer. Local prices and delivery terms will be confirmed before checkout opens.'}
    ]}
    ctaLabel="Get the Edition 001 alert"
    ctaHref="/#join"
    secondaryLabel="View Edition 001"
    secondaryHref="/shop"
  />;
}

