/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/pledge', destination: '/walk-for-a-cause', permanent: true },
      { source: '/impact-pledge', destination: '/walk-for-a-cause', permanent: true },
      { source: '/regreenitycoin', destination: '/about#history', permanent: true },
      { source: '/regreenity-coin', destination: '/about#history', permanent: true },
      { source: '/my-steps', destination: '/10000-step-challenge', permanent: true },
      { source: '/city-hosts', destination: '/city-leads', permanent: true },
      { source: '/register', destination: '/join', permanent: true },
      { source: '/registration', destination: '/join', permanent: true },
      { source: '/reg-individual', destination: '/join', permanent: true },
      { source: '/register-as-team-company-school', destination: '/join', permanent: true },
      { source: '/how-it-works', destination: '/the-chaos-walk', permanent: true },
      { source: '/partners', destination: '/about#partners', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/terms_conditions', destination: '/terms', permanent: true },
      { source: '/cookie-policy', destination: '/privacy', permanent: true },
      { source: '/surgery', destination: '/the-cause', permanent: true },
    ];
  },
};

export default nextConfig;
