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
        <a className="luxHeaderCta" href="#join">Join first-access free</a>
        <MobileMenu />
      </header>

      <section className="luxHero" id="top">
        <div className="luxHeroMedia" role="img" aria-label="PlanetHike participant holding a colourful hand fan and wearing two deliberately different shoes" />
        <div className="luxHeroCopy">
          <p className="luxEyebrow">THE CHAOS WALK · EDITION 001</p>
          <h1>Two different shoes.<br/><span>Your own everything.</span></h1>
          <p className="luxLead">A free global social walk built around one unmistakable ritual: wear two different shoes. Your clothes, your style, your city.</p>
          <div className="luxHeroActions">
            <a className="luxButton luxButtonDark" href="#join">Join first-access free <ArrowRight size={17}/></a>
            <a className="luxButton luxButtonGhost" href="/shop">Preview the Chaos Fan <ArrowRight size={17}/></a>
          </div>
          <p className="luxMeta">MAY 2027 · exact date and local city status announced when confirmed</p>
        </div>
      </section>

      <section className="luxPathGrid" aria-label="Ways to take part">
        <a href="#join" className="luxPath">
          <span className="luxPathIcon"><Footprints size={23}/></span>
          <div><small>01 · PARTICIPATE</small><strong>Join the walk</strong><p>Free first-access. No purchase required.</p></div>
          <ArrowRight size={19}/>
        </a>
        <a href="/shop" className="luxPath">
          <span className="luxPathIcon luxPathIconBlue"><Fan size={23}/></span>
          <div><small>02 · OPTIONAL OBJECT</small><strong>Chaos Fan</strong><p>A colourful hand fan. Sales open later.</p></div>
          <ArrowRight size={19}/>
        </a>
        <a href="/city-leads" className="luxPath">
          <span className="luxPathIcon luxPathIconLilac"><Users size={23}/></span>
          <div><small>03 · LOCAL ACTION</small><strong>Lead your city</strong><p>Bring the walk to your community.</p></div>
          <ArrowRight size={19}/>
        </a>
      </section>

      <section className="luxSignature">
        <div className="luxSignatureCopy">
          <p className="luxEyebrow">THE SIGNATURE</p>
          <h2>Not a uniform.<br/>Not a costume.<br/><em>A visible choice.</em></h2>
          <p>PlanetHike should be recognisable without making everyone look the same. The shared code is simple: two clearly different shoes. Everything else belongs to the person wearing them.</p>
          <a className="luxTextLink" href="/the-chaos-walk">See how The Chaos Walk works <ArrowRight size={16}/></a>
        </div>
        <div className="luxSignatureImage" role="img" aria-label="Close-up of deliberately mismatched teal and orange shoes" />
      </section>

      <section className="luxNoUniform">
        <div className="luxNoUniformHead">
          <p className="luxEyebrow">ONE RULE. MANY PEOPLE.</p>
          <h2>Wear your own thing.</h2>
          <p>The visual system should feel like a movement, not a fashion collection.</p>
        </div>
        <div className="luxPrinciples">
          <article><span>01</span><h3>Keep your clothes.</h3><p>Denim, linen, office trousers, dresses, shorts, vintage, sportswear. The participant brings the personality.</p></article>
          <article><span>02</span><h3>Make the shoes unmistakable.</h3><p>Different colours, silhouettes or styles. The mismatch should read instantly, not look accidental.</p></article>
          <article><span>03</span><h3>The fan is optional.</h3><p>The colourful hand fan is a shared object for those who want it — never a requirement to belong.</p></article>
        </div>
      </section>

      <section className="luxFanSection">
        <div className="luxFanMedia" role="img" aria-label="Participant holding the colourful PlanetHike hand fan" />
        <div className="luxFanCopy">
          <p className="luxEyebrow luxEyebrowLight">THE CHAOS FAN · EDITION 001</p>
          <h2>A hand fan.<br/>Not a gadget.</h2>
          <p>Useful on the walk. Highly visible in photographs. Easy to carry afterwards. The Chaos Fan is planned as an optional annual collectible, not tech gear and not a participation requirement.</p>
          <div className="luxStatus"><span className="luxStatusDot"/> Sales are not open yet</div>
          <a className="luxButton luxButtonLight" href="/shop">Preview Edition 001 <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="luxCities">
        <div className="luxCitiesIntro">
          <p className="luxEyebrow">GLOBAL INTEREST · LOCAL READINESS</p>
          <h2>The Chaos Walk starts with people raising their hand.</h2>
          <p>These locations are examples of participant interest, not confirmed events. A city becomes confirmed only after local leadership and operating readiness are in place.</p>
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
        <div className="luxLeadMedia" role="img" aria-label="PlanetHike community members with colourful hand fans" />
      </section>

      <section className="luxCause">
        <div><Sparkles size={27}/><strong>Free to join.</strong><p>Participation stays separate from merchandise.</p></div>
        <div><Globe2 size={27}/><strong>Global idea. Local proof.</strong><p>City status is published only when local readiness is real.</p></div>
        <div><HeartHandshake size={27}/><strong>Cause partner to be announced.</strong><p>Any impact-linked fan contribution will be published only after the partner and money flow are verified.</p></div>
      </section>

      <section className="luxJoin" id="join">
        <div className="luxJoinHead">
          <p className="luxEyebrow">MAY 2027 · FIRST-ACCESS LIST OPEN</p>
          <h2>Walk different.</h2>
          <p>Choose your city. Wear two different shoes. We’ll send confirmed launch information when it is ready.</p>
        </div>
        <div className="luxJoinForm"><PreregisterForm /></div>
      </section>

      <footer className="luxFooter">
        <div><a className="luxBrand luxFooterBrand" href="#top">PLANETHIKE</a><p>Two different shoes. Your own everything.</p></div>
        <div className="luxFooterLinks"><a href="/the-chaos-walk">The Walk</a><a href="/cities">Cities</a><a href="/city-leads">City Leads</a><a href="/shop">Chaos Fan</a><a href="/faq">FAQ</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/imprint">Imprint</a></div>
        <small>© 2026 PlanetHike · May 2027 launch details remain subject to confirmation.</small>
      </footer>
    </main>
  );
}
