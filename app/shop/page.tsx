import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Fan, Footprints, HeartHandshake, Package, Truck } from 'lucide-react';
import MobileMenu from '../MobileMenu';

export const metadata: Metadata = {
  title: 'Chaos Fan Edition 001 | PlanetHike Shop',
  description: 'One collectible for The Chaos Walk: Chaos Fan Edition 001. Join the free walk and opt in to the Fan launch alert. Orders are not yet open.',
  alternates: { canonical: '/shop' },
};

export default function ShopPage() {
  return (
    <main className="commercePage commerceFanOnly">
      <header className="commerceHeader">
        <a className="luxBrand" href="/">PLANETHIKE</a>
        <nav className="commerceNav" aria-label="Shop navigation">
          <a href="#fan">Edition 001</a>
          <a href="#how-it-works">How it works</a>
          <a href="#fan-impact">The cause</a>
        </nav>
        <a className="commerceBack" href="/"><ArrowLeft size={15}/> Back to The Chaos Walk</a>
        <MobileMenu />
      </header>

      <section className="commerceHero">
        <div className="commerceHeroCopy">
          <p className="commerceEyebrow">THE CHAOS FAN · EDITION 001</p>
          <h1>One Fan.<br/><em>Zero normal.</em></h1>
          <p>The official accessory of unofficial chaos. One unmistakable Fan in the air. Thousands of people in their own mismatched shoes. No uniform required.</p>
          <div className="commerceHeroActions">
            <a href="/#join" className="commercePrimary">Get the Fan launch alert <ArrowRight size={17}/></a>
            <a href="#fan" className="commerceSecondary">Meet Edition 001 <ArrowRight size={17}/></a>
          </div>
          <small>Free walk registration and Fan launch interest are separate. Tick the optional Fan alert on the registration form. Sales are not open; price and delivery availability will be confirmed before orders are accepted.</small>
        </div>
        <div className="commerceHeroMedia" role="img" aria-label="Colourful PlanetHike folding hand fan held by a participant" />
      </section>

      <section className="commerceProducts" id="fan">
        <div className="commerceSectionHead">
          <p className="commerceEyebrow">01 · THE ONLY YEAR ONE COLLECTIBLE</p>
          <h2>The Fan.<br/>That&apos;s the drop.</h2>
          <p>Two different shoes make the walk yours. Chaos Fan Edition 001 makes the group photograph instantly recognizable. Keep your clothes. Bring your personality.</p>
        </div>
        <div className="commerceProductGrid">
          <article className="commerceProduct commerceProductFan">
            <span>THE ICON · EDITION 001</span>
            <div>
              <h3><span>Chaos Fan</span><span>Edition 001</span></h3>
              <strong>Target price €19.99 · final price pending</strong>
            </div>
            <p>A real, colourful folding hand fan designed for the shared photo moment and to keep long after the walk. Not an entry ticket. No purchase required to participate.</p>
            <a className="commerceFanProductLink" href="/#join">Join the Fan alert <ArrowRight size={17}/></a>
          </article>
          <div className="commerceFanOnlyStory">
            <span className="commerceEyebrow">WHY JUST ONE?</span>
            <h3>Your outfit is already the collection.</h3>
            <p>No shirts, trousers, socks or bundles for Edition 001. The only shared visual object is the Fan. Everything else belongs to you.</p>
            <p>The walk remains free, even if you never buy a Fan.</p>
          </div>
        </div>
      </section>

      <section className="commerceDelivery" id="how-it-works">
        <div className="commerceSectionHead">
          <p className="commerceEyebrow">02 · FIRST-ACCESS PROCESS</p>
          <h2>Interest first.<br/>Orders later.</h2>
          <p>We will not take paid orders until the physical sample, manufacturing, pricing, delivery coverage and fulfillment process are confirmed.</p>
        </div>
        <div className="commerceFanProcess">
          <article><Footprints size={28}/><span>01 · REGISTER</span><h3>Join the free walk.</h3><p>Choose your city. Raising your hand does not require buying merchandise, and does not confirm a local event.</p></article>
          <article><Fan size={28}/><span>02 · OPT IN</span><h3>Get the Fan alert.</h3><p>Tick the separate, optional Edition 001 checkbox to be notified when Fan ordering opens.</p></article>
          <article><Package size={28}/><span>03 · ORDER LATER</span><h3>Choose when ready.</h3><p>When sales open, we will publish the confirmed price, shipping options, delivery estimates and terms before checkout.</p></article>
        </div>
        <p className="commerceFanDeliveryNote"><Truck size={18}/> Home shipping and collection in confirmed cities are possibilities under evaluation, not currently available checkout options.</p>
      </section>

      <section className="commerceSystem" id="fan-impact">
        <div className="commerceFanImpact">
          <HeartHandshake size={29}/>
          <div>
            <h2>Ridiculous fun. Real purpose.</h2>
            <p>For each confirmed walk city, PlanetHike commits 20% of qualifying Chaos Fan sales revenue to a local cleft organisation selected by the local walk organisation. The recipient and final contribution will be reported after the relevant Fan-sales period closes.</p>
            <p>Free participation is never conditional on purchasing the Fan.</p>
          </div>
        </div>
      </section>

      <section className="commerceCta">
        <p className="commerceEyebrow">EDITION 001 · FAN LAUNCH ALERT</p>
        <h2>First in line.<br/>Still free to walk.</h2>
        <p>Register your interest in The Chaos Walk. Tick the optional Fan alert for news of Edition 001. No payment is taken.</p>
        <a href="/#join" className="commercePrimary">Get the Fan launch alert <ArrowRight size={17}/></a>
      </section>
    </main>
  );
}
