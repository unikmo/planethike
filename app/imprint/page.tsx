import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Imprint | PlanetHike',
  description: 'Company and contact information for PlanetHike OÜ.',
  alternates: { canonical: '/imprint' },
};

export default function ImprintPage() {
  return <LegalPage
    draft
    eyebrow="IMPRINT / COMPANY INFORMATION"
    title="Imprint"
    intro="Company details supported by the current PlanetHike records reviewed for this build. Representative and any additional mandatory disclosure fields still require final legal verification before production."
    sections={[
      {heading:'Company',body:<p><strong>PlanetHike OÜ</strong><br/>Reg. No. 17233027<br/>Järvevana tee 9<br/>11314 Tallinn<br/>Estonia</p>},
      {heading:'Contact',body:<p>Email: <a href="mailto:hello@planethike.org">hello@planethike.org</a><br/>Website: <a href="https://planethike.org">planethike.org</a></p>},
      {heading:'Representative',body:<p>The authorized representative/management disclosure for the May 2027 production site is not yet verified in the evidence used for this build. This field must be completed before release.</p>},
      {heading:'Consumer and regulatory disclosures',body:<p>Any additional disclosure required by the jurisdictions in which PlanetHike actively sells merchandise or operates confirmed events must be added after the final commerce and event footprint is locked.</p>}
    ]}
  />;
}
