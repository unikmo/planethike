import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import MobileMenu from '../MobileMenu';

export const metadata: Metadata = {
  title: 'Walking Challenge Guides | 10,000 Steps, Training & Ideas | PlanetHike',
  description: 'Practical walking challenge guides: 10,000-step distances, timing, calories, training plans, team names, walking challenge ideas and group-organising tips.',
  alternates: { canonical: '/guides' },
};

const guides = [
  ['How many miles is 10,000 steps?', '/guides/how-many-miles-is-10000-steps', 'Distance'],
  ['How long does it take to walk 10,000 steps?', '/guides/how-long-to-walk-10000-steps', 'Timing'],
  ['10,000 steps in kilometres', '/guides/10000-steps-in-km', 'Distance'],
  ['Calories burned walking 10,000 steps', '/guides/10000-steps-calories', 'Fitness'],
  ['10K walk training plan', '/guides/10k-walk-training-plan', 'Training'],
  ['Walking challenge team names', '/guides/walking-challenge-team-names', 'Teams'],
  ['Walking challenge ideas', '/guides/walking-challenge-ideas', 'Ideas'],
  ['How to organise a charity walk', '/guides/how-to-organize-a-charity-walk', 'Organising'],
  ['How to start a walking group', '/guides/how-to-start-a-walking-group', 'Groups'],
  ['Walking scavenger hunt ideas', '/guides/walking-scavenger-hunt', 'Fun'],
];

export default function GuidesPage() {
  return (
    <main className="seoPage guidesIndex">
      <header className="seoHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <nav>
          <a href="/the-chaos-walk">The Walk</a>
          <a href="/10000-step-challenge">10,000 Steps</a>
          <a href="/cities">Cities</a>
          <a href="/companies">Companies</a>
          <a href="/guides">Guides</a>
        </nav>
        <a className="seoHeaderCta" href="/#join">Join first-access</a>
        <MobileMenu />
      </header>

      <section className="seoHero">
        <div>
          <p className="seoEyebrow">WALKING CHALLENGE RESOURCE HUB</p>
          <h1>Make every step count.</h1>
          <p className="seoLead">Straightforward answers, training help and ideas for people planning a 10,000-step challenge, a 10K walk or a group walking event.</p>
        </div>
        <aside className="seoHeroCard">
          <span>MAY 2027 · EXACT DATE TO BE ANNOUNCED</span>
          <strong>READ.<br/>PLAN.<br/>THEN MAKE IT CHAOS.</strong>
          <p>Use the guides, then join PlanetHike’s free first-access list for The Chaos Walk.</p>
          <a className="seoPrimary" href="/#join">Join first-access free <ArrowRight size={18}/></a>
        </aside>
      </section>

      <section className="guideGrid" aria-label="Walking guides">
        {guides.map(([title, href, label], index) => (
          <a className="guideCard" href={href} key={href}>
            <span>{String(index + 1).padStart(2, '0')} · {label}</span>
            <h2>{title}</h2>
            <div>Read guide <ArrowRight size={17}/></div>
          </a>
        ))}
      </section>

      <section className="seoBottomCta">
        <p>10,000 STEPS DO NOT HAVE TO FEEL ORDINARY.</p>
        <h2>Join The Chaos Walk first-access.</h2>
        <a href="/#join">Join the May 2027 first-access list <ArrowRight size={18}/></a>
      </section>
    </main>
  );
}
