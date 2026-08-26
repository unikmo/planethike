import type { Metadata } from 'next';
import AnalyticsConsent from './AnalyticsConsent';
import './globals.css';
import './subpages.css';
import './chaos2027.css';
import './hero-approved.css';
import './hero-final.css';
import './seo-pages.css';
import './seo-rich.css';
import './navigation.css';
import './premium.css';
import './commerce.css';

export const metadata: Metadata = {
  title: 'PlanetHike — The Chaos Walk',
  description:
    'PlanetHike is building The Chaos Walk: a free global 10,000-step social walking experience planned for May 2027. Exact event dates and local city status will be confirmed before launch.',
  metadataBase: new URL('https://planethike.org'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PlanetHike — The Chaos Walk',
    description:
      'A free 10,000-step social walking experience planned for May 2027. Join the first-access list for city and launch updates.',
    url: 'https://planethike.org',
    siteName: 'PlanetHike',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
