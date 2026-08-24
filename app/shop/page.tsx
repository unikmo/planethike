import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Fan } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chaos Shop | Prelaunch | PlanetHike',
  description: 'The PlanetHike Chaos Shop is in prelaunch. Product pricing, fulfilment markets and any cause-linked contribution mechanics will be published only after verification.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/shop' },
};

export default function ShopPage() {
  return (
    <main>
      <header className="subHeader darkHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
      </header>

      <section className="shopHero">
        <div>
          <p className="sectionKicker">EDITION 001 / PRELAUNCH</p>
          <h1>THE<br/>CHAOS<br/>SHOP.</h1>
        </div>
        <div>
          <p>The Chaos Fan is planned as the shared visual object of Edition 001. Checkout is not open and no public product price or cause-linked contribution amount is final yet.</p>
          <a href="/join" className="button buttonDark">Get first access <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="shopCards">
        <article className="shopCard">
          <span>THE ICON</span>
          <div>
            <h2>CHAOS<br/>FAN</h2>
            <strong><Fan size={36}/></strong>
          </div>
          <p>Planned as a useful, photogenic ritual object for shared fan waves, challenge moments and the finish.</p>
        </article>
        <article className="shopCard">
          <span>STATUS</span>
          <div>
            <h2>PRICING<br/>PENDING</h2>
            <strong>—</strong>
          </div>
          <p>Pricing and unit economics must pass fulfilment testing before public sale.</p>
        </article>
        <article className="shopCard">
          <span>CAUSE MODEL</span>
          <div>
            <h2>VERIFY<br/>FIRST</h2>
            <strong>—</strong>
          </div>
          <p>Any sales-linked cause commitment will be published only after partner and settlement mechanics are verified.</p>
        </article>
      </section>

      <section className="shopPolicy">
        <div>
          <p className="sectionKicker">PRELAUNCH RULE</p>
          <h2>NO CHECKOUT<br/>BEFORE THE<br/>MODEL WORKS.</h2>
        </div>
        <div>
          <p>PlanetHike is testing product, fulfilment, market coverage and cost before enabling commerce.</p>
          <p>The event concept is not dependent on a purchase. Final participation and fan guidance will be published with the confirmed event details.</p>
          <p>Until then, the shop remains informational and excluded from search indexing.</p>
        </div>
      </section>
    </main>
  );
}
