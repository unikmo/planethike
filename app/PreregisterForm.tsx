'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from './PreregisterForm.module.css';
import { participationCountries } from './locations';
import { trackEvent } from './analytics';

const OTHER_CITY = 'City not yet listed';

export default function PreregisterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [citySelection, setCitySelection] = useState('');
  const [submittedInterest, setSubmittedInterest] = useState('walker');
  const [fanAlertRequested, setFanAlertRequested] = useState(false);
  const started = useRef(false);

  const selectedCountry = useMemo(
    () => participationCountries.find((country) => country.code === countryCode),
    [countryCode],
  );

  function markStarted() {
    if (started.current) return;
    started.current = true;
    trackEvent('preregister_start');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const interest = String(payload.interest || 'walker');
    const fanAlert = payload.merchandise_interest === 'on';

    try {
      const response = await fetch('/api/preregister', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');

      setSubmittedInterest(interest);
      setFanAlertRequested(fanAlert);
      setStatus('success');
      setMessage(
        'You’re on the May 2027 first-access list. We’ll send confirmed date and city information when it is ready. Joining this list does not yet confirm a local event.',
      );
      trackEvent('preregister_submit', {
        interest,
        country_code: String(payload.country_code || ''),
        merchandise_interest: fanAlert,
      });
      event.currentTarget.reset();
      setCountryCode('');
      setCitySelection('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to join the first-access list right now.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}><Check size={24} /></div>
        <strong>YOU’RE ON THE LIST.</strong>
        <p>{message}</p>
        {fanAlertRequested && <p className={styles.successNote}>Chaos Fan launch alert requested. Sales are not open yet.</p>}
        <div className={styles.successActions}>
          <a href="/shop">Preview the Chaos Fan <ArrowRight size={16} /></a>
          {submittedInterest === 'host' && <a href="/city-leads/apply">Complete City Lead application <ArrowRight size={16} /></a>}
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit} onFocusCapture={markStarted}>
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
          <select
            name="country_code"
            value={countryCode}
            onChange={(event) => {
              setCountryCode(event.target.value);
              setCitySelection('');
            }}
            required
          >
            <option value="" disabled>Select country</option>
            {participationCountries.map((country) => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>City / interest location</span>
          <select
            name="city"
            value={citySelection}
            onChange={(event) => setCitySelection(event.target.value)}
            disabled={!selectedCountry}
            required
          >
            <option value="" disabled>{selectedCountry ? 'Select city' : 'Choose country first'}</option>
            {selectedCountry?.cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
      </div>

      {citySelection === OTHER_CITY && (
        <label>
          <span>Your city</span>
          <input
            name="custom_city"
            autoComplete="address-level2"
            maxLength={80}
            placeholder="Enter your city"
            required
          />
        </label>
      )}

      <div className={styles.row}>
        <label>
          <span>I want to</span>
          <select name="interest" defaultValue="walker">
            <option value="walker">Join the first-access list as a walker</option>
            <option value="team">Bring a group / team</option>
            <option value="volunteer">Volunteer with a future city crew</option>
            <option value="host">Express interest in leading my city</option>
          </select>
        </label>
        <div aria-live="polite">
          <span className={styles.availabilityLabel}>Chaos Fan availability</span>
          <p className={styles.availabilityText}>
            {!selectedCountry
              ? 'Choose a country to see the current merchandise plan.'
              : selectedCountry.commerce
                ? 'Official fan sales are planned only after fulfilment, checkout and impact reporting are verified.'
                : 'Participation interest is open. Official fan sales are not scheduled for this market yet; a local DIY fan option is planned.'}
          </p>
        </div>
      </div>

      <fieldset className={styles.choiceGroup}>
        <legend>Preferences and consent</legend>
        <label className={styles.checkboxLabel}>
          <input name="merchandise_interest" type="checkbox" />
          <span>Tell me when the official Chaos Fan goes on sale.</span>
        </label>
        <label className={styles.checkboxLabel}>
          <input name="marketing_consent" type="checkbox" />
          <span>Send me occasional PlanetHike launch and event updates. I can unsubscribe at any time.</span>
        </label>
        <label className={styles.checkboxLabel}>
          <input name="privacy_accepted" type="checkbox" required />
          <span>I have read the <a href="/privacy">privacy notice</a> and agree to the processing needed to manage my first-access registration.</span>
        </label>
      </fieldset>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining…' : 'Join first-access free'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>

      <p className={styles.microcopy}>
        Free. No purchase required. Choosing a city records demand and does not mean a local Chaos Walk is confirmed yet.
      </p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
