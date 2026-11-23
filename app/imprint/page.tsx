import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Imprint | PlanetHike',
  description: 'Legal company and contact information for PlanetHike OÜ.',
  alternates: { canonical: '/imprint' },
};

export default function ImprintPage() {
  return <LegalPage
    eyebrow="Legal information"
    title="Imprint"
    intro="Company details for PlanetHike."
    sections={[
      {heading:'Company',body:<p><strong>PlanetHike OÜ</strong><br/>Registration No. 17233027<br/>Järvevana tee 9<br/>11314 Tallinn<br/>Estonia</p>},
      {heading:'Contact',body:<p><a href="/contact">Contact form</a><br/><a href="mailto:hello@planethike.org">hello@planethike.org</a></p>},
    ]}
  />;
}
