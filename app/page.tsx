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
          <a href="/shop">Chaos Fan</a>
          <a href="/about">About</a>
        </nav>
        <a className="luxHeaderCta" href="#join">Pre-register free</a>
        <MobileMenu />
      </header>

      <section className="luxHero" id="top">
        <div className="luxHeroMedia" role="img" aria-label="PlanetHike participant holding a colourful hand fan and wearing two deliberately different shoes" />
        <div className="luxHeroCopy">
          <p className="luxEyebrow">THE CHAOS WALK · MAY 2027</p>
          <h1>Two different shoes.<br/><span>Zero normal.</span></h1>
          <p className="luxLead">You. Two different shoes. Off colours. Your city. 10,000 steps. One day to look gloriously wrong.</p>
          <div className="luxHeroActions">
            <a className="luxButton luxButtonDark" href="#join">Pre-register free <ArrowRight size={17}/></a>
            <a className="luxButton luxButtonGhost" href="/shop">Meet the Chaos Fan <ArrowRight size={17}/></a>
          </div>
          <p className="luxMeta">MAY 2027 · exact date and local city status announced when confirmed</p>
        </div>
      </section>

      <section className="luxPathGrid" aria-label="Ways to take part">
        <a href="#join" className="luxPath">
          <span className="luxPathIcon"><Footprints size={23}/></span>
          <div><small>01 · PARTICIPATE</small><strong>Join the walk</strong><p>10,000 steps. Free registration. Come dressed off.</p></div>
          <ArrowRight size={19}/>
        </a>
        <a href="/shop" className="luxPath">
          <span className="luxPathIcon luxPathIconBlue"><Fan size={23}/></span>
          <div><small>02 · THE SHARED SIGNAL</small><strong>Bring the Chaos Fan</strong><p>The object you’ll see lifted across every city.</p></div>
          <ArrowRight size={19}/>
        </a>
        <a href="/city-leads" className="luxPath">
          <span className="luxPathIcon luxPathIconLilac"><Users size={23}/></span>
          <div><small>03 · LOCAL ACTION</small><strong>Lead your city</strong><p>Be the reason The Chaos Walk happens there.</p></div>
          <ArrowRight size={19}/>
        </a>
      </section>

      <section className="luxSignature">
        <div className="luxSignatureCopy">
          <p className="luxEyebrow">THE SIGNATURE</p>
          <h2>Not a uniform.<br/>Not a costume.<br/><em>A visible choice.</em></h2>
          <p>PlanetHike should be recognisable from across the street without making everyone look the same. The shared code is simple: two obviously different shoes. The rest is your version of off.</p>
          <a className="luxTextLink" href="/the-chaos-walk">See how The Chaos Walk works <ArrowRight size={16}/></a>
        </div>
        <div className="luxSignatureImage" role="img" aria-label="Close-up of deliberately mismatched teal and orange shoes" />
      </section>

      <section className="luxNoUniform">
        <div className="luxNoUniformHead">
          <p className="luxEyebrow">ONE RITUAL. THOUSANDS OF VERSIONS.</p>
          <h2>Normal sits this one out.</h2>
          <p>You do not buy a PlanetHike uniform. You show up as your own misfit.</p>
        </div>
        <div className="luxPrinciples">
          <article><span>01</span><h3>Dress off.</h3><p>Clash it. Bright, wrong, unexpected. If it looks too coordinated, break it. Normal is the one thing we are not asking for.</p></article>
          <article><span>02</span><h3>Make the shoes unmistakable.</h3><p>Two genuinely different shoes: colour, silhouette or style. Deliberate from across the street — but both safe and comfortable for 10,000 steps.</p></article>
          <article><span>03</span><h3>Bring the Chaos Fan.</h3><p>The shared signal of the day. Strongly encouraged, highly visible and part of the city-wide ritual — while the walk itself remains free.</p></article>
        </div>
      </section>

      <section className="luxFanSection">
        <div className="luxFanMedia" role="img" aria-label="Participant holding the colourful PlanetHike hand fan" />
        <div className="luxFanCopy">
          <p className="luxEyebrow luxEyebrowLight">THE CHAOS FAN · EDITION 001</p>
          <h2>A hand fan.<br/>The shared signal.</h2>
          <p>Carry it. Lift it. Find it in every city-wide photograph. The Chaos Fan is the object that connects thousands of completely different looks — and official Fan sales are planned to help fund PlanetHike and a verified cause contribution.</p>
          <div className="luxStatus"><span className="luxStatusDot"/> Edition 001 opens before the walk</div>
          <a className="luxButton luxButtonLight" href="/shop">Preview Edition 001 <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="luxCities">
        <div className="luxCitiesIntro">
          <p className="luxEyebrow">GLOBAL INTEREST · LOCAL READINESS</p>
          <h2>The Chaos Walk starts with people raising their hand.</h2>
          <p>These locations show where we want to hear from walkers and organisers; they are not yet confirmed events. A city goes live only when local leadership, route and operating readiness are in place.</p>
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
          <p>City Leads build the local crew, help prepare the route and bring PlanetHike’s event protocol to life. Applying does not automatically confirm a city.</p>
          <div className="luxLeadPoints">
            <span><MapPin size={18}/> Local route + readiness</span>
            <span><Users size={18}/> Small volunteer crew</span>
            <span><HeartHandshake size={18}/> One shared operating standard</span>
          </div>
          <a className="luxButton luxButtonDark" href="/city-leads/apply">Apply to lead your city <ArrowRight size={17}/></a>
        </div>
        <div className="luxLeadMedia" role="img" aria-label="PlanetHike community members wearing clearly mismatched shoes and holding colourful hand fans" />
      </section>

      <section className="luxCause">
        <div><Sparkles size={27}/><strong>Free to join.</strong><p>Merchandise is never an entry ticket.</p></div>
        <div><Globe2 size={27}/><strong>Global idea. Local proof.</strong><p>City status is published only when local readiness is real.</p></div>
        <div><HeartHandshake size={27}/><strong>Fun that gives back.</strong><p>The cause partner and exact Fan contribution will be published before sales open.</p></div>
      </section>

      <section className="luxJoin" id="join">
        <div className="luxJoinHead">
          <p className="luxEyebrow">MAY 2027 · PRE-REGISTRATION OPEN</p>
          <h2>Walk different.</h2>
          <p>Choose your city. Start thinking about the two shoes. We’ll send the exact date and confirmed local details as they are announced.</p>
        </div>
        <div className="luxJoinForm"><PreregisterForm /></div>
      </section>

      <footer className="luxFooter">
        <div><a className="luxBrand luxFooterBrand" href="#top">PLANETHIKE</a><p>Two different shoes. Zero normal.</p></div>
        <div className="luxFooterLinks"><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/city-leads">City Leads</a><a href="/shop">Chaos Shop</a><a href="/partners">Partners</a><a href="/guides">Guides</a><a href="/faq">FAQ</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/imprint">Imprint</a></div>
        <small>© 2026 PlanetHike · May 2027 launch details remain subject to confirmation.</small>
      </footer>
    </main>
  );
}
