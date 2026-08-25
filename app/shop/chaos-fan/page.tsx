import type { Metadata } from 'next';
import SeoLanding from '../../SeoLanding';

export const metadata: Metadata = {
  title: 'Chaos Fan Edition 001 | PlanetHike',
  description: 'Meet Chaos Fan Edition 001, the colourful folding hand fan made for The Chaos Walk in May 2027.',
  alternates: { canonical: '/shop/chaos-fan' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="EDITION 001 / THE CHAOS WALK / MAY 2027"
    title="The Chaos Fan"
    intro="A colourful folding hand fan made to be carried, photographed, waved with a whole city and kept long after the 10,000 steps are done."
    bullets={['€19.99 when sales open','A real folding hand fan — no tech','Made for the city-wide fan moment','The walk stays free']}
    sections={[
      {heading:'The object everyone carries',body:'Two different shoes are the visual code. The Chaos Fan is the shared object: one thing thousands of different-looking people can lift at the same moment.'},
      {heading:'Made for the photograph',body:'Open it during the walk, use it in Chaos Drops, lift it for the city-wide fan shot and keep Edition 001 afterwards.'},
      {heading:'Useful, not disposable',body:'It is a real hand fan first. The goal is an object that earns its place on a warm walk and still feels worth keeping after the event.'},
      {heading:'Fun that gives back',body:'PlanetHike plans a meaningful contribution from official Fan sales to its human-impact mission. We will publish the cause partner and exact contribution before Edition 001 goes on sale.'}
    ]}
    faq={[
      {q:'Do I need the Chaos Fan to join?',a:'No. The Chaos Walk is free and buying merchandise is not an entry requirement. The Fan is the shared event object we strongly encourage participants to bring.'},
      {q:'When can I buy Edition 001?',a:'Sales will open before the May 2027 walk. Pre-register and tick the Chaos Shop alert to hear first.'},
      {q:'How much will it cost?',a:'Edition 001 is planned at €19.99 in the European shop. Local pricing and shipping will be shown when ordering opens.'}
    ]}
    ctaLabel="Get the Edition 001 alert"
    ctaHref="/#join"
    secondaryLabel="Explore the Chaos Shop"
    secondaryHref="/shop"
  />;
}
