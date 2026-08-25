import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Imprint | PlanetHike',
  description: 'Company and contact information for PlanetHike OÜ.',
  alternates: { canonical: '/imprint' },
};

export default function ImprintPage() {
  return <LegalPage
    eyebrow="IMPRINT / COMPANY INFORMATION"
    title="Imprint"
    intro="Company and contact information for PlanetHike."
    sections={[
      {heading:'Company',body:<p><strong>PlanetHike OÜ</strong><br/>Registration No. 17233027<br/>Järvevana tee 9<br/>11314 Tallinn<br/>Estonia</p>},
      {heading:'Contact',body:<p>Email: <a href="mailto:hello@planethike.org">hello@planethike.org</a><br/>Website: <a href="https://planethike.org">planethike.org</a></p>},
      {heading:'Website',body:<p>This website provides information about PlanetHike, The Chaos Walk, City Lead applications and the Chaos Shop.</p>},
      {heading:'Consumer information',body:<p>Additional purchase, shipping, returns and consumer information will be displayed with the applicable Chaos Shop terms when ordering opens.</p>}
    ]}
  />;
}
