import { ArrowLeft, ArrowRight, CheckCircle2, MapPinned, ShieldCheck, Users } from 'lucide-react';
import MobileMenu from '../MobileMenu';

const steps = [
  ['01', 'Apply', 'Tell us your city, your local connection and why you want to bring The Chaos Walk there.'],
  ['02', 'Meet us', 'We’ll talk through the idea, your local network and what it takes to create a safe, welcoming walk.'],
  ['03', 'Build your crew', 'Bring together a small volunteer team for route, check-in, safety, content, Chaos Drops and local coordination.'],
  ['04', 'Shape the day', 'Choose the route, work through local permissions and accessibility, then add the personality that makes your city yours.'],
  ['05', 'Bring it to life', 'Once the city details are ready, we publish the event and you lead your local Chaos Walk into May 2027.'],
];

export default function CityLeadsPage() {
  return (
    <main>
      <header className="subHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink dark" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
        <MobileMenu />
      </header>

      <section className="subHero cityLeadHero">
        <div className="subHeroInner">
          <p className="sectionKicker">CITY LEADS / MAY 2027</p>
          <h1>YOUR CITY<br/>NEEDS A<br/><em>MISFIT.</em></h1>
          <p className="subLead">You know the streets, the people and the energy. We bring the playbook. Together, we make 10,000 steps look completely different.</p>
          <a className="button buttonDark" href="/city-leads/apply">Apply to lead your city <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="roleStrip">
        <article><MapPinned size={28}/><strong>Shape the local route</strong><span>Choose a walkable route and coordinate local permissions where required.</span></article>
        <article><Users size={28}/><strong>Build your crew</strong><span>Bring together a small volunteer team so the event belongs to the city, not one person.</span></article>
        <article><ShieldCheck size={28}/><strong>Make it welcoming</strong><span>Plan for safety, accessibility, clear roles and a day people want to join again.</span></article>
      </section>

      <section className="processSection">
        <div className="sectionKicker">HOW IT WORKS</div>
        <div className="processIntro">
          <h2>LOCAL ENERGY.<br/>ONE CHAOS WALK.</h2>
          <p>Every city should feel local. The two different shoes, off colours, 10,000 steps and shared fan moment connect it to everyone else.</p>
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
          <p className="sectionKicker light">WHAT WE BRING</p>
          <h2>YOU GET THE<br/>PLAYBOOK.</h2>
        </div>
        <div className="protocolGrid">
          {['Route guidance','Volunteer roles','Safety + incidents','Accessibility','10K Chaos Drops','Chaos Fan ritual','Local media + content','Event-day checklist','Post-event wrap-up'].map(item => (
            <span key={item}><CheckCircle2 size={17}/>{item}</span>
          ))}
        </div>
      </section>

      <section className="leadCta">
        <p>MAY 2027 / CITY LEAD APPLICATIONS</p>
        <h2>START SOMETHING<br/>YOUR CITY REMEMBERS.</h2>
        <a className="button buttonDark" href="/city-leads/apply">Start your City Lead application <ArrowRight size={18}/></a>
        <small>Applying starts the conversation. We’ll work through the local details with you before your city is announced.</small>
      </section>
    </main>
  );
}
