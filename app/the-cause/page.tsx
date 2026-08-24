import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Planned Human Mission | PlanetHike',
  description: 'PlanetHike intends to link future official Chaos Fan sales to transparent reconstructive-surgery support. Partner and contribution mechanics will be published before sales open.',
  alternates: { canonical: '/the-cause' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="THE HUMAN MISSION / VERIFICATION BEFORE PROMISES"
    title="Have fun. Build impact credibly."
    intro="The Chaos Walk is designed to be desirable on its own. PlanetHike intends to connect future official Chaos Fan sales to reconstructive-surgery support, but the production promise will not be activated until the partner and money flow are verified."
    bullets={['Participation stays free','No active donation claim before partner proof','Contribution mechanics published before sales','Public reporting planned for any activated model']}
    sections={[
      {heading:'Why reconstructive surgery?',body:'PlanetHike is exploring a human-impact focus around reconstructive mouth and nose care because the outcomes can touch breathing, eating, speech, appearance, confidence and daily participation.'},
      {heading:'What is not yet locked',body:'The final partner organization, contribution amount, settlement cadence, treatment scope and public reporting standard are not yet being presented as active production facts.'},
      {heading:'What must happen before sales',body:'PlanetHike will publish the selected partner, the exact sales-linked contribution rule, how transfers are made and how results are reported before any impact-linked commerce claim goes live.'},
      {heading:'Cause second. Credibility first.',body:'People should want to join because The Chaos Walk is memorable. The cause should strengthen trust only when PlanetHike can prove exactly what the commercial promise means.'}
    ]}
    secondaryLabel="Preview the Chaos Fan"
    secondaryHref="/shop/chaos-fan"
  />;
}
