import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Chaos Walk City Status | Join a City Waitlist | PlanetHike',
  description: 'Join first-access for The Chaos Walk in your city or apply to lead it. PlanetHike only labels a city confirmed after local operating readiness is verified.',
  alternates: { canonical: '/cities' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="CITIES / MAY 2027 / STATUS-AWARE"
    title="Tell us where you want The Chaos Walk"
    intro="PlanetHike can collect demand broadly without pretending every location is already an active event. Choose your city in first-access; confirmation comes only after local readiness is real."
    bullets={['Interest list ≠ confirmed event','Approved City Lead required','Local route and operating facts required','Confirmed details published only when ready']}
    sections={[
      {heading:'1. Interest open',body:'People can join first-access and record demand for a city. This is the broadest state and does not mean an event exists locally yet.'},
      {heading:'2. Organizer needed',body:'Demand exists but PlanetHike still needs a capable local City Lead or co-lead team. Interested organizers can apply through the dedicated qualification form.'},
      {heading:'3. Organizer approved',body:'A local lead has passed initial review, but the city still needs route, permissions where required, crew, safety, accessibility and publishable event information.'},
      {heading:'4. Event confirmed',body:'Only then should a city page publish local meeting information, final date/time, route guidance, FAQs and participant instructions.'}
    ]}
    ctaLabel="Join first-access for my city"
    ctaHref="/#join"
    secondaryLabel="Apply to lead a city"
    secondaryHref="/city-leads/apply"
  />;
}
