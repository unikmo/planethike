'use client';

import { FormEvent, useRef, useState } from 'react';
import styles from './CityLeadApplicationForm.module.css';
import { participationCountries } from './locations';
import { trackEvent } from './analytics';

export default function CityLeadApplicationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const started = useRef(false);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackEvent('city_lead_start');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch('/api/city-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to submit application.');

      setStatus('success');
      trackEvent('city_lead_submit', { country_code: String(payload.country_code || '') });
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit application.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <h2>Application received.</h2>
        <p>Thanks for raising your hand. We’ll review your application and contact you about the next step for your city.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit} onFocusCapture={markStarted}>
      <div className={styles.row}>
        <label>
          <span>First name</span>
          <input name="first_name" autoComplete="given-name" maxLength={80} required />
        </label>
        <label>
          <span>Last name</span>
          <input name="last_name" autoComplete="family-name" maxLength={80} required />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label>
          <span>Your local connection</span>
          <input name="current_role" maxLength={160} placeholder="e.g. club organiser, teacher, volunteer lead" required />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>Country</span>
          <select name="country_code" defaultValue="" required>
            <option value="" disabled>Select country</option>
            {participationCountries.map((country) => <option key={country.code} value={country.code}>{country.name}</option>)}
          </select>
        </label>
        <label>
          <span>City you want to lead</span>
          <input name="city" maxLength={120} placeholder="City" required />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>Your local network</span>
          <select name="local_network" defaultValue="some" required>
            <option value="small">I am starting with a small network</option>
            <option value="some">I can reach local groups or communities</option>
            <option value="strong">I already lead or coordinate an active local network</option>
          </select>
        </label>
        <label>
          <span>Your crew today</span>
          <select name="crew_status" defaultValue="need_recruit" required>
            <option value="need_recruit">I would need to recruit a crew</option>
            <option value="one_or_two">I already have 1–2 possible helpers</option>
            <option value="crew_ready">I have a small crew ready to talk</option>
          </select>
        </label>
      </div>

      <label>
        <span>Organising or volunteering experience</span>
        <textarea name="organizing_experience" maxLength={1800} placeholder="Events, clubs, community work, school activities, sports, volunteering — tell us what you have done." required />
      </label>

      <label>
        <span>Why this city, and why you?</span>
        <textarea name="motivation" maxLength={1800} placeholder="What makes you want to start The Chaos Walk locally?" required />
      </label>

      <fieldset className={styles.checks}>
        <legend>A few things to know</legend>
        <label className={styles.checkLabel}>
          <input name="route_permit_ack" type="checkbox" required />
          <span>I understand that the city will need a suitable route and any locally required permissions.</span>
        </label>
        <label className={styles.checkLabel}>
          <input name="safety_accessibility_ack" type="checkbox" required />
          <span>I understand that safety, accessibility and a clear volunteer plan are part of bringing the event to my city.</span>
        </label>
        <label className={styles.checkLabel}>
          <input name="privacy_accepted" type="checkbox" required />
          <span>I have read the <a href="/privacy">privacy notice</a> and agree to the processing needed to review this application.</span>
        </label>
        <label className={styles.checkLabel}>
          <input name="marketing_consent" type="checkbox" />
          <span>Send me occasional PlanetHike organiser and event updates. I can unsubscribe at any time.</span>
        </label>
      </fieldset>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Submit City Lead application'}
      </button>
      <p className={styles.note}>Submitting starts the conversation; your city is announced only after the local plan is agreed.</p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
