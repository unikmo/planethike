import type { Metadata } from 'next';
import PreregisterForm from '../PreregisterForm';

export const metadata: Metadata = {
  title: 'The Chaos Walk First Access | May 2027 | PlanetHike',
  description: 'Join PlanetHike’s first-access list for The Chaos Walk planned for May 2027. The exact date and confirmed cities will be announced after verification.',
  alternates: { canonical: '/join' },
};

export default function Page() {
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
        <a className="seoHeaderCta" href="/city-leads">Lead your city</a>
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">FIRST ACCESS / MAY 2027</p>
          <h1>Hear it first.</h1>
          <p className="seoLead">Join the early-interest list for The Chaos Walk. This is not a confirmed event registration: PlanetHike will announce the exact date and participating cities only after they are verified.</p>
        </div>
        <aside className="seoHeroCard">
          <span>THE SIGNATURE</span>
          <strong>TWO DIFFERENT SHOES.<br/>ONE CHAOS FAN.<br/>10,000 STEPS.</strong>
          <p>No payment is collected on this page.</p>
        </aside>
      </section>

      <section className="joinSection" style={{ minHeight: 'auto', paddingTop: 70 }}>
        <PreregisterForm />
      </section>
    </main>
  );
}
