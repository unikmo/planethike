import type { Metadata } from 'next';
import './globals.css';
import './subpages.css';
import './chaos2027.css';
import './hero-approved.css';
import './hero-final.css';

export const metadata: Metadata = {
  title: 'PlanetHike — The world’s most unforgettable walks',
  description:
    'PlanetHike creates unforgettable themed walks around the world. Pre-register free for The Chaos Walk, coming May 2027: two different shoes, one annual Chaos Fan, city-led local crews, 10K challenges and a reconstructive surgery mission.',
  metadataBase: new URL('https://planethike.org'),
  openGraph: {
    title: 'The Chaos Walk — PlanetHike',
    description: 'For misfits, rebels & originals. Free pre-registration is open for May 2027.',
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
