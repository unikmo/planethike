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
    'PlanetHike is building The Chaos Walk — a global 10,000-step walking event planned for May 2027. City Lead applications and participant first access are open.',
  metadataBase: new URL('https://planethike.org'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PlanetHike — The Chaos Walk',
    description: 'The Chaos Walk is planned for May 2027. Apply to lead your city or join the participant first-access list.',
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
