import { ArrowRight, Fan, Globe2, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import MobileMenu from './MobileMenu';
import PreregisterForm from './PreregisterForm';

const chaosCodes = [
  ['01', 'Two different shoes', 'Wear two different colourways or two completely different shoes. The mismatch is the signature.'],
  ['02', 'Dress off', 'Clash colours. Mix pieces that should not work together. Make it intentional.'],
  ['03', 'Bring the Chaos Fan', 'The annual fan is designed to become the shared symbol of the walk — useful, visible and built for photos.'],
  ['04', 'Expect challenges', 'The 10K is broken up by surprise Chaos Drops, not just kilometres.'],
];

const cities = ['Berlin', 'London', 'Paris', 'Málaga', 'New York', 'Cape Town', 'Sydney', 'Dubai'];
const challengeMoments = [
  ['2K', '100 backwards steps'],
  ['4K', 'Make a stranger smile'],
  ['5K', 'The city-wide fan shot'],
  ['6K', 'Swap one wearable'],
  ['8K', 'Invent a ridiculous walk'],
  ['10K', 'The Chaos finish ritual'],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="PlanetHike home">PLANET<span>HIKE</span></a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="/the-chaos-walk">The Walk</a>
          <a href="/cities">Cities</a>
          <a href="/shop">Chaos Fan</a>
          <a href="/city-leads">City Leads</a>
          <a href="/the-cause">The Cause</a>
          <a href="/guides">Guides</a>
        </nav>
        <a className="navCta" href="#join">Join first-access <ArrowRight size={16} /></a>
        <MobileMenu />
      </header>

      <section className="hero hero2027" id="top">
        <div className="heroImage heroImage2027" role="img" aria-label="Colourfully dressed Chaos Walk participant with a hand fan and intentionally mismatched shoes" />
        <div className="heroShade heroShade2027" />
        <div className="heroCopy heroCopy2027">
          <p className="eyebrow">PlanetHike · Global Edition 001</p>
          <h1>THE<br/>CHAOS<br/>WALK</h1>
          <p className="heroTag">For misfits, rebels &amp; originals.</p>
          <p className="heroDate">MAY 2027 · EXACT DATE TO BE ANNOUNCED</p>
          <div className="heroActions">
            <a className="button buttonDark" href="#join">Join first-access free <ArrowRight size={18} /></a>
            <a className="button heroOutline" href="/shop">Preview the Chaos Fan <ArrowRight size={18} /></a>
          </div>
          <div className="heroPillRow" aria-label="Chaos Walk launch status">
            <span><Globe2 size={18}/> Free first-access list</span>
            <span><MapPin size={18}/> City status confirmed before launch</span>
            <span><Fan size={18}/> Fan sales are not open yet</span>
            <span><HeartHandshake size={18}/> City Lead applications open</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="PlanetHike message">
        <div>TWO DIFFERENT SHOES • ONE CHAOS FAN • 10K OF CONTROLLED CHAOS • FREE TO JOIN • MAY 2027 • TWO DIFFERENT SHOES • ONE CHAOS FAN •</div>
      </section>

      <section className="manifesto" id="chaos">
        <div className="sectionKicker">01 / The idea</div>
        <h2>The walk is 10K.<br/>The story is<br/>everything<br/>in between.</h2>
        <div className="manifestoText">
          <p>PlanetHike turns a familiar walking challenge into a global piece of controlled chaos.</p>
          <p>Wear two different shoes, clash the outfit, carry the fan and meet the challenge moments along the route.</p>
        </div>
      </section>

      <section className="editorialGrid">
        <figure className="photo photoTall" aria-label="Colourful Chaos Walk participants" />
        <div className="editorialCard limeCard"><span>THE SIGNATURE</span><strong>TWO<br/>DIFFERENT<br/>SHOES.</strong></div>
        <figure className="photo photoShoes" aria-label="Two intentionally mismatched shoes" />
        <div className="editorialCard blackCard"><span>THE LOOK</span><strong>OFF<br/>COLOURS.<br/>ON PURPOSE.</strong></div>
      </section>

      <section className="rulesSection">
        <div className="sectionKicker">02 / The chaos code</div>
        <div className="rulesHead"><h2>Four rules.<br/>Zero uniforms.</h2><p>The brand is recognisable without asking everyone to look the same.</p></div>
        <div className="rulesGrid">
          {chaosCodes.map(([n, title, text]) => <article className="ruleCard" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="challengeWall">
        <div className="sectionKicker light">03 / The 10K Chaos Wall</div>
        <div className="challengeWallHead"><h2>NOT JUST<br/>A WALK.</h2><p>The route keeps changing. Some challenges are known. Others drop close to event day.</p></div>
        <div className="challengeTrack">
          {challengeMoments.map(([km, challenge], index) => <article key={km} className={`challengeMoment challengeMoment${index + 1}`}><span>{km}</span><strong>{challenge}</strong></article>)}
        </div>
        <p className="challengeNote"><Sparkles size={17}/> Challenge details remain subject to final event and safety review.</p>
      </section>

      <section className="dropsSection">
        <div className="dropsVisual fanVisual"><div className="fanArc"><span>CHAOS</span><small>NOT AVERAGE</small></div></div>
        <div className="dropsCopy"><span className="sectionKicker light">04 / The object</span><h2>One fan.<br/>A thousand<br/>uses.</h2><p>Open it for the fan shot. Wave it through a Chaos Drop. Carry it after the walk. Edition 001 is planned as a useful collectible rather than disposable event merch.</p><a href="/shop" className="button buttonAcid">Preview the Chaos Fan <ArrowRight size={18}/></a></div>
      </section>

      <section className="citiesSection" id="cities">
        <div className="sectionKicker">05 / Demand first. Confirmation second.</div>
        <div className="citiesTop"><h2>Tell us where<br/>you want it.</h2><div className="globeIcon"><Globe2 size={38} strokeWidth={1.4}/></div></div>
        <div className="cityCloud" aria-label="Example interest locations, not confirmed events">{cities.map((city, i) => <span key={city} className={i % 3 === 1 ? 'accentCity' : ''}>{city}</span>)}<span>+ YOUR CITY</span></div>
        <div className="cityFooter"><p>These are example interest locations, not confirmed events. A city becomes confirmed only after an approved City Lead, local operating readiness and publishable event information are in place.</p><a href="/cities" className="textLink dark">How city status works <ArrowRight size={16}/></a></div>
      </section>

      <section className="impactSection surgeryHome" id="impact">
        <div className="impactImage surgeryImage" />
        <div className="impactCopy"><div className="sectionKicker light">06 / Human mission — verification first</div><h2>Have fun.<br/>Build impact<br/>credibly.</h2><p>PlanetHike intends to link official Chaos Fan sales to a transparent reconstructive-surgery contribution. Partner, contribution amount, settlement and reporting details will be published before sales open.</p><div className="impactItems"><span>01 <b>Participation stays free</b></span><span>02 <b>Fan commerce opens only after fulfilment is verified</b></span><span>03 <b>No impact claim before partner and money-flow proof</b></span></div><a href="/the-cause" className="button buttonLight impactCta">See the cause status <ArrowRight size={18}/></a></div>
      </section>

      <section className="commerceSection"><div className="sectionKicker">07 / Free participation. Selective commerce.</div><div className="commerceGrid"><div><h2>THE WALK GOES<br/>WHERE THE SHOP<br/>DOESN’T.</h2></div><div className="commerceCopy"><p>The Chaos Fan is planned as the first official product. Sales are not open yet. PlanetHike will only launch commerce where checkout, fulfilment, shipping, returns and any impact-linked contribution have been verified.</p><p>Participation is broader than merchandise delivery. Where official sales are unavailable, a local DIY Chaos Fan option is planned so the walk does not become pay-to-participate.</p><a href="/shop" className="textLink dark">Preview Edition 001 <ArrowRight size={16}/></a></div></div></section>

      <section className="brandSection" id="about"><div className="sectionKicker">08 / PlanetHike</div><p className="brandStatement">We create walks designed to be <em>unforgettable.</em></p><div className="editionStrip"><div><span>2027</span><strong>CHAOS</strong></div><div className="mystery"><span>2028</span><strong>?</strong></div><div className="mystery"><span>2029</span><strong>?</strong></div></div><p className="brandFoot">One global idea. Local cities only when they are ready. A ritual worth coming back for.</p></section>

      <section className="joinSection" id="join"><p>MAY 2027 · EXACT DATE TO BE ANNOUNCED · FIRST-ACCESS LIST OPEN</p><h2>BE FIRST<br/>TO JOIN<br/><em>THE CHAOS.</em></h2><PreregisterForm /></section>

      <footer><a className="brand footerBrand" href="#top">PLANET<span>HIKE</span></a><p>The Chaos Walk · Edition 001.</p><div className="footerLinks"><a href="/the-chaos-walk">Chaos Walk</a><a href="/guides">Guides</a><a href="/city-leads">City Leads</a><a href="/shop">Chaos Fan</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/imprint">Imprint</a></div><small>© 2026 PlanetHike. May 2027 launch details remain subject to confirmation.</small></footer>
    </main>
  );
}
