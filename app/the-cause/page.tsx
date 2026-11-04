import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The PlanetHike Cause | Fun That Gives Back',
  description: 'PlanetHike commits 20% of qualifying Chaos Fan sales revenue to local cleft organisations in confirmed walk cities.',
  alternates: { canonical: '/the-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE CAUSE / FUN THAT GIVES BACK"
    title="A ridiculous walk. A serious impact."
    intro="The Chaos Walk should be worth joining because it is unforgettable. The reusable Chaos Fan is part of that shared visual ritual — and 20% of qualifying Fan-sales revenue will support local cleft organisations in confirmed walk cities."
    bullets={['The walk stays free','20% of qualifying Fan revenue','Local beneficiary selected locally','Direct donation and public report']}
    sections={[
      {heading:'Why cleft organisations?',body:'Cleft lip and palate can affect feeding, hearing, speech and everyday participation. Families may also need practical information, peer connection and long-term specialist support. PlanetHike’s intended cause work is about supporting reputable organisations in that field; it does not provide medical advice or care.'},
      {heading:'A local decision in every walk city',body:'For each confirmed walk city, the local walk organisation will be responsible for selecting a suitable local cleft organisation. A cleft organisation may also choose to host or co-host its city walk, if it has the capacity and agrees the local arrangements with PlanetHike. No organisation is presented as a partner until it has agreed.'},
      {heading:'The 20% commitment',body:'PlanetHike commits 20% of qualifying Chaos Fan sales revenue for a confirmed city to its named local cleft organisation. Qualifying revenue means the Fan item price excluding VAT and delivery charges, less refunded Fan orders. The commitment is not reduced for product, payment-processing, event or marketing costs.'},
      {heading:'Direct donation, reported afterwards',body:'After a city’s relevant sales period closes, PlanetHike will pay the calculated donation directly to the named organisation and publish the recipient, final amount and confirmation of payment. Payment details are handled only in the participating-organisation process, not on public cause or sales pages.'},
      {heading:'Local collaborators have a real role',body:'Schools, youth groups, charities and volunteer crews may help create a local walk. They can bring participants, volunteers, spaces or creative ideas. A cleft organisation can be a host, co-host or beneficiary; those roles are agreed locally and documented before the event.'},
      {heading:'Fun first. Impact visible.',body:'Nobody should need guilt to join The Chaos Walk. The event should earn attention on its own — and then turn some of that attention into transparent local support.'}
    ]}
    ctaLabel="Pre-register for The Chaos Walk"
    ctaHref="/#join"
    secondaryLabel="Become a local partner"
    secondaryHref="/become-a-partner"
  />;
}

