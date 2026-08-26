import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPinned, ShieldCheck, Users } from 'lucide-react';
import MobileMenu from '../MobileMenu';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Lead The Chaos Walk in Your City | PlanetHike',
  description: 'Apply to become a PlanetHike City Lead and bring The Chaos Walk — 10,000 steps, two different shoes and off colours — to your city in May 2027.',
  alternates: { canonical: '/city-leads' },
  openGraph: {
    title: 'Lead The Chaos Walk in Your City | PlanetHike',
    description: 'Know your city and know how to bring people together? Apply to lead a local Chaos Walk in May 2027.',
    url: 'https://planethike.org/city-leads',
    type: 'website',
  },
};

const playbook = [
  'Route guidance',
  'Volunteer roles',
  'Safety + incidents',
  'Accessibility',
  '10K Chaos Drops',
  'Chaos Fan ritual',
  'Local media + content',
  'Event-day checklist',
  'Post-event wrap-up',
];

export default function CityLeadsPage() {
  return (
    <main>
      <header className="subHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink dark" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
        <MobileMenu />
      </header>

      <section className={`subHero cityLeadHero ${styles.hero}`}>
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
          <article><span>01</span><h3>Apply</h3><p>Tell us your city, your local connection and why you want to bring The Chaos Walk there.</p></article>
          <article><span>02</span><h3>Meet us</h3><p>We’ll talk through the idea, your local network and what it takes to create a safe, welcoming walk.</p></article>
          <article><span>03</span><h3>Build your crew</h3><p>Bring together a small volunteer team for route, check-in, safety, content, Chaos Drops and local coordination.</p></article>
          <article><span>04</span><h3>Shape the day</h3><p>Choose the route, work through local permissions and accessibility, then add the personality that makes your city yours.</p></article>
          <article><span>05</span><h3>Bring it to life</h3><p>Once the city details are ready, we publish the event and you lead your local Chaos Walk into May 2027.</p></article>
        </div>
      </section>

      <section className="protocolSection">
        <div><p className="sectionKicker light">WHAT WE BRING</p><h2>YOU GET THE<br/>PLAYBOOK.</h2></div>
        <div className="protocolGrid">{playbook.map((item)=><span key={item}><CheckCircle2 size={17}/>{item}</span>)}</div>
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
