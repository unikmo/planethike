import { ArrowLeft, ArrowRight, CheckCircle2, MapPinned, ShieldCheck, Users } from 'lucide-react';

const steps = [
  ['01', 'Apply', 'Tell us your city, your background, local network and why you want to lead the first Chaos Walk there.'],
  ['02', 'Get reviewed', 'We review local capacity, crew readiness, route/permission awareness, safety and accessibility before any city is confirmed.'],
  ['03', 'Build your crew', 'Recruit a small volunteer team for route, check-in, safety, content, challenge stations and local coordination.'],
  ['04', 'Run the protocol', 'Use the PlanetHike playbook for route planning, permits, safety, accessibility, brand, Chaos Drops and event-day execution.'],
  ['05', 'Confirm the city', 'A city moves from interest to confirmed only when the local operating facts and launch information are ready to publish.'],
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
          <p className="subLead">Every confirmed city needs an approved City Lead—or a small co-lead team—backed by local volunteers and one clear PlanetHike operating protocol.</p>
          <a className="button buttonDark" href="/city-leads/apply">Apply to become a City Lead <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="roleStrip">
        <article><MapPinned size={28}/><strong>Own the local route</strong><span>Choose a walkable route and coordinate local permissions where required.</span></article>
        <article><Users size={28}/><strong>Build the crew</strong><span>Recruit volunteers so one person never carries the whole event.</span></article>
        <article><ShieldCheck size={28}/><strong>Protect the standard</strong><span>Use the shared safety, challenge, brand, accessibility and incident protocol.</span></article>
      </section>

      <section className="processSection">
        <div className="sectionKicker">HOW IT WORKS</div>
        <div className="processIntro">
          <h2>LOCAL ENERGY.<br/>GLOBAL STANDARD.</h2>
          <p>PlanetHike scales through trusted local people, not through a central team pretending every city is already ready.</p>
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
          <p className="sectionKicker light">THE PLANETHIKE PROTOCOL</p>
          <h2>WE GIVE YOU THE<br/>PLAYBOOK.</h2>
        </div>
        <div className="protocolGrid">
          {['Route + permissions','Volunteer roles','Safety + incidents','Accessibility','10K Chaos Drops','Fan ritual + DIY guidance','Local media + content','Event-day checklist','Post-event reporting'].map(item => (
            <span key={item}><CheckCircle2 size={17}/>{item}</span>
          ))}
        </div>
      </section>

      <section className="leadCta">
        <p>MAY 2027 / CITY APPLICATIONS OPEN</p>
        <h2>PUT YOUR CITY<br/>IN THE RUNNING.</h2>
        <a className="button buttonDark" href="/city-leads/apply">Start the City Lead application <ArrowRight size={18}/></a>
        <small>Applying does not confirm a city. PlanetHike reviews local readiness before publishing an event as confirmed.</small>
      </section>
    </main>
  );
}
