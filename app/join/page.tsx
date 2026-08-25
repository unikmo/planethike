import type { Metadata } from 'next';
import MobileMenu from '../MobileMenu';
import PreregisterForm from '../PreregisterForm';

export const metadata: Metadata = {
  title: 'Pre-register for The Chaos Walk | May 2027 | PlanetHike',
  description: 'Pre-register free for The Chaos Walk in May 2027. Choose your city and be first to get the event details.',
  alternates: { canonical: '/join' },
};

export default function Page() {
  return (
    <main className="seoPage">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/shop">Chaos Shop</a><a href="/city-leads">City Leads</a><a href="/the-cause">The Cause</a></nav>
        <a className="seoHeaderCta" href="/shop">Chaos Shop</a>
        <MobileMenu />
      </header>
      <section className="seoHero">
        <div>
          <p className="seoEyebrow">MAY 2027 · PRE-REGISTRATION OPEN</p>
          <h1>Put your city on the Chaos Walk map.</h1>
          <p className="seoLead">Choose your city, tell us how you want to join and we’ll send the exact date and local event details as they are announced.</p>
        </div>
        <aside className="seoHeroCard">
          <span>THE SIGNATURE</span>
          <strong>10,000 STEPS.<br/>TWO DIFFERENT SHOES.<br/>OFF COLOURS.</strong>
          <p>Add the Chaos Fan. Bring your people. Make the day impossible to mistake for an ordinary walk.</p>
        </aside>
      </section>
      <section className="joinSection" style={{minHeight:'auto',paddingTop:70}}><PreregisterForm/></section>
    </main>
  );
}
