export const siteConfig = {
  brand: {
    name: 'PlanetHike',
    domain: 'https://planethike.org',
    promise: 'We create the world’s most unforgettable walks.',
  },
  operator: {
    name: 'PlanetHike OÜ',
    registrationNumber: '17233027',
    status: 'working-staging-assumption',
  },
  event: {
    name: 'The Chaos Walk',
    edition: 'Edition 001',
    month: 'May 2027',
    exactDate: null,
    registrationStatus: 'first-access',
    firstAccessPrice: 0,
    participationPrice: null,
  },
  cause: {
    status: 'partner-verification-pending',
    publicContributionClaimAllowed: false,
    publicPartnerClaimAllowed: false,
  },
  commerce: {
    status: 'prelaunch',
    checkoutEnabled: false,
    publicPriceClaimAllowed: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
