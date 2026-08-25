import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk FAQ | PlanetHike',
  description: 'Answers about The Chaos Walk, May 2027, 10,000 steps, two different shoes, the Chaos Fan, city events and City Leads.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return <SeoLanding
    eyebrow="THE CHAOS WALK / FAQ"
    title="Before you walk different"
    intro="The essentials: May 2027, around 10,000 steps, two different shoes, off colours, one very visible day — and free pre-registration."
    faq={[
      {q:'Is The Chaos Walk free?',a:'Yes. Pre-registration and participation are free. PlanetHike merchandise is sold separately and is not an entry ticket.'},
      {q:'What is the exact date?',a:'The Chaos Walk is planned for May 2027. The exact date will be emailed to pre-registered participants and published on the site when announced.'},
      {q:'Do I really have to wear two different shoes?',a:'That is the signature. Make the mismatch obvious: different colours, styles or silhouettes. Comfort and safe walking still come first.'},
      {q:'What does “off colours” mean?',a:'Clash on purpose. Bright, unexpected combinations are encouraged. The goal is not a PlanetHike uniform — it is thousands of people looking different together.'},
      {q:'Do I need a Chaos Fan?',a:'You can walk without buying one, but the Chaos Fan is the shared object of the day and a big part of the group photographs and rituals. We strongly encourage participants to bring it.'},
      {q:'When does the Chaos Shop open?',a:'Before the May 2027 event. Pre-register and tick the shop alert to hear when Edition 001 opens.'},
      {q:'How will merchandise delivery work?',a:'When the shop opens, you can choose home delivery where available or event collection in a confirmed city. City collection stock is sent to the local team at least two weeks before event day.'},
      {q:'How do I know if my city is happening?',a:'Pre-register your city first. When a City Lead, crew and local route are ready, PlanetHike will publish the city details and email participants there.'},
      {q:'Can I lead The Chaos Walk in my city?',a:'Yes. Apply through the City Lead page. You do not need to be a professional event organiser, but you should know your city, be able to bring people together and care about safety and accessibility.'},
      {q:'What cause does PlanetHike support?',a:'PlanetHike plans to connect official Chaos Fan sales to a human-impact mission focused on reconstructive care. The cause partner and exact contribution will be published before Edition 001 sales open.'}
    ]}
    ctaLabel="Pre-register free"
    ctaHref="/#join"
    secondaryLabel="Explore the Chaos Shop"
    secondaryHref="/shop"
  />;
}
