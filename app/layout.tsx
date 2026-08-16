import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PlanetHike — The world’s most unforgettable walks',
  description:
    'PlanetHike creates unforgettable themed walks around the world. Pre-register now for The Chaos Walk, coming May 2027.',
  metadataBase: new URL('https://planethike.org'),
  openGraph: {
    title: 'The Chaos Walk — PlanetHike',
    description: 'For misfits, rebels & originals. Pre-registration is now open for May 2027.',
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
