import { ArrowLeft, ArrowRight, Eye, HeartHandshake, ReceiptText } from 'lucide-react';

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
          <p className="sectionKicker light">THE CHAOS FAN / THE HUMAN MISSION</p>
          <h1>A FUN OBJECT.<br/>A SERIOUS<br/><em>HUMAN CAUSE.</em></h1>
          <p>The symbol of the walk should be useful, visible and capable of doing something real after the photos are taken.</p>
        </div>
      </section>

      <section className="surgeryStatement">
        <div className="sectionKicker">WHY THIS CAUSE</div>
        <h2>VISIBLE DIFFERENCE.<br/>VISIBLE IMPACT.</h2>
        <p>PlanetHike supports partner-led reconstructive mouth and nose surgery. For every official Chaos Fan sold, €3 is committed to qualified surgery organisations delivering reconstructive care.</p>
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
          <p>PlanetHike will publish partner organisations, fan sales and transferred surgery contributions.</p>
        </article>
        <article>
          <ReceiptText size={30}/>
          <strong>Track the money</strong>
          <p>Reporting should show official fans sold, funds allocated and procedures supported—not vague awareness claims.</p>
        </article>
      </section>

      <section className="maskStory">
        <div className="maskStoryVisual">
          <span>EDITION 001</span>
          <strong>THE<br/>CHAOS<br/>FAN</strong>
          <small>MAY 2027</small>
        </div>
        <div className="maskStoryCopy">
          <p className="sectionKicker">THE OBJECT</p>
          <h2>OPEN THE FAN.<br/>FUND THE WORK.</h2>
          <p>Registration stays free. In commerce-enabled countries, the official 2027 Chaos Fan is €19.99. It becomes the event’s shared visual object for fan waves, challenge moments, portraits and the finish ritual.</p>
          <p>€3 from every official fan sold is committed to reconstructive surgery. Each annual edition can become collectible without turning PlanetHike into a pay-to-participate event.</p>
          <a href="/shop" className="button buttonDark">See Edition 001 <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="surgeryTransparency">
        <p className="sectionKicker light">NO VAGUE CHARITY LANGUAGE</p>
        <h2>€3 PER FAN.<br/>PUBLISH THE RECEIPTS.</h2>
        <p>Before sales open, PlanetHike will publish the selected partner organisations, settlement process, treatment focus and reporting standard. Sales totals, committed funds and disbursements will be reported transparently.</p>
      </section>
    </main>
  );
}
