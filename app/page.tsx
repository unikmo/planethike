import { ArrowDown, ArrowRight, Globe2 } from 'lucide-react';
import PreregisterForm from './PreregisterForm';

const chaosCodes = [
  ['01', 'Two different shoes', 'The signature. Every walker. Every city. Every year.'],
  ['02', 'Dress off', 'Clash colours. Patch it. Mix it. Make normal impossible.'],
  ['03', 'Wear the Chaos Mask', 'Official mask required for the walk. Registration itself stays free.'],
  ['04', 'Expect chaos', 'Surprise missions land before your walk.'],
];

const cities = ['Berlin', 'London', 'Paris', 'Málaga', 'New York', 'Cape Town', 'Sydney', 'Dubai'];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="PlanetHike home">PLANET<span>HIKE</span></a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="#chaos">Chaos Walk</a>
          <a href="/city-leads">City Leads</a>
          <a href="/surgery">The Cause</a>
          <a href="#about">About</a>
        </nav>
        <a className="navCta" href="#join">Pre-register <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroShade" />
        <div className="heroMeta">GLOBAL EDITION 001 <span>•</span> MAY 2027</div>
        <div className="heroCopy">
          <p className="eyebrow">PlanetHike presents</p>
          <h1>THE<br/><em>CHAOS</em><br/>WALK</h1>
          <p className="heroTag">For misfits, rebels &amp; originals.</p>
          <div className="heroActions">
            <a className="button buttonLight" href="#join">Pre-register free <ArrowRight size={18} /></a>
            <a className="textLink" href="#chaos">See the code <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="heroFacts">
          <span>MAY 2027</span><span>10,000 STEPS</span><span>FREE REGISTRATION</span><span>WORLDWIDE</span>
        </div>
      </section>

      <section className="ticker" aria-label="PlanetHike message">
        <div>TWO DIFFERENT SHOES • ONE CHAOS MASK • FREE TO JOIN • MAY 2027 • TWO DIFFERENT SHOES • ONE CHAOS MASK • FREE TO JOIN •</div>
      </section>

      <section className="manifesto" id="chaos">
        <div className="sectionKicker">01 / The idea</div>
        <h2>Normal has<br/>enough events.</h2>
        <div className="manifestoText">
          <p>In May 2027, cities around the world step out — not to fit in, but to stand out.</p>
          <p>Registration is free. The signature is unmistakable: two different shoes, deliberately off colours and the official Chaos Mask.</p>
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
          <p>The Chaos Walk is loose enough to feel free, but distinctive enough to be recognised instantly in every city.</p>
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
          <h2>The walk should<br/>never feel scripted.</h2>
          <p>Pre-registered walkers get first access to city updates and surprise mini-missions. Complete them. Ignore them. Remix them. Just make the walk yours.</p>
          <a href="#join" className="button buttonAcid">Get first access <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="citiesSection" id="cities">
        <div className="sectionKicker">04 / One city lead. One local crew.</div>
        <div className="citiesTop">
          <h2>Every city needs<br/>someone to start it.</h2>
          <div className="globeIcon"><Globe2 size={38} strokeWidth={1.4}/></div>
        </div>
        <div className="cityCloud">
          {cities.map((city, i) => <span key={city} className={i % 3 === 1 ? 'accentCity' : ''}>{city}</span>)}
          <span>+ YOUR CITY</span>
        </div>
        <div className="cityFooter">
          <p>Each participating city has an approved City Lead supported by local volunteers and a standard PlanetHike event protocol.</p>
          <a href="/city-leads" className="textLink dark">Become a City Lead <ArrowRight size={16}/></a>
        </div>
      </section>

      <section className="impactSection surgeryHome" id="impact">
        <div className="impactImage surgeryImage" />
        <div className="impactCopy">
          <div className="sectionKicker light">05 / Why the mask matters</div>
          <h2>A mask that helps<br/>restore a face.</h2>
          <p>The Chaos Mask is more than the visual symbol of the walk. A defined share of mask proceeds will support partner-led reconstructive mouth and nose surgery for people who need it.</p>
          <div className="impactItems">
            <span>01 <b>Required event symbol</b></span>
            <span>02 <b>Collectible annual edition</b></span>
            <span>03 <b>Funds reconstructive care</b></span>
          </div>
          <a href="/surgery" className="button buttonLight impactCta">See the surgery mission <ArrowRight size={18}/></a>
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
        <p className="brandFoot">One global moment. One new story. One human cause people can see and understand.</p>
      </section>

      <section className="joinSection" id="join">
        <p>MAY 2027 · WORLDWIDE · PRE-REGISTRATION OPEN</p>
        <h2>BE FIRST<br/>TO JOIN<br/><em>THE CHAOS.</em></h2>
        <PreregisterForm />
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">PLANET<span>HIKE</span></a>
        <p>The world’s most unforgettable walks.</p>
        <div className="footerLinks"><a href="#chaos">Chaos Walk</a><a href="/city-leads">City Leads</a><a href="/surgery">The Cause</a></div>
        <small>© 2026 PlanetHike. Built to stand out.</small>
      </footer>
    </main>
  );
}
