import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The PlanetHike Cause | Fun That Gives Back',
  description: 'PlanetHike plans to pass donations from official Chaos Mask sales directly to local cleft organisations selected by the local walk organisation in each confirmed city.',
  alternates: { canonical: '/the-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE CAUSE / FUN THAT GIVES BACK"
    title="A ridiculous walk. A serious impact."
    intro="The Chaos Walk should be worth joining because it is unforgettable. PlanetHike also intends to turn official Chaos Mask sales into direct local support for cleft organisations in the cities where walks take place."
    bullets={['The walk stays free','Local beneficiary selected locally','Donations paid directly','Recipient and final amount reported']}
    sections={[
      {heading:'Why cleft organisations?',body:'Cleft lip and palate can affect feeding, hearing, speech and everyday participation. Families may also need practical information, peer connection and long-term specialist support. PlanetHike’s intended cause work is about supporting reputable organisations in that field; it does not provide medical advice or care.'},
      {heading:'A local decision in every walk city',body:'For each confirmed walk city, the local walk organisation will be responsible for selecting a suitable local cleft organisation. PlanetHike will not present an organisation as a partner until it has agreed.'},
      {heading:'Direct donation, reported afterwards',body:'Donations from official Chaos Mask sales connected with a city are intended to be paid directly to the locally selected cleft organisation. Because the final amount depends on sales, PlanetHike will report the receiving organisation and the final donation after that city’s relevant sales period closes.'},
      {heading:'Local collaborators have a real role',body:'Schools, youth groups, charities and volunteer crews may help create a local walk. The local walk organisation is responsible for selecting the local cleft beneficiary; other collaborators may bring participants, volunteers, spaces or creative ideas.'},
      {heading:'Fun first. Impact visible.',body:'Nobody should need guilt to join The Chaos Walk. The event should earn attention on its own — and then turn some of that attention into transparent local support.'}
    ]}
    ctaLabel="Pre-register for The Chaos Walk"
    ctaHref="/#join"
    secondaryLabel="Meet the Chaos Fan"
    secondaryHref="/shop/chaos-fan"
  />;
}

