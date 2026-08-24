import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Privacy Notice | PlanetHike',
  description: 'Pre-production privacy notice for PlanetHike first-access and City Lead forms.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <SeoLanding
      eyebrow="PRIVACY / PRE-PRODUCTION NOTICE"
      title="What the current forms collect."
      intro="This staging notice documents the data flow implemented in the current PlanetHike build. Final production privacy language and controller details require legal confirmation before launch."
      bullets={['PlanetHike OÜ — working operator', 'First-access data', 'City Lead application data', 'No analytics enabled by this notice']}
      sections={[
        { heading: 'Working operator', body: 'The current staging build treats PlanetHike OÜ, registry code 17233027, as the operating entity. This must be reconfirmed before production release.' },
        { heading: 'Participant first access', body: 'The form collects first name, email address, country, city, consent timestamp and a source identifier so PlanetHike can manage the early-interest list and send event-related updates.' },
        { heading: 'City Lead applications', body: 'The City Lead form additionally collects organising experience, initial crew capacity, local reach, languages and optional notes so PlanetHike can review local operating readiness.' },
        { heading: 'Storage and access', body: 'The current implementation stores form submissions in the connected PlanetHike Supabase project. Public form roles are intended to have insert access only; the production access model must be reverified during QA.' },
        { heading: 'Your choices', body: 'Submitting a form is optional. The production privacy notice must provide a verified contact method for access, correction, deletion and other applicable privacy requests before the site is released.' },
        { heading: 'Cookies and analytics', body: 'This notice does not claim that analytics or advertising cookies are active. Any analytics or marketing measurement added before launch must be documented and tested against the production consent mechanism.' },
      ]}
      ctaLabel="Back to PlanetHike"
      ctaHref="/"
    />
  );
}
