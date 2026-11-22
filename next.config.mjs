/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Content-Security-Policy', value: [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'none'",
          "form-action 'self'",
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data: https:",
          "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com",
        ].join('; ') },
      ],
    }];
  },
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
