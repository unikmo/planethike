import {
  ArrowRight,
  Fan,
  Footprints,
  Globe2,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import MobileMenu from './MobileMenu';
import PreregisterForm from './PreregisterForm';

const cityNames = ['Berlin', 'London', 'Paris', 'Málaga', 'New York', 'Cape Town', 'Sydney', 'Dubai'];

export default function Home() {
  return (
    <main className="luxHome">
      <header className="luxHeader">
        <a className="luxBrand" href="#top" aria-label="PlanetHike home">PLANETHIKE</a>
        <nav className="luxNav" aria-label="Primary navigation">
          <a href="/the-chaos-walk">The Walk</a>
          <a href="/cities">Cities</a>
          <a href="/city-leads">City Leads</a>
          <a href="/shop">Chaos Shop</a>
          <a href="/about">About</a>
        </nav>
        <a className="luxHeaderCta" href="#join">Pre-register free</a>
        <MobileMenu />
      </header>

      <section className="luxHero" id="top">
        <div className="luxHeroMedia" role="img" aria-label="PlanetHike participant holding a colourful hand fan and wearing two deliberately different shoes" />
        <div className="luxHeroCopy">
          <p className="luxEyebrow">THE CHAOS WALK · MAY 2027</p>
          <h1>Two different shoes.<br/><span>Your own everything.</span></h1>
          <p className="luxLead">10,000 steps. Off colours. Two different shoes. One Chaos Fan. Your city. One day to look gloriously wrong.</p>
          <div className="luxHeroActions">
            <a className="luxButton luxButtonDark" href="#join">Pre-register free <ArrowRight size={17}/></a>
            <a className="luxButton luxButtonGhost" href="/shop">Explore the Chaos Shop <ArrowRight size={17}/></a>
          </div>
          <p className="luxMeta">MAY 2027 · exact date coming soon</p>
        </div>
      </section>

      <section className="luxPathGrid" aria-label="Ways to take part">
        <a href="#join" className="luxPath">
          <span className="luxPathIcon"><Footprints size={23}/></span>
          <div><small>01 · WALK</small><strong>10,000 steps</strong><p>Pre-register free. Bring friends. Make your city count.</p></div>
          <ArrowRight size={19}/>
        </a>
        <a href="/shop" className="luxPath">
          <span className="luxPathIcon luxPathIconBlue"><Fan size={23}/></span>
          <div><small>02 · THE SHARED OBJECT</small><strong>Bring the Chaos Fan</strong><p>Edition 001 · €19.99 when sales open. The object everyone carries.</p></div>
          <ArrowRight size={19}/>
        </a>
        <a href="/city-leads" className="luxPath">
          <span className="luxPathIcon luxPathIconLilac"><Users size={23}/></span>
          <div><small>03 · YOUR CITY</small><strong>Lead the chaos</strong><p>Be the person who brings the walk to your community.</p></div>
          <ArrowRight size={19}/>
        </a>
      </section>

      <section className="luxSignature">
        <div className="luxSignatureCopy">
          <p className="luxEyebrow">THE SIGNATURE</p>
          <h2>Not a uniform.<br/>Not a costume.<br/><em>A visible choice.</em></h2>
          <p>The shoes are the PlanetHike code. Everything else should look deliberately off: colour clashes, unexpected combinations and your own style turned up for one day. If it looks too normal, break it.</p>
          <a className="luxTextLink" href="/the-chaos-walk">See how The Chaos Walk works <ArrowRight size={16}/></a>
        </div>
        <div className="luxSignatureImage" role="img" aria-label="Close-up of deliberately mismatched teal and orange shoes" />
      </section>

      <section className="luxNoUniform">
        <div className="luxNoUniformHead">
          <p className="luxEyebrow">ONE DAY · NO NORMAL</p>
          <h2>Dress off.</h2>
          <p>If you normally blend in, this is the day you do not.</p>
        </div>
        <div className="luxPrinciples">
          <article><span>01</span><h3>Clash your colours.</h3><p>Bright, wrong, unexpected. Mix pieces that should not work together. If it looks too coordinated, break it.</p></article>
          <article><span>02</span><h3>Make the shoes unmistakable.</h3><p>Two different colours, silhouettes or styles. The mismatch should read instantly from across the street.</p></article>
          <article><span>03</span><h3>Bring the Chaos Fan.</h3><p>The colourful hand fan is the shared symbol of the day. You can walk without it, but you will want it in the photograph.</p></article>
        </div>
      </section>

      <section className="luxFanSection">
        <div className="luxFanMedia" role="img" aria-label="Participant holding the colourful PlanetHike hand fan" />
        <div className="luxFanCopy">
          <p className="luxEyebrow luxEyebrowLight">THE CHAOS FAN · EDITION 001</p>
          <h2>The object<br/>of the day.</h2>
          <p>A real folding hand fan — no tech. Open it for the city-wide fan shot, carry it through the walk and keep it as Edition 001 afterwards. The walk stays free; the fan becomes part of the ritual.</p>
          <div className="luxStatus"><span className="luxStatusDot"/> €19.99 when Edition 001 goes on sale</div>
          <a className="luxButton luxButtonLight" href="/shop">Explore the Chaos Shop <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="luxCities">
        <div className="luxCitiesIntro">
          <p className="luxEyebrow">YOUR CITY · MAY 2027</p>
          <h2>Where should the chaos happen?</h2>
          <p>Pre-register and tell us where you want to walk. When a local City Lead, crew and route are ready, we’ll announce your city’s event details.</p>
        </div>
        <div className="luxCityNames" aria-label="Example interest locations">
          {cityNames.map((city) => <span key={city}>{city}</span>)}
          <a href="#join">Your city? <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="luxLead">
        <div className="luxLeadCopy">
          <p className="luxEyebrow">BE THE REASON IT HAPPENS</p>
          <h2>Lead your city.</h2>
          <p>You know the streets, the people and the energy. We bring the playbook. City Leads build the local crew, shape the route and make the day feel unmistakably PlanetHike.</p>
          <div className="luxLeadPoints">
            <span><MapPin size={18}/> Shape the local route</span>
            <span><Users size={18}/> Build a small volunteer crew</span>
            <span><HeartHandshake size={18}/> Bring the global ritual to life</span>
          </div>
          <a className="luxButton luxButtonDark" href="/city-leads/apply">Apply to lead your city <ArrowRight size={17}/></a>
        </div>
        <div className="luxLeadMedia" role="img" aria-label="PlanetHike community members in off-colour outfits and intentionally mismatched shoes" />
      </section>

      <section className="luxCause">
        <div><Sparkles size={27}/><strong>Free to join.</strong><p>The walk stays free. Merchandise helps fund the experience.</p></div>
        <div><Globe2 size={27}/><strong>Global idea. Local energy.</strong><p>Each city brings its own people, route and personality.</p></div>
        <div><HeartHandshake size={27}/><strong>Fun that gives back.</strong><p>We’ll publish our cause partner and the exact Fan contribution before sales open.</p></div>
      </section>

      <section className="luxJoin" id="join">
        <div className="luxJoinHead">
          <p className="luxEyebrow">MAY 2027 · PRE-REGISTRATION OPEN</p>
          <h2>Walk different.</h2>
          <p>Your city. 10,000 steps. Two different shoes. Off colours. One very visible day.</p>
        </div>
        <div className="luxJoinForm"><PreregisterForm /></div>
      </section>

      <footer className="luxFooter">
        <div><a className="luxBrand luxFooterBrand" href="#top">PLANETHIKE</a><p>Two different shoes. Your own everything.</p></div>
        <div className="luxFooterLinks"><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/city-leads">City Leads</a><a href="/shop">Chaos Shop</a><a href="/faq">FAQ</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/imprint">Imprint</a></div>
        <small>© 2026 PlanetHike · The Chaos Walk · May 2027.</small>
      </footer>
    </main>
  );
}
