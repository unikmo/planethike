import type { Metadata } from 'next';
import SeoLanding from '../../SeoLanding';

export const metadata: Metadata = {
  title: 'Chaos Fan Edition 001 Preview | PlanetHike',
  description: 'Preview the planned Edition 001 Chaos Fan for The Chaos Walk. Sales are not open yet; join PlanetHike first-access and request a fan launch alert.',
  alternates: { canonical: '/shop/chaos-fan' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="EDITION 001 / PRODUCT PREVIEW / NOT YET FOR SALE"
    title="The Chaos Fan"
    intro="A useful, photogenic folding fan designed to become the shared visual object of The Chaos Walk. The current planned launch price is €19.99, but checkout is not open and final commerce terms are not yet confirmed."
    bullets={['Planned Edition 001 hero product','Planned price €19.99 — not an active offer','No purchase required to join','DIY alternative planned where official shipping is unavailable']}
    sections={[
      {heading:'Why a hand fan?',body:'It is useful during a warm-weather walk, visible in photos, easy to wave during Chaos Drops and collectible after the event.'},
      {heading:'Built for the ritual',body:'The fan is designed for the global fan shot, challenge moments, portraits and the finish ritual. It should earn its place in the experience rather than become disposable merch.'},
      {heading:'Impact promise comes after proof',body:'PlanetHike intends to connect official fan sales to a transparent reconstructive-surgery contribution. Partner, contribution amount, settlement and reporting details will be published before sales open.'},
      {heading:'Global participation, selective commerce',body:'Official sales will open only where checkout, fulfilment, shipping and returns have been tested. Participation remains broader than commerce.'}
    ]}
    ctaLabel="Join + request fan alert"
    ctaHref="/#join"
    secondaryLabel="Back to product preview"
    secondaryHref="/shop"
  />;
}
