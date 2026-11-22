import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk FAQ | PlanetHike',
  description: 'Answers about The Chaos Walk on Sunday, 17 October 2027, 10,000 steps, two different shoes, the Chaos Fan, city events and City Leads.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return <SeoLanding
    eyebrow="THE CHAOS WALK / FAQ"
    title="Before you walk different"
    intro="The essentials: Sunday, 17 October 2027, around 10,000 steps, two different shoes, off colours, one very visible day — and free pre-registration."
    faq={[
      {q:'Is The Chaos Walk free?',a:'Yes. Pre-registration and participation are free. PlanetHike merchandise is sold separately and is not an entry ticket.'},
      {q:'What is the exact date?',a:'The Chaos Walk takes place on Sunday, 17 October 2027. Local city details will be emailed to pre-registered participants and published on the site when confirmed.'},
      {q:'Do I really have to wear two different shoes?',a:'That is the signature. Make the mismatch obvious: different colours, styles or silhouettes. Comfort and safe walking still come first.'},
      {q:'What does “off colours” mean?',a:'Clash on purpose. Bright, unexpected combinations are encouraged. The goal is not a PlanetHike uniform — it is thousands of people looking different together.'},
      {q:'Do I need a Chaos Fan?',a:'You can walk without buying one, but the Chaos Fan is the shared object of the day and a big part of the group photographs and rituals. We strongly encourage participants to bring it.'},
      {q:'When does the Chaos Shop open?',a:'Orders are not yet open. Only Chaos Fan Edition 001 is planned for Year 1. Register and tick the optional Fan alert to hear when production, pricing and delivery are confirmed.'},
      {q:'How will the Chaos Fan be delivered?',a:'Home delivery and collection at confirmed city events are being evaluated. Final delivery regions, deadlines and costs will be published before any paid orders open.'},
      {q:'How do I know if my city is happening?',a:'Pre-register your city first. When a City Lead, crew and local route are ready, PlanetHike will publish the city details and email participants there.'},
      {q:'Can I lead The Chaos Walk in my city?',a:'Yes. Apply through the City Lead page. You do not need to be a professional event organiser, but you should know your city, be able to bring people together and care about safety and accessibility.'},
      {q:'What cause does PlanetHike support?',a:'For each confirmed walk city, PlanetHike commits 20% of qualifying Chaos Fan sales revenue to a named local cleft organisation. Qualifying revenue is the Fan item price excluding VAT and delivery charges, less refunds. The local walk organisation selects the beneficiary, which may also choose to host or co-host the walk. We report the recipient and final donation after the sales period closes.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="Explore the Chaos Shop"
    secondaryHref="/shop"
  />;
}

