import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Contact | PlanetHike',
  description: 'Contact PlanetHike about The Chaos Walk, first-access, City Lead applications or the planned Chaos Fan.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <LegalPage
    eyebrow="CONTACT / PLANETHIKE"
    title="Contact"
    intro="Use the specific pathway when possible so the right information is captured from the start."
    sections={[
      {heading:'General questions',body:<p>Email <a href="mailto:hello@planethike.org">hello@planethike.org</a>. Avoid sending sensitive health, identity or payment information by email.</p>},
      {heading:'Participant first-access',body:<p>Use the <a href="/join">first-access form</a> to record your city and participation interest. A city selection is demand data, not confirmation of a local event.</p>},
      {heading:'City Lead applications',body:<p>Use the dedicated <a href="/city-leads/apply">City Lead application</a> so PlanetHike can review local capacity, crew readiness, safety and accessibility acknowledgements.</p>},
      {heading:'Chaos Fan',body:<p>Sales are not open yet. Join first-access and tick the Chaos Fan alert if you want to be notified when verified commerce launches.</p>}
    ]}
  />;
}
