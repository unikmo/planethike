import { ArrowRight, Fan, Footprints, Globe2, MapPin, Sparkles } from 'lucide-react';
import PreregisterForm from './PreregisterForm';

const chaosCodes = [
  ['01', 'Two different shoes', 'Same silhouette if you like. Completely different colourways. The signature lives at your feet.'],
  ['02', 'Dress off', 'Clash colours. Mix pieces that should not work together. Make it intentional.'],
  ['03', 'Bring the Chaos Fan', 'The annual fan is the shared visual ritual of the walk — useful, visible and built for photos.'],
  ['04', 'Expect challenges', 'The 10K is broken up by surprise Chaos Drops, not just kilometres.'],
];

const citySignals = ['YOUR CITY', 'LOCAL CREW', 'SHARED RITUAL', 'MAY 2027'];
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
          <a href="#chaos">The Walk</a>
          <a href="#cities">Cities</a>
          <a href="/city-leads">City Leads</a>
          <a href="/guides">Guides</a>
          <a href="#about">About</a>
        </nav>
        <a className="navCta" href="/city-leads">Lead your city <ArrowRight size={16} /></a>
      </header>

      <section className="hero hero2027" id="top">
        <div className="heroImage heroImage2027" aria-hidden="true" />
        <div className="heroShade heroShade2027" />
        <div className="heroCopy heroCopy2027">
          <p className="eyebrow">PlanetHike · Global Edition 001</p>
          <h1>THE<br/>CHAOS<br/>WALK</h1>
          <p className="heroTag">For misfits, rebels &amp; originals.</p>
          <p className="heroDate">MAY 2027 · FIRST ACCESS OPEN</p>
          <div className="heroActions">
            <a className="button buttonDark" href="/city-leads">Become a City Lead <ArrowRight size={18} /></a>
            <a className="button heroOutline" href="#join">Join first access <ArrowRight size={18} /></a>
          </div>
          <div className="heroPillRow" aria-label="Chaos Walk highlights">
            <span><Footprints size={18}/> 10,000-step format</span>
            <span><MapPin size={18}/> City Lead recruitment open</span>
            <span><Fan size={18}/> One shared fan ritual</span>
            <span><Globe2 size={18}/> Exact date to be announced</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="PlanetHike message">
        <div>TWO DIFFERENT SHOES • ONE CHAOS FAN • 10K OF CONTROLLED CHAOS • FIRST ACCESS IS FREE • MAY 2027 • TWO DIFFERENT SHOES • ONE CHAOS FAN •</div>
      </section>

      <section className="manifesto" id="chaos">
        <div className="sectionKicker">01 / The idea</div>
        <h2>The walk is 10K.<br/>What happens<br/>along the way<br/>is the point.</h2>
        <div className="manifestoText">
          <p>Ten thousand ordinary steps are easy to forget. PlanetHike is building an event people can recognise from a single photo.</p>
          <p>Two different shoes, deliberately off colours, one annual Chaos Fan and challenge moments that keep changing the walk.</p>
        </div>
      </section>

      <section className="editorialGrid">
        <figure className="photo photoTall" aria-label="Colourful walkers in a city" />
        <div className="editorialCard limeCard">
          <span>THE SIGNATURE</span>
          <strong>TWO<br/>DIFFERENT<br/>SHOES.</strong>
        </div>
        <figure className="photo photoShoes" aria-label="Mismatched colourful shoes" />
        <div className="editorialCard blackCard">
          <span>THE LOOK</span>
          <strong>OFF<br/>COLOURS.<br/>ON PURPOSE.</strong>
        </div>
      </section>

      <section className="rulesSection">
        <div className="sectionKicker">02 / The chaos code</div>
        <div className="rulesHead">
          <h2>Four things make<br/>it unmistakable.</h2>
          <p>Loose enough to feel free. Distinctive enough to be recognised across participating cities.</p>
        </div>
        <div className="rulesGrid">
          {chaosCodes.map(([n, title, text]) => (
            <article className="ruleCard" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="challengeWall">
        <div className="sectionKicker light">03 / The 10K Chaos Wall</div>
        <div className="challengeWallHead">
          <h2>NOT JUST<br/>A WALK.</h2>
          <p>Some challenge moments are known. Others can drop closer to event day. Approved cities follow the same core rhythm while keeping room for local personality.</p>
        </div>
        <div className="challengeTrack">
          {challengeMoments.map(([km, challenge], index) => (
            <article key={km} className={`challengeMoment challengeMoment${index + 1}`}>
              <span>{km}</span>
              <strong>{challenge}</strong>
            </article>
          ))}
        </div>
        <p className="challengeNote"><Sparkles size={17}/> Planned challenge moments may be refined during City Lead readiness testing.</p>
      </section>

      <section className="dropsSection">
        <div className="dropsVisual fanVisual">
          <div className="fanArc"><span>CHAOS</span><small>NOT AVERAGE</small></div>
        </div>
        <div className="dropsCopy">
          <span className="sectionKicker light">04 / The object</span>
          <h2>One fan.<br/>One shared<br/>signal.</h2>
          <p>The Chaos Fan is designed as the visual ritual of the event: open it for the global fan shot, wave it through a challenge moment and carry the annual edition after the walk.</p>
          <a href="#join" className="button buttonAcid">Get first access <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="citiesSection" id="cities">
        <div className="sectionKicker">05 / One City Lead. One local crew.</div>
        <div className="citiesTop">
          <h2>Every city needs<br/>someone to start it.</h2>
          <div className="globeIcon"><Globe2 size={38} strokeWidth={1.4}/></div>
        </div>
        <div className="cityCloud" aria-label="City readiness model">
          {citySignals.map((signal, i) => <span key={signal} className={i % 3 === 1 ? 'accentCity' : ''}>{signal}</span>)}
        </div>
        <div className="cityFooter">
          <p>PlanetHike will list cities as confirmed only after a City Lead or co-lead team passes readiness review. Until then, city interest stays exactly that: interest.</p>
          <a href="/city-leads" className="textLink dark">Apply as City Lead <ArrowRight size={16}/></a>
        </div>
      </section>

      <section className="brandSection" id="about">
        <div className="sectionKicker">06 / PlanetHike</div>
        <p className="brandStatement">We create the world’s most <em>unforgettable</em> walks.</p>
        <div className="editionStrip">
          <div><span>2027</span><strong>CHAOS</strong></div>
          <div className="mystery"><span>2028</span><strong>?</strong></div>
          <div className="mystery"><span>2029</span><strong>?</strong></div>
        </div>
        <p className="brandFoot">One global moment. One new story. A ritual worth coming back for.</p>
      </section>

      <section className="joinSection" id="join">
        <p>MAY 2027 · EXACT DATE TBA · FIRST-ACCESS LIST OPEN</p>
        <h2>BE FIRST<br/>TO HEAR<br/><em>WHAT’S NEXT.</em></h2>
        <PreregisterForm />
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">PLANET<span>HIKE</span></a>
        <p>The world’s most unforgettable walks.</p>
        <div className="footerLinks"><a href="#chaos">Chaos Walk</a><a href="/city-leads">City Leads</a><a href="/guides">Guides</a><a href="/privacy">Privacy</a><a href="/imprint">Imprint</a></div>
        <small>© 2026 PlanetHike. The Chaos Walk is planned for May 2027; exact date and confirmed cities will be announced after verification.</small>
      </footer>
    </main>
  );
}
