import SeoLanding from '../SeoLanding';

export default function SurgeryPage() {
  return <SeoLanding
    eyebrow="LEGACY ROUTE / HUMAN MISSION STATUS"
    title="Reconstructive-surgery mission"
    intro="PlanetHike is exploring a future reconstructive-surgery contribution linked to official Chaos Fan sales. This legacy route is retained only as a migration safety net; the canonical cause page is /the-cause."
    bullets={['No active €3 claim','No partner announced as active','Contribution rule published before sales','Canonical cause page: /the-cause']}
    sections={[
      {heading:'Verification first',body:'PlanetHike will not treat a partner, contribution amount or settlement model as active until the supporting agreement and operating process are verified.'},
      {heading:'Commerce is not open',body:'The Chaos Fan is currently a product preview. Checkout, fulfilment, returns and any impact-linked transfer are not active in this build.'},
      {heading:'What will be published',body:'Before impact-linked sales open, PlanetHike intends to publish the selected partner, exact contribution rule, settlement process and reporting standard.'},
      {heading:'Why keep this route?',body:'The route exists to preserve legacy URL continuity during migration. Traffic is permanently redirected to the canonical /the-cause page.'}
    ]}
    ctaLabel="See the canonical cause page"
    ctaHref="/the-cause"
    secondaryLabel="Preview the Chaos Fan"
    secondaryHref="/shop/chaos-fan"
  />;
}
