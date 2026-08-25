import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Contact | PlanetHike',
  description: 'Contact PlanetHike about The Chaos Walk, pre-registration, City Leads or the Chaos Shop.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <LegalPage
    eyebrow="CONTACT / PLANETHIKE"
    title="Talk to us"
    intro="Walking, organising, partnering or wondering where your Chaos Fan is going to come from? Start here."
    sections={[
      {heading:'General questions',body:<p>Email <a href="mailto:hello@planethike.org">hello@planethike.org</a>. Please do not send sensitive health, identity or payment information by email.</p>},
      {heading:'Want to walk?',body:<p><a href="/join">Pre-register free</a>, choose your city and we’ll send the May 2027 details as they are announced.</p>},
      {heading:'Want to lead your city?',body:<p>Read the <a href="/city-leads">City Lead page</a> and then <a href="/city-leads/apply">send your application</a>. We’ll contact you about the next step.</p>},
      {heading:'Chaos Shop',body:<p>Edition 001 opens before the walk. Pre-register and tick the Chaos Shop alert if you want to hear when the Fan and event merchandise go on sale.</p>}
    ]}
  />;
}
