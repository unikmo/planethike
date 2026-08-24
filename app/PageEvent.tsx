'use client';

import { useEffect } from 'react';
import { AnalyticsParams, trackEvent } from './analytics';

export default function PageEvent({ name, params = {} }: { name: string; params?: AnalyticsParams }) {
  useEffect(() => {
    trackEvent(name, params);
  }, [name, params]);

  return null;
}
