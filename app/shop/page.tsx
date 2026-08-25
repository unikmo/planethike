import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Fan, MapPin, Package, Shirt, Truck } from 'lucide-react';
import MobileMenu from '../MobileMenu';

export const metadata: Metadata = {
  title: 'Chaos Shop | Fan, Mismatch Socks, Tees & Event Bundles | PlanetHike',
  description: 'Discover Chaos Fan Edition 001, mismatch socks, colourful tees, bandanas and event bundles for The Chaos Walk in May 2027.',
  alternates: { canonical: '/shop' },
};

const products = [
  {
    kicker: 'THE ICON · EDITION 001',
    title: 'Chaos Fan\nEdition 001',
    price: '€19.99',
    note: 'The folding hand fan made for the city-wide fan shot, the walk and the photo you keep afterwards.',
    className: 'commerceProductFan',
  },
  {
    kicker: 'THE PAIR THAT ISN’T A PAIR',
    title: 'Mismatch\nSocks',
    price: 'PRICE COMING SOON',
    note: 'Two deliberately different socks in one pack. Because matching your socks on Chaos Walk day would be suspicious.',
    className: 'commerceProductSocks',
  },
  {
    kicker: 'OFF COLOUR · ON PURPOSE',
    title: 'Chaos\nTee',
    price: 'PRICE COMING SOON',
    note: 'Bright, clash-ready colour for people who want to turn the volume up without wearing an event uniform.',
    className: 'commerceProductTee',
  },
  {
    kicker: 'ONE MORE WRONG COLOUR',
    title: 'Chaos\nBandana',
    price: 'PRICE COMING SOON',
    note: 'Wear it, tie it to a bag or wave it. A small extra hit of colour for a day when normal is off duty.',
    className: 'commerceProductBandana',
  },
];

const bundles = [
  ['01', 'The Signature Set', 'Chaos Fan + mismatch socks. Two PlanetHike signatures in one easy choice.'],
  ['02', 'The Chaos Kit', 'Chaos Fan + mismatch socks + Chaos Tee + bandana. Maximum colour, minimum decision-making.'],
  ['03', 'City Chaos Box', 'Group packs for teams, clubs and confirmed city crews. Built for bigger orders and event-day collection.'],
];

export default function ShopPage() {
  return (
    <main className="commercePage">
      <header className="commerceHeader">
        <a className="luxBrand" href="/">PLANETHIKE</a>
        <nav className="commerceNav" aria-label="Shop navigation">
          <a href="#products">The drop</a>
          <a href="#bundles">Bundles</a>
          <a href="#delivery">Delivery</a>
        </nav>
        <a className="commerceBack" href="/"><ArrowLeft size={15}/> Back to The Chaos Walk</a>
        <MobileMenu />
      </header>

      <section className="commerceHero">
        <div className="commerceHeroCopy">
          <p className="commerceEyebrow">THE CHAOS SHOP · EDITION 001 · MAY 2027</p>
          <h1>The walk is free.<br/><em>The look is yours.</em></h1>
          <p>Start with the Chaos Fan. Add mismatch socks, a deliberately loud tee or one more wrong colour. Nothing here is a uniform. Everything is made to help the day look unmistakably different.</p>
          <div className="commerceHeroActions">
            <a href="/#join" className="commercePrimary">Tell me when the shop opens <ArrowRight size={17}/></a>
            <a href="#delivery" className="commerceSecondary">How delivery works <ArrowRight size={17}/></a>
          </div>
          <small>Edition 001 opens before The Chaos Walk. Final prices and country availability will be shown before ordering begins.</small>
        </div>
        <div className="commerceHeroMedia" role="img" aria-label="Colourful PlanetHike folding hand fan held by a participant" />
      </section>

      <section className="commerceProducts" id="products">
        <div className="commerceSectionHead">
          <p className="commerceEyebrow">01 · THE DROP</p>
          <h2>Four things.<br/>Plenty of chaos.</h2>
          <p>The rule is simple: every piece should help you look more like yourself on the one day everybody is invited to dress wrong.</p>
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
          <h2>Pick your level of wrong.</h2>
          <p>One icon, one easy set or the full colour hit. The choice should take seconds.</p>
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
          <p className="commerceEyebrow">03 · GET YOUR ORDER</p>
          <h2>To your door.<br/>Or waiting at the walk.</h2>
          <p>Choose the delivery option that works for you when the shop opens.</p>
        </div>
        <div className="commerceDeliveryGrid">
          <article>
            <div className="commerceDeliveryIcon"><Truck size={28}/></div>
            <p className="commerceMini">HOME DELIVERY</p>
            <h3>Deliver to me.</h3>
            <p>Your order is sent directly to the address you choose. Shipping is shown separately when you order.</p>
            <ul>
              <li>Best if you want your gear early.</li>
              <li>Available countries and delivery estimates will be shown in the shop.</li>
              <li>Wear it, clash it and arrive ready.</li>
            </ul>
          </article>
          <article>
            <div className="commerceDeliveryIcon commerceDeliveryIconAlt"><MapPin size={28}/></div>
            <p className="commerceMini">EVENT COLLECTION</p>
            <h3>Collect at my Chaos Walk.</h3>
            <p>Choose event collection for a confirmed city and your order joins the city batch. We send collection stock to the City Lead ahead of the walk so it is ready for you on event day.</p>
            <ul>
              <li>City collection closes earlier than home delivery.</li>
              <li>City Leads receive collection stock at least two weeks before event day.</li>
              <li>Pick up your named order from the event collection point.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="commerceLogistics">
        <div>
          <p className="commerceEyebrow commerceEyebrowLight">04 · CITY COLLECTION</p>
          <h2>Your order.<br/>Already there.</h2>
        </div>
        <div className="commerceTimeline">
          <article><span>ORDER</span><strong>Choose event collection</strong><p>Select your confirmed city when you order.</p></article>
          <article><span>CUTOFF</span><strong>City orders close</strong><p>Each city gets a clearly published collection-order deadline.</p></article>
          <article><span>T−14</span><strong>The city box arrives</strong><p>Collection stock reaches the City Lead at least two weeks before the walk.</p></article>
          <article><span>EVENT DAY</span><strong>Collect + walk</strong><p>Pick up your order, put the colours on and join the chaos.</p></article>
        </div>
      </section>

      <section className="commerceSystem">
        <div className="commerceSystemGrid">
          <article><Fan size={25}/><strong>The icon</strong><p>Chaos Fan Edition 001 is the object designed to show up in thousands of photographs.</p></article>
          <article><Shirt size={25}/><strong>Your clothes. Louder.</strong><p>The apparel adds colour without turning participants into a matching team.</p></article>
          <article><Package size={25}/><strong>Built for cities</strong><p>Direct delivery for individuals. Grouped event collection for confirmed city walks.</p></article>
        </div>
        <p className="commerceSystemNote">The walk is free. Buying PlanetHike merchandise is not an entry requirement. Cause and contribution details will be published before Edition 001 sales open.</p>
      </section>

      <section className="commerceCta">
        <p className="commerceEyebrow">EDITION 001 · MAY 2027</p>
        <h2>Be there<br/>before the drop.</h2>
        <p>Pre-register and tick the Chaos Shop alert. We’ll tell you when Edition 001 opens.</p>
        <a href="/#join" className="commercePrimary">Get the Edition 001 alert <ArrowRight size={17}/></a>
      </section>
    </main>
  );
}
