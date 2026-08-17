import { ArrowLeft, ArrowRight, HeartHandshake, Eye, ReceiptText } from 'lucide-react';

export default function SurgeryPage() {
  return (
    <main>
      <header className="subHeader darkHeader">
        <a className="brand" href="/">PLANET<span>HIKE</span></a>
        <a className="textLink" href="/"><ArrowLeft size={15}/> Back to Chaos Walk</a>
      </header>

      <section className="surgeryHeroPage">
        <div className="surgeryHeroPhoto" aria-hidden="true" />
        <div className="surgeryHeroShade" />
        <div className="surgeryHeroCopy">
          <p className="sectionKicker light">THE CHAOS MASK / THE HUMAN MISSION</p>
          <h1>A MASK<br/>THAT HELPS<br/><em>RESTORE A FACE.</em></h1>
          <p>Every Chaos Walk needs an unmistakable symbol. Ours should also do something real.</p>
        </div>
      </section>

      <section className="surgeryStatement">
        <div className="sectionKicker">WHY THIS CAUSE</div>
        <h2>VISIBLE DIFFERENCE.<br/>VISIBLE IMPACT.</h2>
        <p>PlanetHike is shifting its social mission toward reconstructive mouth and nose surgery. A defined share of proceeds from the official Chaos Mask will be directed to qualified partner organisations delivering reconstructive care.</p>
      </section>

      <section className="impactPrinciples">
        <article>
          <HeartHandshake size={30}/>
          <strong>Human, not abstract</strong>
          <p>Participants can understand exactly what the mission is trying to change in another person’s life.</p>
        </article>
        <article>
          <Eye size={30}/>
          <strong>Transparent by design</strong>
          <p>Before mask sales open, PlanetHike will publish the partner, allocation method and reporting standard.</p>
        </article>
        <article>
          <ReceiptText size={30}/>
          <strong>Track the money</strong>
          <p>Impact reporting should show masks sold, funds allocated and procedures supported—not vague “awareness” claims.</p>
        </article>
      </section>

      <section className="maskStory">
        <div className="maskStoryVisual">
          <span>EDITION 001</span>
          <strong>THE<br/>CHAOS<br/>MASK</strong>
          <small>MAY 2027</small>
        </div>
        <div className="maskStoryCopy">
          <p className="sectionKicker">THE OBJECT</p>
          <h2>WEAR THE SYMBOL.<br/>FUND THE WORK.</h2>
          <p>Registration stays free. The official Chaos Mask is the required visual symbol of the event and the product that carries the surgery mission.</p>
          <p>Each annual edition can become collectible while maintaining one clear promise: part of its economics goes toward reconstructive care.</p>
          <a href="/#join" className="button buttonDark">Pre-register for Edition 001 <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="surgeryTransparency">
        <p className="sectionKicker light">NO VAGUE CHARITY LANGUAGE</p>
        <h2>WE WILL PUBLISH<br/>THE RECEIPTS.</h2>
        <p>Partner names, the exact contribution formula, disbursements and outcome reporting will be published before public mask sales begin. Until those agreements are signed, PlanetHike will not claim a fixed amount per mask.</p>
      </section>
    </main>
  );
}
