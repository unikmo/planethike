import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'The Chaos Walk FAQ | PlanetHike',
  description: 'Answers about PlanetHike first-access, May 2027 timing, city confirmation, City Leads, the Chaos Fan and the planned human-impact model.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return <SeoLanding
    eyebrow="FAQ / CURRENT LAUNCH STATUS"
    title="Questions before you join"
    intro="The shortest version: first-access is open, the exact May 2027 date is still to be announced, city interest is not the same as a confirmed event and Chaos Fan sales are not open yet."
    faq={[
      {q:'Is The Chaos Walk free?',a:'The current participation model is free. Merchandise is separate and optional.'},
      {q:'Is May 2027 the final date?',a:'May 2027 is the current launch month. The exact event date has not yet been announced.'},
      {q:'If my city appears in the form, is the event confirmed there?',a:'No. The city list is used to capture demand. A city becomes confirmed only after an approved City Lead, local operating readiness and publishable event details are in place.'},
      {q:'What happens after I join first-access?',a:'PlanetHike can send confirmed date, city and participation information when it is ready. If you request the Chaos Fan alert, you can also be notified when verified sales open.'},
      {q:'Can I become a City Lead?',a:'Yes. Use the dedicated City Lead application. Submission is reviewed and does not automatically confirm you or your city.'},
      {q:'Can I buy the Chaos Fan now?',a:'No. The current page is a preview. Sales open only after checkout, fulfilment, shipping, returns and any impact-linked contribution are verified.'},
      {q:'Does each fan already fund reconstructive surgery?',a:'No active production contribution is being claimed in this build. PlanetHike intends to publish the partner, exact contribution rule, settlement process and reporting standard before impact-linked sales open.'},
      {q:'Do I need a Chaos Fan to participate?',a:'No purchase is intended to be required. A DIY fan route is planned where official commerce is unavailable.'}
    ]}
  />;
}
