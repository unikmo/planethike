import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Become a Local Partner | PlanetHike',
  description: 'For local cleft organisations, schools, charities and community groups that want to host or co-host a PlanetHike walk.',
  alternates: { canonical: '/become-a-partner' },
};

export default function BecomeAPartnerPage() {
  return <SeoLanding
    eyebrow="FOR LOCAL ORGANISATIONS"
    title="Bring the Chaos Walk to your city"
    intro="Local cleft organisations, schools, charities and community groups can host or co-host a PlanetHike walk. You bring local knowledge and people; we bring the shared format, planning support and a clear cause commitment."
    bullets={['Host or co-host a city walk','Build a local volunteer crew','Choose the local cleft beneficiary','20% of qualifying Fan revenue']}
    sections={[
      {heading:'Choose your role',body:'A participating organisation can host the walk, co-host it with a local City Lead, contribute volunteers or venues, or simply help shape the local format. A cleft organisation can also be the named local beneficiary if that is agreed.'},
      {heading:'The cause commitment',body:'For every confirmed walk city, PlanetHike commits 20% of qualifying Chaos Fan sales revenue to the named local cleft organisation. Qualifying revenue is the Fan item price excluding VAT and delivery charges, less refunds; the 20% is not reduced for product, payment-processing, event or marketing costs.'},
      {heading:'What we need to agree',body:'Before a city is confirmed, we agree the local role, volunteer and safety responsibilities, accessibility needs, sales period, beneficiary, reporting process and how the organisation is named publicly. No organisation is listed as a partner without its agreement.'},
      {heading:'Payment details stay private',body:'After an organisation is confirmed as a participating partner or beneficiary, PlanetHike collects and verifies the payment details needed for the direct donation. Those details stay within the participating-organisation process and are not shown on public cause or sales pages.'}
    ]}
    faq={[
      {q:'Do we have to host the walk to receive the donation?',a:'No. A local cleft organisation can be the beneficiary without hosting. Hosting, co-hosting and beneficiary roles are agreed separately for each city.'},
      {q:'Can we bring our own volunteers?',a:'Yes. Participating organisations may involve their own volunteers, subject to the agreed local roles, safeguarding and event-safety arrangements.'},
      {q:'When do we receive the donation?',a:'After the relevant city sales period closes, PlanetHike calculates 20% of qualifying Fan revenue, pays the named organisation directly and publishes the recipient and final donation.'}
    ]}
    ctaLabel="Ask about partnership"
    ctaHref="mailto:hello@planethike.org?subject=PlanetHike%20local%20partner%20enquiry"
    secondaryLabel="Read the cause commitment"
    secondaryHref="/the-cause"
  />;
}

