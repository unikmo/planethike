'use client';

export type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem('planethike_analytics_consent') !== 'granted') return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') gtag('event', name, params);
}
