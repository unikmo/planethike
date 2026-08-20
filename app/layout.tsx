import type { Metadata } from 'next';
import './globals.css';
import './subpages.css';
import './chaos2027.css';
import './hero-approved.css';
import './hero-final.css';
import './seo-pages.css';

export const metadata: Metadata = {
  title: 'PlanetHike — The world’s most unforgettable walks',
  description:
    'PlanetHike is the home of The Chaos Walk — a free global 10,000-step walking challenge for misfits, rebels and originals, coming May 2027.',
  metadataBase: new URL('https://planethike.org'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PlanetHike — The Chaos Walk',
    description: 'A free global 10,000-step walking challenge for misfits, rebels & originals. Pre-registration is open for May 2027.',
    url: 'https://planethike.org',
    siteName: 'PlanetHike',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
