'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from './PreregisterForm.module.css';
import { participationCountries } from './locations';

export default function PreregisterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch('/api/preregister', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setMessage('You’re on the first-access list. We’ll send the confirmed May 2027 date, city news and next steps when they are ready.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to join the first-access list right now.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}><Check size={24} /></div>
        <strong>YOU’RE IN EARLY.</strong>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.row}>
        <label>
          <span>First name</span>
          <input name="first_name" autoComplete="given-name" maxLength={80} placeholder="First name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@email.com" required />
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
          <span>City</span>
          <input name="city" autoComplete="address-level2" maxLength={100} placeholder="Your city" required />
        </label>
      </div>

      <input type="hidden" name="interest" value="walker" />
      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="yes" required />
        <span>I agree that PlanetHike may use these details to manage my first-access request and send event updates. See the <a href="/privacy">privacy notice</a>.</span>
      </label>

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining…' : 'Join the first-access list'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>

      <p className={styles.microcopy}>Free. No payment. This is an early-interest list, not a confirmed event registration. Cities and the exact May 2027 date will be announced only after they are verified.</p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
