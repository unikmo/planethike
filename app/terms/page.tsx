import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Terms | PlanetHike',
  description: 'Terms for PlanetHike pre-registration, City Lead applications and The Chaos Walk.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <LegalPage
    eyebrow="TERMS / LAST UPDATED 25 AUGUST 2026"
    title="Terms"
    intro="These terms apply to the PlanetHike website, pre-registration for The Chaos Walk and City Lead applications. Separate sales terms will apply when the Chaos Shop opens."
    sections={[
      {heading:'Operator',body:<p>PlanetHike is operated by PlanetHike OÜ, Reg. No. 17233027, Järvevana tee 9, 11314 Tallinn, Estonia. Contact: <a href="mailto:hello@planethike.org">hello@planethike.org</a>.</p>},
      {heading:'Pre-registration',body:<p>Pre-registration records your interest in The Chaos Walk and lets PlanetHike send event information. A city selected during pre-registration is not a guarantee that an event will take place there. Confirmed city details are published separately.</p>},
      {heading:'Participation',body:<p>PlanetHike intends The Chaos Walk to be free to join. Participants must follow local law, event instructions, traffic rules, safety guidance and respectful-conduct requirements. Local age, supervision and accessibility information may vary by city and will be published with confirmed event details.</p>},
      {heading:'City Lead applications',body:<p>Submitting an application does not automatically appoint you as a City Lead. PlanetHike may contact you for more information and may accept or decline an application. Approved City Leads must follow the event guidance and local legal, safety and accessibility requirements relevant to their city.</p>},
      {heading:'Chaos Shop',body:<p>Until ordering opens, product pages are informational and no purchase contract is created. When sales open, the shop will show applicable prices, availability, payment, shipping, collection, returns and consumer information before an order is placed.</p>},
      {heading:'Cause contributions',body:<p>PlanetHike plans to connect official Chaos Fan sales to a human-impact mission. The cause partner and exact sales-linked contribution will be published before those sales open. Only the contribution stated at the time of purchase will apply to an order.</p>},
      {heading:'Website content',body:<p>We work to keep event information accurate, but dates, city availability, routes and programme details may change. Material changes will be communicated through the website or to registered participants where appropriate.</p>},
      {heading:'Intellectual property',body:<p>PlanetHike names, logos, event concepts, website content and original event materials are protected by applicable intellectual-property law. Personal, non-commercial sharing of public event information is welcome; other reuse requires permission unless the law provides otherwise.</p>},
      {heading:'Applicable law',body:<p>These terms are governed by Estonian law, subject to any mandatory consumer-protection rights that apply to you in your country of residence.</p>}
    ]}
  />;
}
