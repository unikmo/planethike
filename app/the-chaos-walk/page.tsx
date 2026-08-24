import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk | May 2027 | PlanetHike',
  description: 'The Chaos Walk is PlanetHike’s planned May 2027 global 10,000-step walking event with two different shoes, a Chaos Fan ritual and shared challenge moments.',
  alternates: { canonical: '/the-chaos-walk' },
};

export default function Page() {
  return (
    <SeoLanding
      eyebrow="THE SIGNATURE EXPERIENCE / MAY 2027"
      title="The Chaos Walk"
      intro="PlanetHike is building a 10,000-step social walking event designed to be recognisable from a single photo: two different shoes, deliberately off colours, a Chaos Fan ritual and shared challenge moments."
      bullets={['10,000-step format', 'Two different shoes', 'Chaos Fan ritual', 'City-led execution']}
      sections={[
        { heading: 'Not just a walk', body: 'The planned route rhythm includes Chaos Drops: shared challenge moments that give participating cities a common experience while leaving room for local personality.' },
        { heading: 'The signature look', body: 'Two different shoes and deliberately clashing colours make the visual identity easy to understand without requiring a costume or athletic performance.' },
        { heading: 'A city must be ready before it is promoted', body: 'PlanetHike is recruiting and reviewing City Leads before presenting locations as confirmed. Confirmed cities will receive local meeting, route and event information.' },
        { heading: 'May 2027, exact date to be announced', body: 'The relaunch month is May 2027. The exact event date has not yet been published, so the participant form is currently a first-access list rather than final event registration.' },
      ]}
      faq={[
        { q: 'Can I register now?', a: 'You can join the first-access list now. Final event registration, the exact date and confirmed city details will be announced after verification.' },
        { q: 'How far is the walk?', a: 'The current event design is built around approximately 10,000 steps rather than a race time.' },
        { q: 'Is my city confirmed?', a: 'Only cities that pass City Lead and operating-readiness review will be presented as confirmed.' },
      ]}
      ctaLabel="Apply as a City Lead"
      ctaHref="/city-leads"
      secondaryLabel="Join first access"
      secondaryHref="/join"
    />
  );
}
