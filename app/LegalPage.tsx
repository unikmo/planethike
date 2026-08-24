import type { ReactNode } from 'react';
import MobileMenu from './MobileMenu';

type Section = { heading: string; body: ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  draft?: boolean;
};

export default function LegalPage({ eyebrow, title, intro, sections, draft = false }: Props) {
  return (
    <main className="seoPage">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/shop">Chaos Fan</a><a href="/city-leads">City Leads</a><a href="/guides">Guides</a></nav>
        <a className="seoHeaderCta" href="/join">Join first-access</a>
        <MobileMenu />
      </header>

      <section className="seoHero" style={{alignItems:'start'}}>
        <div>
          <p className="seoEyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="seoLead">{intro}</p>
        </div>
        <aside className="seoHeroCard">
          <span>PLANETHIKE OÜ</span>
          <strong>REG. NO.<br/>17233027</strong>
          <p>Järvevana tee 9, 11314 Tallinn, Estonia · hello@planethike.org</p>
        </aside>
      </section>

      {draft && (
        <section style={{margin:'0 5vw 40px',padding:'18px 22px',background:'#fff1a8',border:'1px solid #111',fontWeight:700,lineHeight:1.5}}>
          STAGING DRAFT — This page reflects the current target flows but still requires final legal review before production release.
        </section>
      )}

      <section className="seoSections">
        {sections.map((section, index) => (
          <article key={section.heading}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{section.heading}</h2>
            <div style={{fontFamily:"'Instrument Serif',serif",fontSize:22,lineHeight:1.25}}>{section.body}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
