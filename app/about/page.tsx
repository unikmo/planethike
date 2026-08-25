import type { Metadata } from 'next';
import MobileMenu from '../MobileMenu';

export const metadata: Metadata = {
  title: 'About PlanetHike | The Chaos Walk',
  description: 'PlanetHike is the home of The Chaos Walk: 10,000 steps, two different shoes, off colours, one Chaos Fan and one unforgettable day in your city.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://planethike.org/#organization',
    name: 'PlanetHike',
    legalName: 'PlanetHike OÜ',
    url: 'https://planethike.org',
    email: 'hello@planethike.org',
    identifier: '17233027',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Järvevana tee 9',
      postalCode: '11314',
      addressLocality: 'Tallinn',
      addressCountry: 'EE',
    },
    description: 'PlanetHike is the home of The Chaos Walk, a free 10,000-step social walking experience planned for May 2027.',
  };

  return (
    <main className="seoPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}} />
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/shop">Chaos Shop</a><a href="/city-leads">City Leads</a><a href="/guides">Guides</a></nav>
        <a className="seoHeaderCta" href="/join">Pre-register free</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">ABOUT PLANETHIKE</p>
          <h1>Walking was never supposed to look this normal.</h1>
          <p className="seoLead">PlanetHike is the home of The Chaos Walk: 10,000 steps, two different shoes, off colours, one Chaos Fan and a city full of people choosing not to blend in.</p>
        </div>
        <aside className="seoHeroCard">
          <span>PLANETHIKE OÜ</span>
          <strong>TALLINN.<br/>GLOBAL IDEA.<br/>LOCAL CHAOS.</strong>
          <p>Reg. No. 17233027 · Järvevana tee 9, 11314 Tallinn, Estonia.</p>
        </aside>
      </section>

      <section className="seoSections">
        <article><span>01</span><h2>Why PlanetHike</h2><p>Walking is one of the simplest things people can do together. PlanetHike makes it harder to forget: a bold visual ritual, a shared distance and a day designed to create stories instead of another ordinary step count.</p></article>
        <article><span>02</span><h2>The ritual</h2><p>Wear two unmistakably different shoes. Clash your colours. Walk around 10,000 steps. Carry the Chaos Fan if you have one. Everything else is yours.</p></article>
        <article><span>03</span><h2>City by city</h2><p>The Chaos Walk comes alive through local City Leads and volunteer crews. Each city brings its own route and personality while sharing the same global visual code.</p></article>
        <article><span>04</span><h2>Fun that gives back</h2><p>The event should be worth joining even before the cause is mentioned. PlanetHike also plans a meaningful contribution from official Chaos Fan sales to a human-impact mission, with the partner and exact contribution published before sales open.</p></article>
      </section>
    </main>
  );
}
