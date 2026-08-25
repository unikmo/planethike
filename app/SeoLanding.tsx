import { ArrowRight, CheckCircle2 } from 'lucide-react';
import MobileMenu from './MobileMenu';

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

function getVariant(title: string, eyebrow: string) {
  const value = `${title} ${eyebrow}`.toLowerCase();
  if (value.includes('company') || value.includes('workplace') || value.includes('corporate')) return 'business';
  if (value.includes('cause') || value.includes('charity') || value.includes('surgery') || value.includes('impact')) return 'cause';
  if (value.includes('city') || value.includes('group')) return 'community';
  if (value.includes('mile') || value.includes('km') || value.includes('calorie') || value.includes('training') || value.includes('how ') || value.includes('guide')) return 'guide';
  return 'event';
}

export default function SeoLanding({ eyebrow, title, intro, bullets = [], sections = [], faq = [], ctaLabel = 'Pre-register free', ctaHref = '/#join', secondaryLabel = 'Explore The Chaos Walk', secondaryHref = '/the-chaos-walk' }: Props) {
  const variant = getVariant(title, eyebrow);
  const visualLabel = variant === 'business'
    ? 'ONE TEAM. 10,000 STEPS. ZERO BORING.'
    : variant === 'cause'
      ? 'WALK BOLD. GIVE BACK. SEE THE IMPACT.'
      : variant === 'community'
        ? 'ONE CITY. ONE CREW. ONE VERY VISIBLE WALK.'
        : variant === 'guide'
          ? 'THE USEFUL ANSWER — THEN A BETTER REASON TO WALK IT.'
          : '10,000 STEPS. TWO DIFFERENT SHOES. ONE CHAOS FAN.';

  return (
    <main className={`seoPage seo-${variant}`}>
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/10000-step-challenge">10,000 Steps</a><a href="/cities">Cities</a><a href="/shop">Chaos Shop</a><a href="/guides">Guides</a></nav>
        <a className="seoHeaderCta" href="/#join">Pre-register free</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div className="seoHeroCopy">
          <p className="seoEyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="seoLead">{intro}</p>
          <div className="seoActions"><a className="seoPrimary" href={ctaHref}>{ctaLabel} <ArrowRight size={18}/></a><a className="seoSecondary" href={secondaryHref}>{secondaryLabel} <ArrowRight size={18}/></a></div>
        </div>
        <div className="seoVisual" role="img" aria-label="Colourfully dressed PlanetHike participant wearing intentionally mismatched shoes">
          <div className="seoVisualCaption"><span>{variant.toUpperCase()}</span><strong>{visualLabel}</strong></div>
        </div>
      </section>

      {bullets.length > 0 && <section className="seoProof">{bullets.map((item) => <div key={item}><CheckCircle2 size={20}/><span>{item}</span></div>)}</section>}

      {sections.length > 0 && (
        <section className="seoStory">
          {sections.map((section, i) => (
            <article key={section.heading} className={`seoStoryBlock seoStoryBlock${i + 1}`}>
              <div className="seoStoryNumber">{String(i + 1).padStart(2, '0')}</div>
              <div><h2>{section.heading}</h2><p>{section.body}</p></div>
              {i === 0 && <div className="seoStoryImage" aria-hidden="true" />}
            </article>
          ))}
        </section>
      )}

      {faq.length > 0 && <section className="seoFaq"><p className="seoEyebrow">FAQ</p><h2>What people want to know.</h2><div>{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>}

      <section className="seoBottomCta"><p>MAY 2027 · FREE PRE-REGISTRATION</p><h2>Make 10,000 steps unforgettable.</h2><a href="/#join">Pre-register for The Chaos Walk <ArrowRight size={18}/></a></section>
    </main>
  );
}
