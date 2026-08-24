import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Notice | PlanetHike',
  description: 'PlanetHike privacy notice for first-access registrations, City Lead applications and optional analytics.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <LegalPage
    draft
    eyebrow="PRIVACY / TARGET 2027 FLOWS"
    title="Privacy Notice"
    intro="This staging notice describes the personal data currently designed into the May 2027 first-access and City Lead flows. It replaces the obsolete Water/Art/Trees-era privacy framing in the target build."
    sections={[
      {heading:'Who is responsible?',body:<p>PlanetHike OÜ, Reg. No. 17233027, Järvevana tee 9, 11314 Tallinn, Estonia. Privacy questions can be sent to <a href="mailto:hello@planethike.org">hello@planethike.org</a>.</p>},
      {heading:'Participant first-access data',body:<p>The current form collects first name, email, country, city/interest location, participation interest, optional Chaos Fan launch interest, optional marketing consent and the timestamp showing that the privacy notice was accepted. A city selection records demand; it is not proof that a local event is confirmed.</p>},
      {heading:'City Lead application data',body:<p>The organizer form additionally collects last name, current role/community connection, desired city, local-network level, crew readiness, organizing/volunteering experience, motivation and acknowledgements relating to route/permissions, safety and accessibility.</p>},
      {heading:'Why we use it',body:<p>Data is used to manage the first-access list, measure city demand, send requested launch or merchandise alerts, review City Lead applications, operate future confirmed events and protect the integrity of the event network. Optional marketing updates are separate from the processing needed to handle a registration or application.</p>},
      {heading:'Analytics',body:<p>The target build can load Google Analytics 4 only when a measurement ID is configured and the visitor actively chooses “Allow analytics.” Choosing “Continue without analytics” does not prevent registration. The final production notice must confirm the configured provider, transfer mechanism and retention settings before release.</p>},
      {heading:'Service providers and international transfers',body:<p>PlanetHike uses technical service providers to host the website, forms and database. The final production notice must name or categorize the active providers and document any required safeguards for transfers outside the EEA before this draft can be treated as final.</p>},
      {heading:'Retention',body:<p>Personal data should be kept only for as long as needed for the purpose it was collected for and any applicable legal obligations. The concrete production retention schedule is still to be confirmed and is a release blocker for the final legal review.</p>},
      {heading:'Your rights',body:<p>Depending on applicable law, you may have rights to access, correct, delete, restrict or object to processing, request portability, withdraw consent and complain to a competent data-protection authority. Withdrawing optional marketing consent does not invalidate earlier lawful processing.</p>}
    ]}
  />;
}
