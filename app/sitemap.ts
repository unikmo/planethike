import type { MetadataRoute } from 'next';

const core = [
  '',
  '/the-chaos-walk',
  '/10000-step-challenge',
  '/walk-for-a-cause',
  '/companies',
  '/groups',
  '/cities',
  '/city-leads',
  '/the-cause',
  '/schools',
  '/shop',
  '/shop/chaos-fan',
  '/join',
  '/guides',
  '/partners',
  '/about',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/imprint',
];

const guides = [
  '/guides/how-many-miles-is-10000-steps',
  '/guides/how-long-to-walk-10000-steps',
  '/guides/10000-steps-in-km',
  '/guides/10000-steps-calories',
  '/guides/10k-walk-training-plan',
  '/guides/walking-challenge-team-names',
  '/guides/walking-challenge-ideas',
  '/guides/how-to-organize-a-charity-walk',
  '/guides/how-to-start-a-walking-group',
  '/guides/walking-scavenger-hunt',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...core, ...guides].map((path) => ({
    url: `https://planethike.org${path}`,
    changeFrequency: path.startsWith('/guides/') ? 'monthly' : 'weekly',
    priority: path === '' ? 1 : path === '/guides' ? 0.8 : path.startsWith('/guides/') ? 0.7 : 0.85,
  }));
}
