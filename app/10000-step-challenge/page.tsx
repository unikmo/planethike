import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: '10,000 Step Challenge | Free Social Walking Challenge | PlanetHike',
  description: 'Take on a 10,000 step challenge with PlanetHike and make the distance memorable through The Chaos Walk planned for May 2027.',
  alternates: { canonical: '/10000-step-challenge' },
};

export default function Page() {
  return <SeoLanding
    eyebrow="10,000 STEPS / ZERO BORING"
    title="10,000 Step Challenge"
    intro="Looking for a 10,000-step challenge? PlanetHike gives the familiar goal a distinctive social format: free first-access, city-aware participation and Chaos Drops along the way."
    bullets={['Built around 10,000 steps','Free first-access','Walk with a city or group','No race pace required']}
    sections={[
      {heading:'Why 10,000 steps?',body:'It is a simple, widely understood target that makes participation easy to explain and easy to share. PlanetHike uses it as the canvas for a more memorable event.'},
      {heading:'A challenge, not a race',body:'The Chaos Walk is not about finish times. The experience is paced around social moments, city challenges and the shared visual signature of two different shoes and one Chaos Fan.'},
      {heading:'Walk together',body:'Individuals, friends, companies and local crews can all join first-access. Local city event details are published only after readiness is confirmed.'},
      {heading:'Merchandise stays optional',body:'The Chaos Fan is planned as the first official product, but sales are not open yet and no purchase is required to join. Any future impact-linked contribution will be published only after verification.'}
    ]}
    faq={[
      {q:'How many miles is 10,000 steps?',a:'It varies by stride length. Our detailed guide explains the usual range and how to estimate your own distance.'},
      {q:'How long does 10,000 steps take?',a:'Walking speed varies, but many people take roughly 1.5 to 2 hours of active walking. The Chaos Walk may take longer because challenge moments are part of the experience.'},
      {q:'Can beginners join?',a:'Yes. It is a walking challenge, not a race. Build up at your own pace and use the event as a social goal.'}
    ]}
  />;
}
