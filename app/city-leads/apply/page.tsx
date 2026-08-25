import type { Metadata } from 'next';
import CityLeadApplicationForm from '../../CityLeadApplicationForm';
import MobileMenu from '../../MobileMenu';

export const metadata: Metadata = {
  title: 'Apply to Become a City Lead | PlanetHike',
  description: 'Apply to bring The Chaos Walk to your city in May 2027.',
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
          <a href="/shop">Chaos Shop</a>
        </nav>
        <a className="seoHeaderCta" href="/join">Pre-register free</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">CITY LEAD APPLICATION / MAY 2027</p>
          <h1>Tell us why your city needs The Chaos Walk.</h1>
          <p className="seoLead">
            You do not need to be a professional event organiser. You do need to know your city, bring people together and care about making the day safe, welcoming and unforgettable.
          </p>
        </div>
        <aside className="seoHeroCard">
          <span>THE CITY LEAD</span>
          <strong>LOCAL ENERGY.<br/>SMALL CREW.<br/>BIG DAY.</strong>
          <p>Start the application. If it feels like a fit, we’ll work through the next steps with you.</p>
        </aside>
      </section>

      <section style={{ padding: '0 5vw 110px' }}>
        <CityLeadApplicationForm />
      </section>
    </main>
  );
}
