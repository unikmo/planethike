import type { Metadata } from 'next';
import LegalPage from '../LegalPage';
import ContactForm from '../ContactForm';

export const metadata: Metadata = {
  title: 'Contact | PlanetHike',
  description: 'Contact PlanetHike about The Chaos Walk, city participation, partnerships or the Chaos Fan.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <LegalPage
    eyebrow="Get in touch"
    title="Contact"
    intro="A question about The Chaos Walk, your city or PlanetHike? Send us a message."
    sections={[
      {heading:'Send a message',body:<ContactForm />},
    ]}
  />;
}
