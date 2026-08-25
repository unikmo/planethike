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
    intro="Tell us where you want to walk. Every pre-registration helps us see where the energy is. When a local City Lead, crew and route are ready, we’ll announce the city details."
    bullets={['Pre-register free','10,000 steps','City Leads wanted','Local details by email']}
    sections={[
      {heading:'Raise your hand',body:'Pre-register and choose your city. If it is not listed, add it. We want to know where people want The Chaos Walk next.'},
      {heading:'Find the local starter',body:'Cities need someone who knows the place and can bring people together. That is the City Lead. If that sounds like you, apply.'},
      {heading:'Build the crew',body:'The City Lead brings together a small volunteer team and works through the route, local permissions, safety and accessibility for the day.'},
      {heading:'Then the city goes live',body:'Once the local details are ready, we publish the meeting point, timing and participant information so you know exactly where to show up in two different shoes.'}
    ]}
    ctaLabel="Pre-register my city"
    ctaHref="/#join"
    secondaryLabel="Lead my city"
    secondaryHref="/city-leads/apply"
  />;
}
