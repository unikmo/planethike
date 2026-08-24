import type { Metadata } from 'next';
import CityLeadApplicationForm from '../../CityLeadApplicationForm';
import MobileMenu from '../../MobileMenu';

export const metadata: Metadata = {
  title: 'Apply to Become a City Lead | PlanetHike',
  description: 'Apply to lead a future Chaos Walk in your city. PlanetHike reviews local capacity, safety, accessibility and crew readiness before confirming a city.',
  alternates: { canonical: '/city-leads/apply' },
  robots: { index: false, follow: true },
};

export default function CityLeadApplyPage() {
  return (
    <main className="seoPage">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav>
          <a href="/the-chaos-walk">The Walk</a>
          <a href="/cities">Cities</a>
          <a href="/city-leads">City Leads</a>
          <a href="/guides">Guides</a>
        </nav>
        <a className="seoHeaderCta" href="/join">Join first-access</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">CITY LEAD APPLICATION / MAY 2027</p>
          <h1>Start the conversation for your city.</h1>
          <p className="seoLead">
            PlanetHike does not confirm a city from a name on a list. We review the person, local network, crew readiness, route/permission awareness, safety and accessibility before a city can move toward confirmed status.
          </p>
        </div>
        <aside className="seoHeroCard">
          <span>WHAT APPROVAL MEANS</span>
          <strong>LOCAL OWNER.<br/>SMALL CREW.<br/>SHARED STANDARD.</strong>
          <p>Application first. Review second. City confirmation only when the local operating facts are real.</p>
        </aside>
      </section>

      <section style={{ padding: '0 5vw 110px' }}>
        <CityLeadApplicationForm />
      </section>
    </main>
  );
}
