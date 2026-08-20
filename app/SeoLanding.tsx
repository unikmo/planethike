import { ArrowRight, CheckCircle2 } from 'lucide-react';

type FAQ = { q: string; a: string };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  bullets?: string[];
  sections?: { heading: string; body: string }[];
  faq?: FAQ[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function SeoLanding({
  eyebrow,
  title,
  intro,
  bullets = [],
  sections = [],
  faq = [],
  ctaLabel = 'Pre-register free',
  ctaHref = '/#join',
  secondaryLabel = 'Explore The Chaos Walk',
  secondaryHref = '/the-chaos-walk',
}: Props) {
  return (
    <main className="seoPage">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav>
          <a href="/the-chaos-walk">The Walk</a>
          <a href="/10000-step-challenge">10,000 Steps</a>
          <a href="/cities">Cities</a>
          <a href="/companies">Companies</a>
          <a href="/guides/how-many-miles-is-10000-steps">Guides</a>
        </nav>
        <a className="seoHeaderCta" href="/#join">Pre-register</a>
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="seoLead">{intro}</p>
          <div className="seoActions">
            <a className="seoPrimary" href={ctaHref}>{ctaLabel} <ArrowRight size={18}/></a>
            <a className="seoSecondary" href={secondaryHref}>{secondaryLabel} <ArrowRight size={18}/></a>
          </div>
        </div>
        <aside className="seoHeroCard">
          <span>MAY 2027 · WORLDWIDE</span>
          <strong>10,000 STEPS.<br/>TWO DIFFERENT SHOES.<br/>ONE CHAOS FAN.</strong>
          <p>Free to join. Built around city-led challenges and a reconstructive surgery mission.</p>
        </aside>
      </section>

      {bullets.length > 0 && (
        <section className="seoProof">
          {bullets.map((item) => <div key={item}><CheckCircle2 size={20}/><span>{item}</span></div>)}
        </section>
      )}

      {sections.length > 0 && (
        <section className="seoSections">
          {sections.map((section, i) => (
            <article key={section.heading}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>
      )}

      {faq.length > 0 && (
        <section className="seoFaq">
          <p className="seoEyebrow">FAQ</p>
          <h2>Questions people ask before joining.</h2>
          <div>
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="seoBottomCta">
        <p>MAKE 10,000 STEPS UNFORGETTABLE.</p>
        <h2>Join The Chaos Walk free.</h2>
        <a href="/#join">Pre-register for May 2027 <ArrowRight size={18}/></a>
      </section>
    </main>
  );
}
