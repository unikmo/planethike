'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import styles from './AnalyticsConsent.module.css';

type Consent = 'granted' | 'denied' | null;

export default function AnalyticsConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [consent, setConsent] = useState<Consent>(null);
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    if (!measurementId) return;
    const stored = window.localStorage.getItem('planethike_analytics_consent');
    if (stored === 'granted' || stored === 'denied') setConsent(stored);
    setDecided(Boolean(stored));
  }, [measurementId]);

  if (!measurementId) return null;

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem('planethike_analytics_consent', value);
    setConsent(value);
    setDecided(true);
  }

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="planethike-ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {!decided && (
        <aside className={styles.banner} aria-label="Analytics choice">
          <p>
            PlanetHike uses optional analytics only after you agree. Registration works without analytics. Read the{' '}
            <a href="/privacy">privacy notice</a>.
          </p>
          <div className={styles.actions}>
            <button type="button" onClick={() => choose('granted')}>Allow analytics</button>
            <button type="button" onClick={() => choose('denied')}>Continue without analytics</button>
          </div>
        </aside>
      )}
    </>
  );
}
