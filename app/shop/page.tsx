import { ArrowLeft, ArrowRight, Fan, MapPin, Package, Shirt, Truck } from 'lucide-react';
import MobileMenu from '../MobileMenu';

const products = [
  {
    kicker: 'HERO PRODUCT · SPECIALIST MANUFACTURE',
    title: 'Chaos Fan\nEdition 001',
    price: '€19.99*',
    note: 'The shared object of the day. Bulk-manufactured separately from POD apparel so colour, folding action and print quality stay under PlanetHike control.',
    className: 'commerceProductFan',
  },
  {
    kicker: 'POD · SAMPLE TEST REQUIRED',
    title: 'Mismatch\nSocks',
    price: 'PRICE AT LAUNCH',
    note: 'A deliberately mismatched pair designed to reinforce the two-different-shoes ritual. Production route must pass sample and fulfilment testing before checkout opens.',
    className: 'commerceProductSocks',
  },
  {
    kicker: 'GELATO POD · PLANNED',
    title: 'Chaos\nTee',
    price: 'PRICE AT LAUNCH',
    note: 'Colour-clash T-shirts produced on demand through Gelato where the selected garment, print quality and delivery route pass launch testing.',
    className: 'commerceProductTee',
  },
  {
    kicker: 'ACCESSORY · SAMPLE TEST REQUIRED',
    title: 'Chaos\nBandana',
    price: 'PRICE AT LAUNCH',
    note: 'A lightweight colour hit for people who want more chaos without buying a full outfit. Supplier and product route remain subject to sample validation.',
    className: 'commerceProductBandana',
  },
];

const bundles = [
  ['01', 'The Signature Set', 'Chaos Fan + mismatched socks. The shortest route to the PlanetHike visual code.'],
  ['02', 'The Chaos Kit', 'Chaos Fan + mismatched socks + Chaos Tee + bandana. One complete event bundle.'],
  ['03', 'City Chaos Box', 'Consolidated participant orders plus event stock prepared for approved City Leads. Built for 20 / 50 / 100+ unit city batches.'],
];

