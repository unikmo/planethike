import type { Metadata } from 'next';
import MobileMenu from '../MobileMenu';
import PreregisterForm from '../PreregisterForm';

export const metadata: Metadata = {
  title: 'Join The Chaos Walk First-Access List | May 2027 | PlanetHike',
  description: 'Join the free first-access list for The Chaos Walk planned for May 2027. Record your country, city and participation interest; local event confirmation follows later.',
  alternates: { canonical: '/join' },
};

export default function Page() {
  return (
    <main className="seoPage">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/shop">Chaos Fan</a><a href="/city-leads">City Leads</a><a href="/the-cause">The Cause</a></nav>
        <a className="seoHeaderCta" href="/shop">Preview fan</a>
        <MobileMenu />
      </header>
      <section className="seoHero">
        <div>
          <p className="seoEyebrow">FREE FIRST-ACCESS / MAY 2027 / EXACT DATE TBA</p>
          <h1>Join The Chaos Walk first-access list</h1>
          <p className="seoLead">Tell us where you are and how you want to participate. This records demand and gives you launch updates; it does not yet confirm a local city event.</p>
        </div>
        <aside className="seoHeroCard">
          <span>THE SIGNATURE</span>
          <strong>TWO DIFFERENT SHOES.<br/>ONE CHAOS FAN.<br/>10,000 STEPS.</strong>
          <p>Participation is planned to stay free. Merchandise is separate and sales are not open yet.</p>
        </aside>
      </section>
      <section className="joinSection" style={{minHeight:'auto',paddingTop:70}}><PreregisterForm/></section>
    </main>
  );
}
