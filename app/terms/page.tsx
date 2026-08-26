import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Terms | PlanetHike',
  description: 'Terms for PlanetHike pre-registration, City Lead applications and participation in The Chaos Walk.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <LegalPage
    eyebrow="TERMS / LAST UPDATED 26 AUGUST 2026"
    title="Terms"
    intro="These terms apply to the PlanetHike website, pre-registration for The Chaos Walk and City Lead applications. Separate sales terms will apply when the Chaos Shop opens."
    sections={[
      {heading:'Operator',body:<p>PlanetHike is operated by PlanetHike OÜ, Reg. No. 17233027, Järvevana tee 9, 11314 Tallinn, Estonia. Contact: <a href="mailto:hello@planethike.org">hello@planethike.org</a>.</p>},
      {heading:'Pre-registration',body:<p>Pre-registration records your interest in The Chaos Walk and lets PlanetHike send event information. A country or city selected during pre-registration is not a guarantee that an event will take place there. Confirmed city details are published separately.</p>},
      {heading:'Participation and personal responsibility',body:<p>The Chaos Walk is a social walking event, not a race or medical programme. Participants are responsible for deciding whether the planned distance and conditions are suitable for them, following local law, traffic rules, route instructions and reasonable safety guidance, and stopping if they cannot continue safely. Nothing on this website is medical advice.</p>},
      {heading:'Two different shoes — safely',body:<p>The visual signature is two clearly different shoes, but both shoes should still be suitable for walking. PlanetHike does not ask participants to wear unsafe footwear, materially different heel or sole heights, damaged shoes or anything that causes pain, instability or avoidable risk.</p>},
      {heading:'Children and supervised groups',body:<p>Age, consent, safeguarding and supervision requirements may vary by city and group. Children and school groups must participate only with the supervision, permissions and safeguarding arrangements required by their parent, guardian, school, organiser and applicable local rules.</p>},
      {heading:'Routes, weather and event changes',body:<p>Dates, start times, routes, challenge moments and city availability may change because of permissions, weather, safety, local conditions or other operational needs. Material changes will be published or communicated to registered participants where appropriate.</p>},
      {heading:'Photography and public-event media',body:<p>Confirmed event information may state that photography or filming will take place in public-event areas. Any event-specific photography notice, opt-out process or consent requirement will be communicated with the relevant local event information before participation.</p>},
      {heading:'City Lead applications',body:<p>Submitting an application does not automatically appoint you as a City Lead. PlanetHike may contact you for more information and may accept or decline an application. Approved City Leads must follow the event guidance and local legal, safety and accessibility requirements relevant to their city.</p>},
      {heading:'Chaos Shop',body:<p>Until ordering opens, product pages are informational and no purchase contract is created. When sales open, the shop will show applicable prices, availability, payment, shipping, city collection, returns and consumer information before an order is placed.</p>},
      {heading:'Cause contributions',body:<p>PlanetHike plans to connect official Chaos Fan sales to a human-impact mission. The cause partner and exact sales-linked contribution will be published before those sales open. Only the contribution stated at the time of purchase will apply to an order.</p>},
      {heading:'Website content',body:<p>We work to keep event information accurate, but planning information can change as cities move from interest to confirmed operation. Pages that describe future products, cities or event elements do not create a guarantee unless PlanetHike explicitly confirms them.</p>},
      {heading:'Intellectual property',body:<p>PlanetHike names, logos, event concepts, website content and original event materials are protected by applicable intellectual-property law. Personal, non-commercial sharing of public event information is welcome; other reuse requires permission unless the law provides otherwise.</p>},
      {heading:'Applicable law',body:<p>These terms are governed by Estonian law, subject to any mandatory consumer-protection rights that apply to you in your country of residence.</p>}
    ]}
  />;
}