export default function ShopPage() {
  return (
    <main className="commercePage">
      <header className="commerceHeader">
        <a className="luxBrand" href="/">PLANETHIKE</a>
        <nav className="commerceNav" aria-label="Shop navigation">
          <a href="#products">Products</a>
          <a href="#bundles">Bundles</a>
          <a href="#delivery">Delivery</a>
        </nav>
        <a className="commerceBack" href="/"><ArrowLeft size={15}/> Back to The Chaos Walk</a>
        <MobileMenu />
      </header>

      <section className="commerceHero">
        <div className="commerceHeroCopy">
          <p className="commerceEyebrow">THE CHAOS SHOP · EDITION 001 · PRE-LAUNCH</p>
          <h1>The walk is free.<br/><em>The objects make it visible.</em></h1>
          <p>The Chaos Fan is the hero product. Apparel and accessories stay small, colourful and useful. No giant merch catalogue. No fake checkout before fulfilment is ready.</p>
          <div className="commerceHeroActions">
            <a href="/#join" className="commercePrimary">Join first-access + fan alert <ArrowRight size={17}/></a>
            <a href="#delivery" className="commerceSecondary">See delivery model <ArrowRight size={17}/></a>
          </div>
          <small>*Fan price is planned, not an active offer. Other prices open only after samples, supplier costs and fulfilment are verified.</small>
        </div>
        <div className="commerceHeroMedia" role="img" aria-label="Colourful PlanetHike folding hand fan held by a participant" />
      </section>

      <section className="commerceProducts" id="products">
        <div className="commerceSectionHead">
          <p className="commerceEyebrow">01 · THE DROP</p>
          <h2>Four products.<br/>That is enough.</h2>
          <p>Every item must strengthen the visual ritual. If it does not help people look or feel more PlanetHike, it does not belong in Edition 001.</p>
        </div>
        <div className="commerceProductGrid">
          {products.map((product) => (
            <article className={`commerceProduct ${product.className}`} key={product.title}>
              <span>{product.kicker}</span>
              <div>
                <h3>{product.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
                <strong>{product.price}</strong>
              </div>
              <p>{product.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="commerceBundles" id="bundles">
        <div className="commerceSectionHead commerceSectionHeadDark">
          <p className="commerceEyebrow">02 · BUNDLES</p>
          <h2>Make choosing easy.</h2>
          <p>Bundles should increase participation in the visual ritual, not create a maze of discounts.</p>
        </div>
        <div className="commerceBundleList">
          {bundles.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowRight size={20}/>
            </article>
          ))}
        </div>
      </section>

      <section className="commerceDelivery" id="delivery">
        <div className="commerceSectionHead">
          <p className="commerceEyebrow">03 · FULFILMENT</p>
          <h2>Ship to me.<br/>Or collect at the walk.</h2>
          <p>PlanetHike uses two fulfilment paths so the event can stay global without forcing every item through one warehouse.</p>
        </div>
        <div className="commerceDeliveryGrid">
          <article>
            <div className="commerceDeliveryIcon"><Truck size={28}/></div>
            <p className="commerceMini">DIRECT DELIVERY</p>
            <h3>Deliver to me.</h3>
            <p>Eligible POD items are planned to be produced and shipped through Gelato after checkout opens. The customer pays the applicable shipping charge shown at checkout.</p>
            <ul>
              <li>Best for people ordering early or outside event-pickup windows.</li>
              <li>Gelato integration is planned; it is not yet live.</li>
              <li>The separately manufactured Chaos Fan may have a different fulfilment route until consolidation is tested.</li>
            </ul>
          </article>
          <article>
            <div className="commerceDeliveryIcon commerceDeliveryIconAlt"><MapPin size={28}/></div>
            <p className="commerceMini">EVENT COLLECTION</p>
            <h3>Collect at my Chaos Walk.</h3>
            <p>Orders are grouped by confirmed city and prepared for bulk delivery to the approved City Lead. Event merchandise must arrive with the City Lead at least 14 days before event day.</p>
            <ul>
              <li>Each city receives a published order cutoff before the event.</li>
              <li>After the cutoff, event pickup closes and direct delivery remains the fallback where available.</li>
              <li>Participants collect their named order from the city distribution point on event day.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="commerceLogistics">
        <div>
          <p className="commerceEyebrow commerceEyebrowLight">04 · CITY LOGISTICS</p>
          <h2>Everything there<br/>two weeks early.</h2>
        </div>
        <div className="commerceTimeline">
          <article><span>ORDER WINDOW</span><strong>Participant pre-orders</strong><p>Direct delivery or event collection is selected at checkout once commerce is live.</p></article>
          <article><span>CITY CUTOFF</span><strong>Pickup orders lock</strong><p>The exact cutoff is published per confirmed city based on supplier and routing tests.</p></article>
          <article><span>T−14</span><strong>Hard arrival rule</strong><p>City Lead must have event-collection merchandise at least 14 days before the walk.</p></article>
          <article><span>EVENT DAY</span><strong>Collect + walk</strong><p>Orders are handed out locally before the Chaos Walk begins.</p></article>
        </div>
      </section>

      <section className="commerceSystem">
        <div className="commerceSystemGrid">
          <article><Fan size={25}/><strong>Chaos Fan</strong><p>Specialist bulk manufacture. PlanetHike controls the hero product.</p></article>
          <article><Shirt size={25}/><strong>Gelato POD</strong><p>T-shirts first. Other POD items only after product-level availability and sample quality are confirmed.</p></article>
          <article><Package size={25}/><strong>City batch</strong><p>Event-collection orders consolidated for approved City Leads.</p></article>
        </div>
        <p className="commerceSystemNote">Commerce remains PRE-LAUNCH. No checkout, shipping promise, Gelato integration, supplier availability or cause-linked contribution is represented as operational until it is verified.</p>
      </section>

      <section className="commerceCta">
        <p className="commerceEyebrow">EDITION 001 · MAY 2027</p>
        <h2>Get the drop<br/>before the drop.</h2>
        <p>Join first-access and request the Chaos Fan alert. We will open sales only after samples, fulfilment and checkout pass launch testing.</p>
        <a href="/#join" className="commercePrimary">Join first-access + fan alert <ArrowRight size={17}/></a>
      </section>
    </main>
  );
}
