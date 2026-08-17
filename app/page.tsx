import { ArrowRight, Fan, Globe2, HeartHandshake, MapPin, Sparkles } from 'lucide-react';
import PreregisterForm from './PreregisterForm';

const chaosCodes = [
  ['01', 'Two different shoes', 'Same silhouette if you like. Completely different colourways. The signature lives at your feet.'],
  ['02', 'Dress off', 'Clash colours. Mix pieces that should not work together. Make it intentional.'],
  ['03', 'Bring the Chaos Fan', 'The annual fan is the shared symbol of the walk — useful, visible and built for photos.'],
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
          <a href="#chaos">The Walk</a>
          <a href="#cities">Cities</a>
          <a href="/city-leads">Get involved</a>
          <a href="/shop">Shop</a>
          <a href="/surgery">The Cause</a>
        </nav>
        <a className="navCta" href="#join">Pre-register <ArrowRight size={16} /></a>
      </header>

      <section className="hero hero2027" id="top">
        <div className="heroImage heroImage2027" aria-hidden="true" />
        <div className="heroShade heroShade2027" />
        <div className="heroCopy heroCopy2027">
          <p className="eyebrow">PlanetHike · Global Edition 001</p>
          <h1>THE<br/>CHAOS<br/>WALK</h1>
          <p className="heroTag">For misfits, rebels &amp; originals.</p>
          <p className="heroDate">MAY 2027 · PRE-REGISTER FREE</p>
          <div className="heroActions">
            <a className="button buttonDark" href="#join">Pre-register now <ArrowRight size={18} /></a>
            <a className="button heroOutline" href="/city-leads">Become a City Lead <ArrowRight size={18} /></a>
          </div>
          <div className="heroPillRow" aria-label="Chaos Walk highlights">
            <span><Globe2 size={18}/> 1 walk · 1 movement</span>
            <span><MapPin size={18}/> Cities worldwide</span>
            <span><Fan size={18}/> €3 per official fan funds surgery</span>
            <span><HeartHandshake size={18}/> Human impact</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="PlanetHike message">
        <div>TWO DIFFERENT SHOES • ONE CHAOS FAN • 10K OF CONTROLLED CHAOS • FREE TO JOIN • MAY 2027 • TWO DIFFERENT SHOES • ONE CHAOS FAN •</div>
      </section>

      <section className="manifesto" id="chaos">
        <div className="sectionKicker">01 / The idea</div>
        <h2>The walk is 10K.<br/>What happens<br/>along the way<br/>is the point.</h2>
        <div className="manifestoText">
          <p>PlanetHike is not asking people to walk ten thousand ordinary steps for a distant cause.</p>
          <p>We turn the route into a shared piece of theatre: two different shoes, deliberately off colours, one annual Chaos Fan and challenges that keep changing the walk.</p>
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
          <p>Loose enough to feel free. Distinctive enough to be recognised instantly in every participating city.</p>
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
          <p>Some challenges are known. Others drop close to event day. Every city follows the same rhythm but gets room to make it its own.</p>
        </div>
        <div className="challengeTrack">
          {challengeMoments.map(([km, challenge], index) => (
            <article key={km} className={`challengeMoment challengeMoment${index + 1}`}>
              <span>{km}</span>
              <strong>{challenge}</strong>
            </article>
          ))}
        </div>
        <p className="challengeNote"><Sparkles size={17}/> The best moments become the global photo and video story of Edition 001.</p>
      </section>

      <section className="dropsSection">
        <div className="dropsVisual fanVisual">
          <div className="fanArc"><span>CHAOS</span><small>NOT AVERAGE</small></div>
        </div>
        <div className="dropsCopy">
          <span className="sectionKicker light">04 / The object</span>
          <h2>One fan.<br/>A thousand<br/>uses.</h2>
          <p>Open it for the global fan shot. Wave it through a Chaos Drop. Carry it after the walk. Each annual edition becomes a useful collectible rather than disposable event merch.</p>
          <a href="/shop" className="button buttonAcid">See the Chaos Fan <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="citiesSection" id="cities">
        <div className="sectionKicker">05 / One City Lead. One local crew.</div>
        <div className="citiesTop">
          <h2>Every city needs<br/>someone to start it.</h2>
          <div className="globeIcon"><Globe2 size={38} strokeWidth={1.4}/></div>
        </div>
        <div className="cityCloud">
          {cities.map((city, i) => <span key={city} className={i % 3 === 1 ? 'accentCity' : ''}>{city}</span>)}
          <span>+ YOUR CITY</span>
        </div>
        <div className="cityFooter">
          <p>Each participating city has an approved City Lead or co-lead team, supported by local volunteers and a standard PlanetHike operating protocol.</p>
          <a href="/city-leads" className="textLink dark">Become a City Lead <ArrowRight size={16}/></a>
        </div>
      </section>

      <section className="impactSection surgeryHome" id="impact">
        <div className="impactImage surgeryImage" />
        <div className="impactCopy">
          <div className="sectionKicker light">06 / Why the fan matters</div>
          <h2>Have fun.<br/>Help restore<br/>a life.</h2>
          <p>Registration stays free. In countries where PlanetHike commerce is available, the official Chaos Fan is €19.99 and €3 from every fan sold is committed to partner-led reconstructive mouth and nose surgery.</p>
          <div className="impactItems">
            <span>01 <b>Official annual fan · €19.99</b></span>
            <span>02 <b>€3 from every official fan funds surgery</b></span>
            <span>03 <b>Transparent partner and payment reporting</b></span>
          </div>
          <a href="/surgery" className="button buttonLight impactCta">See the surgery mission <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="commerceSection">
        <div className="sectionKicker">07 / Global participation. Selective commerce.</div>
        <div className="commerceGrid">
          <div>
            <h2>THE WALK GOES<br/>WHERE THE SHOP<br/>DOESN’T.</h2>
          </div>
          <div className="commerceCopy">
            <p>Participation is intentionally broader than merchandise delivery. PlanetHike will only sell official products in countries where fulfilment is reliable and shipping remains reasonable.</p>
            <p>Where we do not sell, people can still join fully: make a local Chaos Fan, wear two different shoes, follow the Chaos Drops and walk with your city.</p>
            <a href="/shop" className="textLink dark">How shop availability works <ArrowRight size={16}/></a>
          </div>
        </div>
      </section>

      <section className="brandSection" id="about">
        <div className="sectionKicker">08 / PlanetHike</div>
        <p className="brandStatement">We create the world’s most <em>unforgettable</em> walks.</p>
        <div className="editionStrip">
          <div><span>2027</span><strong>CHAOS</strong></div>
          <div className="mystery"><span>2028</span><strong>?</strong></div>
          <div className="mystery"><span>2029</span><strong>?</strong></div>
        </div>
        <p className="brandFoot">One global moment. One new story. A ritual worth coming back for.</p>
      </section>

      <section className="joinSection" id="join">
        <p>MAY 2027 · WORLDWIDE · PRE-REGISTRATION OPEN</p>
        <h2>BE FIRST<br/>TO JOIN<br/><em>THE CHAOS.</em></h2>
        <PreregisterForm />
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">PLANET<span>HIKE</span></a>
        <p>The world’s most unforgettable walks.</p>
        <div className="footerLinks"><a href="#chaos">Chaos Walk</a><a href="/city-leads">City Leads</a><a href="/shop">Shop</a><a href="/surgery">The Cause</a></div>
        <small>© 2026 PlanetHike. Built to stand out.</small>
      </footer>
    </main>
  );
}
