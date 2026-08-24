import { ArrowLeft, ArrowRight, CheckCircle2, MapPinned, ShieldCheck, Users } from 'lucide-react';
import CityLeadForm from '../CityLeadForm';

const steps = [
  ['01', 'Apply', 'Tell us your city, your organising background and the local capacity you could bring to the 2027 Chaos Walk.'],
  ['02', 'Readiness review', 'We review fit, local capacity and basic operational readiness before any city is presented as confirmed.'],
  ['03', 'Build your crew', 'Recruit a small volunteer team for route, check-in, safety, content, challenge stations and local coordination.'],
  ['04', 'Prepare the route', 'Work through route, permissions, accessibility, safety and event-day requirements using the PlanetHike operating pack.'],
  ['05', 'Create the moment', 'Once the city is approved, lead the shared Chaos rituals while keeping the local experience unmistakably yours.'],
];

export default function CityLeadsPage() {
  return (
    <main>
      <header className="subHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink dark" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
      </header>

      <section className="subHero cityLeadHero">
        <div className="subHeroInner">
          <p className="sectionKicker">CITY LEADS / MAY 2027</p>
          <h1>YOUR CITY<br/>NEEDS A<br/><em>STARTER.</em></h1>
          <p className="subLead">PlanetHike is recruiting local people who can turn interest into a safe, well-run city experience. Applying is the first step; a city is only confirmed after readiness review.</p>
          <a className="button buttonDark" href="#apply">Apply to lead your city <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="roleStrip">
        <article><MapPinned size={28}/><strong>Own the local route</strong><span>Identify a walkable route and coordinate local permissions where required.</span></article>
        <article><Users size={28}/><strong>Build the crew</strong><span>Recruit volunteers so one person never carries the whole event.</span></article>
        <article><ShieldCheck size={28}/><strong>Protect the standard</strong><span>Work to the shared safety, challenge, brand, accessibility and incident requirements.</span></article>
      </section>

      <section className="processSection">
        <div className="sectionKicker">HOW IT WORKS</div>
        <div className="processIntro">
          <h2>LOCAL ENERGY.<br/>GLOBAL STANDARD.</h2>
          <p>The 2025 pilot showed that city leadership is the operating constraint to solve first. The 2027 model therefore qualifies local ownership before PlanetHike promotes a city as live.</p>
        </div>
        <div className="processList">
          {steps.map(([n,title,text]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="protocolSection">
        <div>
          <p className="sectionKicker light">THE 2027 OPERATING PACK</p>
          <h2>ONE SHARED<br/>STANDARD.</h2>
        </div>
        <div className="protocolGrid">
          {['Route + permissions','Volunteer roles','Safety + incidents','Accessibility','10K Chaos Drops','Fan ritual + DIY guidance','Local media + content','Event-day checklist','Post-event reporting'].map(item => (
            <span key={item}><CheckCircle2 size={17}/>{item}</span>
          ))}
        </div>
      </section>

      <section className="leadCta" id="apply">
        <p>MAY 2027 / CITY LEAD APPLICATIONS</p>
        <h2>PUT YOUR CITY<br/>IN REVIEW.</h2>
        <CityLeadForm />
      </section>
    </main>
  );
}
