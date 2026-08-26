import type { Metadata } from 'next';
import ContactForm from '../ContactForm';
import MobileMenu from '../MobileMenu';

export const metadata: Metadata = {
  title: 'Contact PlanetHike | The Chaos Walk',
  description: 'Contact PlanetHike about participant registration, City Leads, partnerships, press, privacy or the Chaos Shop.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact PlanetHike | The Chaos Walk',
    description: 'Questions about walking, leading a city, partnering or the Chaos Shop? Contact PlanetHike.',
    url: 'https://planethike.org/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="seoPage">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/shop">Chaos Shop</a><a href="/city-leads">City Leads</a><a href="/guides">Guides</a></nav>
        <a className="seoHeaderCta" href="/join">Pre-register free</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">CONTACT / PLANETHIKE</p>
          <h1>Talk to us.</h1>
          <p className="seoLead">Walking, organising, partnering, press, privacy or wondering about the Chaos Shop? Send the right question to one place.</p>
        </div>
        <aside className="seoHeroCard">
          <span>DIRECT EMAIL</span>
          <strong>HELLO@<br/>PLANETHIKE.ORG</strong>
          <p>Do not send payment-card details, passwords, identity documents or sensitive health information through the contact form or by email.</p>
        </aside>
      </section>

      <section style={{ padding: '0 5vw 110px' }}>
        <ContactForm />
      </section>

      <section className="seoProof">
        <div><span><strong>Participant registration</strong><br/>Use the form and choose “Participant registration”.</span></div>
        <div><span><strong>City Leads</strong><br/>For applications, use the dedicated City Lead form.</span></div>
        <div><span><strong>Partnerships + press</strong><br/>Choose the matching topic so we can triage it correctly.</span></div>
        <div><span><strong>Privacy requests</strong><br/>Choose “Privacy / data request” or email us directly.</span></div>
      </section>
    </main>
  );
}
