'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from './PreregisterForm.module.css';
import { participationCountries } from './locations';

export default function CityLeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setMessage('Your City Lead application is in. We’ll review the city, local capacity and operating fit before any city is presented as confirmed.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit the City Lead application right now.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}><Check size={24} /></div>
        <strong>APPLICATION RECEIVED.</strong>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.row}>
        <label>
          <span>First name</span>
          <input name="first_name" autoComplete="given-name" maxLength={80} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>Country</span>
          <select name="country_code" defaultValue="" required>
            <option value="" disabled>Select country</option>
            {participationCountries.map((country) => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>City you want to lead</span>
          <input name="city" autoComplete="address-level2" maxLength={100} required />
        </label>
      </div>

      <label>
        <span>What local organising experience do you have?</span>
        <textarea name="organizer_experience" maxLength={1200} placeholder="Community events, school/PTA, club, charity, company, sports, volunteer coordination, permits or anything relevant." required />
      </label>

      <div className={styles.row}>
        <label>
          <span>Crew you could start with</span>
          <select name="crew_capacity" defaultValue="" required>
            <option value="" disabled>Select</option>
            <option value="solo">Just me for now</option>
            <option value="1-2">1–2 other people</option>
            <option value="3-5">3–5 other people</option>
            <option value="6+">6+ other people</option>
          </select>
        </label>
        <label>
          <span>Local reach</span>
          <select name="local_reach" defaultValue="" required>
            <option value="" disabled>Select</option>
            <option value="starting">Starting from scratch</option>
            <option value="some">Some community / group reach</option>
            <option value="strong">Strong local network</option>
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>Languages</span>
          <input name="languages" maxLength={160} placeholder="e.g. English, German" />
        </label>
        <label>
          <span>Anything we should know?</span>
          <input name="notes" maxLength={400} placeholder="Optional" />
        </label>
      </div>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="yes" required />
        <span>I agree that PlanetHike may use these details to review my City Lead application and contact me about the 2027 event. See the <a href="/privacy">privacy notice</a>.</span>
      </label>

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Apply to lead my city'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>

      <p className={styles.microcopy}>Applying does not confirm a city. PlanetHike will only list a city as confirmed after readiness review.</p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
