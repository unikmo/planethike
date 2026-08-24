import type { Metadata } from 'next';
import MobileMenu from '../MobileMenu';

export const metadata: Metadata = {
  title: 'About PlanetHike | The Chaos Walk',
  description: 'PlanetHike OÜ is building The Chaos Walk, a free 10,000-step social walking experience planned for May 2027.',
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
    description: 'PlanetHike is building The Chaos Walk, a free 10,000-step social walking experience planned for May 2027.',
  };

  return (
    <main className="seoPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}} />
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/shop">Chaos Fan</a><a href="/city-leads">City Leads</a><a href="/guides">Guides</a></nav>
        <a className="seoHeaderCta" href="/join">Join first-access</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">ABOUT PLANETHIKE</p>
          <h1>One brand. One current direction.</h1>
          <p className="seoLead">PlanetHike OÜ is building The Chaos Walk: a free 10,000-step social walking experience planned for May 2027, delivered locally only where the operating facts are ready.</p>
        </div>
        <aside className="seoHeroCard">
          <span>LEGAL ENTITY</span>
          <strong>PLANETHIKE OÜ<br/>ESTONIA</strong>
          <p>Reg. No. 17233027 · Järvevana tee 9, 11314 Tallinn.</p>
        </aside>
      </section>

      <section className="seoSections">
        <article id="history"><span>01</span><h2>The transition</h2><p>PlanetHike previously published an environmental participation model built around Water, Art, Trees and RegreenityCoin. That legacy proposition is not the active direction of this May 2027 build. The current flagship is The Chaos Walk.</p></article>
        <article><span>02</span><h2>The current proposition</h2><p>Free first-access, approximately 10,000 steps, two different shoes, one planned Chaos Fan and shared challenge moments. A city is confirmed only after an approved local lead and operating readiness are in place.</p></article>
        <article id="partners"><span>03</span><h2>Partners and impact</h2><p>No reconstructive-surgery partner is being announced as active in this build. PlanetHike intends to publish the partner, contribution rule, settlement process and reporting standard before any impact-linked merchandise sale opens.</p></article>
        <article><span>04</span><h2>What first-access means</h2><p>The exact May 2027 event date has not yet been announced. Joining first-access records participant demand and gives PlanetHike a way to send confirmed launch information without overstating city readiness.</p></article>
      </section>
    </main>
  );
}
