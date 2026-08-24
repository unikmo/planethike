import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Terms | PlanetHike',
  description: 'Staging terms for PlanetHike first-access registration, City Lead applications and the planned May 2027 Chaos Walk.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <LegalPage
    draft
    eyebrow="TERMS / MAY 2027 TARGET MODEL"
    title="Terms"
    intro="These staging terms are aligned to the current target model: free first-access registration, status-aware cities, City Lead applications and merchandise that is not yet for sale. Final production terms require legal review."
    sections={[
      {heading:'Operator',body:<p>The current evidence-backed operator is PlanetHike OÜ, Reg. No. 17233027, Järvevana tee 9, 11314 Tallinn, Estonia. Contact: <a href="mailto:hello@planethike.org">hello@planethike.org</a>.</p>},
      {heading:'First-access is not event confirmation',body:<p>Joining the first-access list records interest and allows PlanetHike to communicate confirmed launch information. It does not guarantee that a named city will host an event, that a route is approved or that a specific date/time is final.</p>},
      {heading:'Participation model',body:<p>PlanetHike currently intends participation in The Chaos Walk to be free. Final event-specific participation rules, local safety instructions, age/supervision requirements, accessibility information and any required waivers must be published before a confirmed event opens.</p>},
      {heading:'City Lead applications',body:<p>Submitting an application does not appoint or authorize the applicant as a PlanetHike City Lead. Approval depends on review of local capacity, crew readiness, route/permission awareness, safety, accessibility and other operating requirements. PlanetHike may approve, decline or request more information.</p>},
      {heading:'Merchandise',body:<p>The current Chaos Fan pages are previews, not an active checkout. Planned prices are not binding offers until sales open. Final commerce terms must cover availability, payment, shipping, delivery, returns, defects, cancellations and mandatory consumer rights before a transaction is enabled.</p>},
      {heading:'Impact-linked claims',body:<p>PlanetHike intends to publish any sales-linked reconstructive-surgery contribution only after the partner, contribution rule, settlement process and reporting standard are verified. No staging statement should be read as evidence that such a contribution is already active.</p>},
      {heading:'Conduct and safety',body:<p>Participants and organizers are expected to follow local law, event instructions, traffic rules, accessibility requirements and respectful conduct standards. Final event liability and safety wording remains subject to legal and operational review before production.</p>},
      {heading:'Intellectual property and changes',body:<p>PlanetHike branding, website content and event materials remain protected by applicable intellectual-property law. PlanetHike may update the service and these terms as the May 2027 operating model is finalized, subject to applicable law and notice requirements.</p>},
      {heading:'Governing law',body:<p>The current legacy terms identify Estonian law and Estonian courts, subject to mandatory consumer-protection rules. Final 2027 dispute, consumer and jurisdiction wording must be confirmed during legal review before release.</p>}
    ]}
  />;
}
