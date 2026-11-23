import type { ReactNode } from 'react';
import MobileMenu from './MobileMenu';

type Section = { heading: string; body: ReactNode };
type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({ eyebrow, title, intro, sections }: Props) {
  return (
    <main className="phInfoPage">
      <header className="seoHeader">
        <a className="brand" href="/" aria-label="PlanetHike home">PLANET<span>HIKE</span></a>
        <nav aria-label="Primary navigation">
          <a href="/the-chaos-walk">The Walk</a>
          <a href="/cities">Cities</a>
          <a href="/shop">Chaos Fan</a>
          <a href="/city-leads">City Leads</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="seoHeaderCta" href="/join">Join free</a>
        <MobileMenu />
      </header>

      <div className="phInfoContent">
        <div className="phInfoIntro">
          <p className="phInfoEyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="phInfoLead">{intro}</p>
        </div>
        <div className="phInfoSections">
          {sections.map((section) => (
            <section className="phInfoSection" key={section.heading}>
              <h2>{section.heading}</h2>
              <div className="phInfoBody">{section.body}</div>
            </section>
          ))}
        </div>
      </div>
      <footer className="phInfoFooter">
        <a className="phInfoFooterBrand" href="/">PLANETHIKE</a>
        <nav aria-label="Footer navigation">
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/imprint">Imprint</a>
        </nav>
        <small>© {new Date().getFullYear()} PlanetHike</small>
      </footer>
    </main>
  );
}
