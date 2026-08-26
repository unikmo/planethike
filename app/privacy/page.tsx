import type { Metadata } from 'next';
import LegalPage from '../LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Notice | PlanetHike',
  description: 'How PlanetHike handles pre-registration, City Lead applications, contact messages and optional analytics data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <LegalPage
    eyebrow="PRIVACY / LAST UPDATED 26 AUGUST 2026"
    title="Privacy Notice"
    intro="This notice explains what PlanetHike collects when you pre-register, apply to lead a city, contact us or choose to allow website analytics."
    sections={[
      {heading:'Who is responsible?',body:<p>PlanetHike OÜ, Reg. No. 17233027, Järvevana tee 9, 11314 Tallinn, Estonia. Privacy questions can be sent to <a href="mailto:hello@planethike.org">hello@planethike.org</a>.</p>},
      {heading:'Pre-registration data',body:<p>When you pre-register, we collect your first name, email address, country, city, how you want to participate, whether you want Chaos Shop alerts, any optional marketing consent and the time you accepted this notice.</p>},
      {heading:'City Lead applications',body:<p>If you apply to become a City Lead, we also collect your last name, local connection, city, local-network information, crew status, organising or volunteering experience, motivation and the acknowledgements needed to review the application.</p>},
      {heading:'Contact messages',body:<p>If you use the contact form, we collect your name, email address, selected topic, message and the time you accepted this notice. Please do not submit payment-card details, passwords, identity documents or sensitive health information through the form.</p>},
      {heading:'How we use the information',body:<p>We use the information to manage pre-registrations, understand city interest, send event or shop updates you requested, review City Lead applications, answer enquiries and organise confirmed PlanetHike activities. Optional marketing messages can be unsubscribed from at any time.</p>},
      {heading:'Website analytics',body:<p>Google Analytics 4 is loaded only if it is configured on the site and you actively choose “Allow analytics.” You can continue using the site, pre-register and contact PlanetHike without allowing analytics.</p>},
      {heading:'Service providers',body:<p>PlanetHike uses service providers including Vercel for website hosting and Supabase for database services. Where optional analytics are enabled, Google Analytics may also process usage information. We use providers only for the services needed to operate the site and event registrations.</p>},
      {heading:'How long we keep data',body:<p>We keep personal data only for as long as it is needed for the purpose for which it was collected and for any period required by applicable law. Marketing contact details are removed from marketing use when you unsubscribe. Contact messages are retained only as long as needed to answer, document and close the enquiry.</p>},
      {heading:'Your choices and rights',body:<p>Depending on applicable law, you may have rights to access, correct, delete, restrict or object to processing, request portability, withdraw consent and complain to a competent data-protection authority. To make a request, contact <a href="mailto:hello@planethike.org">hello@planethike.org</a>.</p>}
    ]}
  />;
}
