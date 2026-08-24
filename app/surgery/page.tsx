import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'PlanetHike Cause Model',
  robots: { index: false, follow: true },
};

export default function SurgeryPage() {
  redirect('/the-cause');
}
