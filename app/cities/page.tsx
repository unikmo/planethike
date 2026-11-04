import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk in Your City | PlanetHike',
  description: 'Pre-register for The Chaos Walk in your city or apply to lead it. May 2027.',
  alternates: { canonical: '/cities' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="YOUR CITY / MAY 2027"
    title="Bring the chaos to your city"
    intro="Tell us where you want to walk. Every pre-registration helps us see where the energy is. When a City Lead or local host organisation, crew and route are ready, we’ll announce the city details."
    bullets={['Pre-register free','10,000 steps','City Leads and host organisations wanted','Local details by email']}
    sections={[
      {heading:'Raise your hand',body:'Pre-register and choose your city. If it is not listed, add it. We want to know where people want The Chaos Walk next.'},
      {heading:'Find the local starter',body:'Cities need someone who knows the place and can bring people together. That can be an individual City Lead, a school, a charity, a youth group or another community organisation.'},
      {heading:'Build the crew and local partnership',body:'The City Lead or host organisation brings together a small volunteer team and works through the route, local permissions, safety and accessibility. A local cleft organisation can host or co-host if it chooses.'},
      {heading:'Then the city goes live',body:'Once the local details are ready, we publish the meeting point, timing and participant information so you know exactly where to show up in two different shoes.'}
    ]}
    ctaLabel="Pre-register my city"
    ctaHref="/#join"
    secondaryLabel="Host or co-host my city"
    secondaryHref="/become-a-partner"
  />;
}

