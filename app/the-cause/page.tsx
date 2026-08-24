import type { Metadata } from 'next';
import SeoLanding from '../SeoLanding';

export const metadata: Metadata = {
  title: 'PlanetHike Cause Model | Verification in Progress',
  description: 'PlanetHike is evaluating the 2027 cause and contribution model. Partner organisations and any sales-linked contribution mechanics will be published only after verification.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/the-cause' },
};

export default function Page() {
  return (
    <SeoLanding
      eyebrow="THE CAUSE / VERIFICATION IN PROGRESS"
      title="Credibility before claims."
      intro="PlanetHike is evaluating a reconstructive-care cause model for the 2027 Chaos Walk. No charity partner, sales-linked contribution amount or fund-flow promise is presented here as final until the relevant terms are verified."
      bullets={['Partner verification pending', 'Contribution mechanics not final', 'No checkout live', 'Publish proof before promotion']}
      sections={[
        { heading: 'What is being evaluated?', body: 'The current direction is to support qualified organisations working in reconstructive care. The specific partner structure and scope remain subject to verification.' },
        { heading: 'What is not being claimed?', body: 'PlanetHike is not currently presenting a partner logo, fixed per-product contribution, procedure count or transfer mechanism as an approved public commitment.' },
        { heading: 'What happens before launch?', body: 'Before cause-linked commerce is promoted, PlanetHike must verify the partner relationship, settlement mechanics, reporting standard and the exact public wording.' },
        { heading: 'Why publish this page now?', body: 'The earlier PlanetHike site used a different environmental impact model. This page makes the transition explicit instead of allowing old and new claims to coexist without explanation.' },
      ]}
      ctaLabel="Explore The Chaos Walk"
      ctaHref="/the-chaos-walk"
      secondaryLabel="Join first access"
      secondaryHref="/join"
    />
  );
}
