import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PlanetHike — The world’s most unforgettable walks',
  description:
    'PlanetHike creates unforgettable themed walks around the world. Join The Chaos Walk on October 11, 2026.',
  metadataBase: new URL('https://planethike.org'),
  openGraph: {
    title: 'PlanetHike — The world’s most unforgettable walks',
    description: 'Join The Chaos Walk. For misfits, rebels & originals.',
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
