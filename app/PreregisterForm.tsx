'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from './PreregisterForm.module.css';
import { participationCountries } from './locations';

export default function PreregisterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const selectedCountry = useMemo(
    () => participationCountries.find((country) => country.code === countryCode),
    [countryCode],
  );

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
      setMessage('You’re on the first-access list. We’ll send the May 2027 date, city news and next steps first.');
      event.currentTarget.reset();
      setCountryCode('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to pre-register right now.');
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
          <input name="first_name" autoComplete="given-name" maxLength={80} placeholder="Tichi" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@email.com" required />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>Country</span>
          <select name="country_code" value={countryCode} onChange={(event) => setCountryCode(event.target.value)} required>
            <option value="" disabled>Select country</option>
            {participationCountries.map((country) => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>City</span>
          <select name="city" defaultValue="" disabled={!selectedCountry} required>
            <option value="" disabled>{selectedCountry ? 'Select city' : 'Choose country first'}</option>
            {selectedCountry?.cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label>
          <span>I want to</span>
          <select name="interest" defaultValue="walker">
            <option value="walker">Join the walk</option>
            <option value="host">Lead my city</option>
            <option value="volunteer">Volunteer with my city crew</option>
            <option value="team">Bring a group / team</option>
          </select>
        </label>
        <div aria-live="polite">
          <span className={styles.availabilityLabel}>Chaos Fan availability</span>
          <p className={styles.availabilityText}>
            {!selectedCountry
              ? 'Select your country to see the launch setup.'
              : selectedCountry.commerce
                ? 'Official Chaos Fan shop planned for this market.'
                : 'Participation is open. Make your own Chaos Fan locally — no purchase required.'}
          </p>
        </div>
      </div>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining…' : 'Pre-register free'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>

      <p className={styles.microcopy}>Free registration. No payment. Where official PlanetHike delivery is not available, walkers can make their own Chaos Fan locally and participate fully.</p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
