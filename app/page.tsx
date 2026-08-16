import { ArrowDown, ArrowRight, Globe2, MapPin, Sparkles } from 'lucide-react';

const chaosCodes = [
  ['01', 'Dress loud', 'Mismatched. Patched. Unexpected.'],
  ['02', 'Walk your way', 'Your pace. Your route. Your rules.'],
  ['03', 'Make a statement', 'Turn the sidewalk into your gallery.'],
  ['04', 'Expect chaos', 'Surprise missions land the day before.'],
];

const cities = ['Berlin', 'London', 'Paris', 'Málaga', 'New York', 'Cape Town', 'Sydney', 'Dubai'];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="PlanetHike home">PLANET<span>HIKE</span></a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="#chaos">Chaos Walk</a>
          <a href="#cities">Cities</a>
          <a href="#impact">Impact</a>
          <a href="#about">About</a>
        </nav>
        <a className="navCta" href="#join">Join the chaos <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroShade" />
        <div className="heroMeta">GLOBAL EDITION 001 <span>•</span> 11.10.26</div>
        <div className="heroCopy">
          <p className="eyebrow">PlanetHike presents</p>
          <h1>THE<br/><em>CHAOS</em><br/>WALK</h1>
          <p className="heroTag">For misfits, rebels &amp; originals.</p>
          <div className="heroActions">
            <a className="button buttonLight" href="#join">Join the chaos <ArrowRight size={18} /></a>
            <a className="textLink" href="#chaos">See what happens <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="heroFacts">
          <span>11 OCT 2026</span><span>11AM LOCAL</span><span>10,000 STEPS</span><span>WORLDWIDE</span>
        </div>
      </section>

      <section className="ticker" aria-label="PlanetHike message">
        <div>STAND OUT • WALK TOGETHER • LEAVE SOMETHING BEHIND • STAND OUT • WALK TOGETHER • LEAVE SOMETHING BEHIND •</div>
      </section>

      <section className="manifesto" id="chaos">
        <div className="sectionKicker">01 / The idea</div>
        <h2>Normal has<br/>enough events.</h2>
        <div className="manifestoText">
          <p>On October 11, the world steps out — not to fit in, but to stand out.</p>
          <p>No stopwatch. No perfect pace. Just 10,000 steps of beautifully strange, shared chaos.</p>
        </div>
      </section>

      <section className="editorialGrid">
        <figure className="photo photoTall" aria-label="Colourful walkers in a city" />
        <div className="editorialCard limeCard">
          <span>THE ONLY DRESS CODE</span>
          <strong>DON’T<br/>LOOK<br/>NORMAL.</strong>
        </div>
        <figure className="photo photoShoes" aria-label="Mismatched colourful shoes" />
        <div className="editorialCard blackCard">
          <span>10,000 STEPS</span>
          <strong>ZERO<br/>PRESSURE<br/>TO FIT IN.</strong>
        </div>
      </section>

      <section className="rulesSection">
        <div className="sectionKicker">02 / The chaos code</div>
        <div className="rulesHead">
          <h2>Rules, if you<br/>can call them that.</h2>
          <p>There is no right way to do The Chaos Walk. That is precisely the point.</p>
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

      <section className="dropsSection">
        <div className="dropsVisual">
          <div className="dropSticker stickerOne">100 STEPS<br/>BACKWARDS</div>
          <div className="dropSticker stickerTwo">SWAP<br/>SOMETHING</div>
          <div className="dropSticker stickerThree">MAKE A<br/>STRANGER SMILE</div>
        </div>
        <div className="dropsCopy">
          <span className="sectionKicker light">03 / Chaos Drops</span>
          <h2>The rules change<br/>the day before.</h2>
          <p>Registered walkers get a surprise set of mini-missions on October 10. Complete them. Ignore them. Remix them. Just make the walk yours.</p>
          <a href="#join" className="button buttonAcid">Get the drops <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="citiesSection" id="cities">
        <div className="sectionKicker">04 / One day, everywhere</div>
        <div className="citiesTop">
          <h2>Where will the<br/>chaos break out?</h2>
          <div className="globeIcon"><Globe2 size={38} strokeWidth={1.4}/></div>
        </div>
        <div className="cityCloud">
          {cities.map((city, i) => <span key={city} className={i % 3 === 1 ? 'accentCity' : ''}>{city}</span>)}
          <span>+ YOUR CITY</span>
        </div>
        <div className="cityFooter">
          <p>Walk solo, gather your friends, or put your city on the map.</p>
          <a href="#join" className="textLink dark">Host your city <ArrowRight size={16}/></a>
        </div>
      </section>

      <section className="impactSection" id="impact">
        <div className="impactImage" />
        <div className="impactCopy">
          <div className="sectionKicker light">05 / The legacy</div>
          <h2>The fun ends.<br/>The impact doesn’t.</h2>
          <p>PlanetHike turns participation into tangible environmental and cultural impact. The experience comes first. The legacy stays behind.</p>
          <div className="impactItems">
            <span>01 <b>Forests</b></span>
            <span>02 <b>Clean water</b></span>
            <span>03 <b>Public art</b></span>
          </div>
        </div>
      </section>

      <section className="brandSection" id="about">
        <div className="sectionKicker">06 / PlanetHike</div>
        <p className="brandStatement">We create the world’s most <em>unforgettable</em> walks.</p>
        <div className="editionStrip">
          <div><span>2026</span><strong>CHAOS</strong></div>
          <div className="mystery"><span>2027</span><strong>?</strong></div>
          <div className="mystery"><span>2028</span><strong>?</strong></div>
        </div>
        <p className="brandFoot">One global date. One new story. A tradition worth coming back for.</p>
      </section>

      <section className="joinSection" id="join">
        <Sparkles className="joinSpark" size={52} strokeWidth={1.2}/>
        <p>11 OCT 2026 · 11AM LOCAL · WORLDWIDE</p>
        <h2>DON’T<br/>SHOW UP<br/><em>NORMAL.</em></h2>
        <a className="button buttonDark" href="mailto:hello@planethike.org?subject=I%20want%20to%20join%20The%20Chaos%20Walk">Join the chaos <ArrowRight size={20}/></a>
        <div className="joinNote"><MapPin size={15}/> Registration flow coming next — this foundation is ready for your database.</div>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">PLANET<span>HIKE</span></a>
        <p>The world’s most unforgettable walks.</p>
        <div className="footerLinks"><a href="#chaos">Chaos Walk</a><a href="#impact">Impact</a><a href="#about">About</a></div>
        <small>© 2026 PlanetHike. Built to stand out.</small>
      </footer>
    </main>
  );
}
