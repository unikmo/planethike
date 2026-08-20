/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/pledge', destination: '/walk-for-a-cause', permanent: true },
      { source: '/regreenitycoin', destination: '/the-cause', permanent: true },
      { source: '/my-steps', destination: '/10000-step-challenge', permanent: true },
      { source: '/city-hosts', destination: '/city-leads', permanent: true },
      { source: '/register', destination: '/join', permanent: true },
      { source: '/registration', destination: '/join', permanent: true },
    ];
  },
};

export default nextConfig;
