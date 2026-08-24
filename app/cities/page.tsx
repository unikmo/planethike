import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Chaos Walk Cities | May 2027 | PlanetHike',
  description: 'PlanetHike will publish Chaos Walk city pages only after a City Lead and local operating readiness are verified for May 2027.',
  alternates: { canonical: '/cities' },
};

export default function Page() {
  return (
    <SeoLanding
      eyebrow="CITIES / MAY 2027"
      title="A city goes live when it is ready."
      intro="The Chaos Walk is designed as a multi-city event, but PlanetHike will not present a location as confirmed until local leadership and basic operating readiness have been reviewed."
      bullets={['Verified cities only', 'Local City Leads', 'Local meeting details', 'No placeholder city pages']}
      sections={[
        { heading: 'Confirmed means confirmed', body: 'A city page goes live only when there is an approved local lead or co-lead team and enough operational information to give participants a credible next step.' },
        { heading: 'Your city is missing?', body: 'Apply to lead it. The City Lead application asks about organising experience, initial crew capacity and local reach so PlanetHike can review readiness before promotion begins.' },
        { heading: 'Interest is still useful', body: 'Walkers can join the first-access list even when their city is not yet confirmed. That demand signal can help PlanetHike understand where local leadership is needed.' },
        { heading: 'Local execution, shared identity', body: 'Approved locations use the same core Chaos Walk identity—10,000 steps, two different shoes, the Chaos Fan ritual and shared challenge moments—while local logistics remain locally owned.' },
      ]}
      ctaLabel="Apply as a City Lead"
      ctaHref="/city-leads"
      secondaryLabel="Join first access"
      secondaryHref="/join"
    />
  );
}
