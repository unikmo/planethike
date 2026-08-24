import type { Metadata } from 'next';
import SeoLanding from '../../SeoLanding';

export const metadata: Metadata = {
  title: 'Chaos Fan | Edition 001 Preview | PlanetHike',
  description: 'Preview the planned Chaos Fan for The Chaos Walk. Product specifications, price, fulfilment and cause-linked contribution mechanics are still being verified.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/shop/chaos-fan' },
};

export default function Page() {
  return (
    <SeoLanding
      eyebrow="EDITION 001 / PRODUCT PREVIEW"
      title="The Chaos Fan"
      intro="The Chaos Fan is planned as the shared visual object of The Chaos Walk. It is not currently for sale, and PlanetHike is not publishing a final price or sales-linked cause promise until those mechanics are verified."
      bullets={['Shared visual ritual', 'Product testing in progress', 'Price not final', 'Checkout not open']}
      sections={[
        { heading: 'Why a hand fan?', body: 'The concept is useful during a walk, visually strong in group photographs and easy to integrate into shared challenge moments.' },
        { heading: 'Built for the ritual', body: 'The planned experience uses the fan for group waves, portraits and the finish ritual so it has an event job rather than functioning as generic merchandise.' },
        { heading: 'What still needs verification?', body: 'Materials, final design, production cost, fulfilment coverage, selling price and any cause-linked contribution mechanics remain prelaunch decisions.' },
        { heading: 'When does sale open?', body: 'Only after PlanetHike has verified the product and commerce model. First-access subscribers will receive the confirmed details when they are ready.' },
      ]}
      ctaLabel="Join first access"
      ctaHref="/join"
      secondaryLabel="Back to The Chaos Walk"
      secondaryHref="/the-chaos-walk"
    />
  );
}
