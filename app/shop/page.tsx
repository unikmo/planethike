import { ArrowLeft, ArrowRight } from 'lucide-react';
import MobileMenu from '../MobileMenu';

export default function ShopPage() {
  return (
    <main>
      <header className="subHeader darkHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
        <MobileMenu />
      </header>

      <section className="shopHero">
        <div>
          <p className="sectionKicker">EDITION 001 / MAY 2027 / PREVIEW</p>
          <h1>THE<br/>CHAOS<br/>FAN.</h1>
        </div>
        <div>
          <p>The Chaos Fan is planned as PlanetHike’s first official product. Sales are not open yet. Join the free first-access list and tick the fan alert if you want to know when verified checkout and fulfilment open.</p>
          <a href="/#join" className="button buttonDark">Join + request fan alert <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="shopCards">
        <article className="shopCard">
          <span>THE ICON / PLANNED</span>
          <div>
            <h2>OFFICIAL<br/>CHAOS FAN</h2>
            <strong>€19.99*</strong>
          </div>
          <p>*Planned launch price, not an active offer. Final price, countries, shipping, returns and any impact-linked contribution will be confirmed before sales open.</p>
        </article>
        <article className="shopCard">
          <span>THE RULE</span>
          <div>
            <h2>FREE WALK.<br/>OPTIONAL<br/>MERCH.</h2>
            <strong>NO PAYWALL</strong>
          </div>
          <p>Buying an official product will never be required to join the walk. A DIY fan route is planned where official commerce is unavailable.</p>
        </article>
        <article className="shopCard">
          <span>WHAT COMES LATER</span>
          <div>
            <h2>PROVE<br/>THE FAN<br/>FIRST.</h2>
            <strong>ONE HERO SKU</strong>
          </div>
          <p>Additional apparel or accessory products stay on hold until the Chaos Fan proves demand, fulfilment quality and support load.</p>
        </article>
      </section>

      <section className="shopPolicy">
        <div>
          <p className="sectionKicker">COMMERCE GATE</p>
          <h2>GLOBAL WALK.<br/>CONSERVATIVE<br/>COMMERCE.</h2>
        </div>
        <div>
          <p>PlanetHike will open sales only where checkout, fulfilment, shipping costs, returns and customer support have been tested.</p>
          <p>Any reconstructive-surgery contribution linked to the fan will be published only after the partner, contribution amount, settlement process and reporting standard are verified.</p>
          <p>Until those gates pass, this page is a product preview and interest funnel — not a checkout.</p>
          <p><a className="textLink dark" href="/shop/chaos-fan">See the Edition 001 fan concept <ArrowRight size={16}/></a></p>
        </div>
      </section>
    </main>
  );
}
