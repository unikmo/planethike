import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ShopPage() {
  return (
    <main>
      <header className="subHeader darkHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
      </header>

      <section className="shopHero">
        <div>
          <p className="sectionKicker">EDITION 001 / MAY 2027</p>
          <h1>THE<br/>CHAOS<br/>SHOP.</h1>
        </div>
        <div>
          <p>Registration is free. The shop is optional, except that every participant should carry a Chaos Fan — official where we sell, locally made where we do not.</p>
          <a href="/#join" className="button buttonDark">Pre-register free <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="shopCards">
        <article className="shopCard">
          <span>THE ICON</span>
          <div>
            <h2>OFFICIAL<br/>CHAOS FAN</h2>
            <strong>€19.99</strong>
          </div>
          <p>Edition 001 collectible fan. €3 from every fan sold is committed to reconstructive mouth and nose surgery.</p>
        </article>
        <article className="shopCard">
          <span>THE PAIRING</span>
          <div>
            <h2>FAN +<br/>MISMATCHED SOCKS</h2>
            <strong>€29.99</strong>
          </div>
          <p>For people who want the signature look without overthinking it. Final product mix subject to fulfilment testing.</p>
        </article>
        <article className="shopCard">
          <span>THE FULL LOOK</span>
          <div>
            <h2>CHAOS<br/>KIT</h2>
            <strong>€44.99–€49.99</strong>
          </div>
          <p>Fan plus a limited apparel/accessory combination. Designed to feel collectible, not like standard event merchandise.</p>
        </article>
      </section>

      <section className="shopPolicy">
        <div>
          <p className="sectionKicker">FULFILMENT POLICY</p>
          <h2>GLOBAL WALK.<br/>CONSERVATIVE<br/>COMMERCE.</h2>
        </div>
        <div>
          <p>PlanetHike will only open commerce in countries where Gelato or another approved fulfilment partner can deliver reliably and at a reasonable total shipping cost.</p>
          <p>Participation is broader. In countries where we do not sell, City Leads and participants can create the fan locally using PlanetHike’s approved DIY design guidance. No one is excluded because cross-border fulfilment is expensive or unreliable.</p>
          <p>Official product availability will be shown by country before checkout. We will test fulfilment before expanding the commerce positive list.</p>
        </div>
      </section>
    </main>
  );
}
