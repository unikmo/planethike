import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'Partner with The Chaos Walk | PlanetHike',
  description: 'Partner with PlanetHike around The Chaos Walk in May 2027: support a city, bring a team, contribute in kind, collaborate on the cause or help tell the story.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Partner with The Chaos Walk | PlanetHike',
    description: 'Help make a local Chaos Walk stronger without turning it into a wall of sponsor logos.',
    url: 'https://planethike.org/partners',
    type: 'website',
  },
};

export default function PartnersPage() {
  return <SeoLanding
    eyebrow="PARTNERS / MAY 2027"
    title="Help make the chaos possible."
    intro="PlanetHike is looking for partners who can make a city more useful, welcoming or memorable — without swallowing the experience. The walk stays participant-first."
    bullets={['City support','Team participation','In-kind help','Cause collaboration']}
    sections={[
      {heading:'Support a city',body:'A useful local partner may help with a venue touchpoint, route-day logistics, water, local reach, volunteer support or other practical needs. The exact need will depend on the confirmed city plan.'},
      {heading:'Bring your people',body:'Companies, clubs, schools and communities can join the experience as groups. The goal is participation, not putting everybody into a branded uniform.'},
      {heading:'Contribute something useful',body:'In-kind support can be more valuable than another logo. If you can solve a real event-day need in one or more cities, tell us what you can provide and where.'},
      {heading:'Partner on the cause',body:'PlanetHike plans to connect official Chaos Fan sales to a human-impact mission. Any cause partnership, contribution amount and money flow will be published only after the arrangement is verified.'},
      {heading:'Help tell the story',body:'Media, creators and community organisations can help people understand the visual ritual and the city experience. We are interested in reach that fits the idea rather than attention at any cost.'},
      {heading:'What we protect',body:'The Chaos Walk should still feel like PlanetHike: two different shoes, off colours, 10,000 steps, local personality and room for participants to be the main characters. Partnership should strengthen that experience, not crowd it out.'}
    ]}
    faq={[
      {q:'Are sponsorship packages available?',a:'PlanetHike is discussing partnerships, but public packages and pricing are not being presented as final until the relevant city and event needs are confirmed.'},
      {q:'Can a company join without becoming a sponsor?',a:'Yes. Companies can participate as teams without becoming commercial partners.'},
      {q:'Can we support only one city?',a:'Yes. Local support can make sense when it solves a real need for a confirmed city.'}
    ]}
    ctaLabel="Talk to PlanetHike"
    ctaHref="/contact"
    secondaryLabel="Bring a company team"
    secondaryHref="/companies"
    relatedLinks={[
      {href:'/city-leads',label:'Meet the City Lead model'},
      {href:'/the-cause',label:'Understand the cause direction'},
      {href:'/the-chaos-walk',label:'See the participant experience'}
    ]}
  />;
}
