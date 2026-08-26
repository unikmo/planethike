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
      setMessage('Your city interest is recorded for May 2027. We’ll send the exact date and confirmed local details as they are announced.');
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
      setMessage(error instanceof Error ? error.message : 'Unable to pre-register right now.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}><Check size={24} /></div>
        <strong>YOU’RE IN.</strong>
        <p>{message}</p>
        <p className={styles.successNote}>Next: build comfortably toward 10,000 steps, choose two genuinely different shoes that are both safe to walk in, and start planning your most gloriously off-colour look.</p>
        {fanAlertRequested && <p className={styles.successNote}>You also asked for the Chaos Shop alert. We’ll tell you when Chaos Fan Edition 001 and event merchandise open.</p>}
        <p className={styles.successNote}>A city selection records demand; it does not mean that city is confirmed yet. Confirmed local timing, route and meeting information will be published separately.</p>
        <div className={styles.successActions}>
          <a href="/the-chaos-walk">See what happens on the day <ArrowRight size={16} /></a>
          <a href="/shop">Explore the Chaos Shop <ArrowRight size={16} /></a>
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
          <span>Your city</span>
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
          <span>Tell us your city</span>
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
            <option value="walker">Walk The Chaos Walk</option>
            <option value="team">Bring a group / team</option>
            <option value="volunteer">Volunteer with my city crew</option>
            <option value="host">Lead The Chaos Walk in my city</option>
          </select>
        </label>
        <div aria-live="polite">
          <span className={styles.availabilityLabel}>Chaos Shop</span>
          <p className={styles.availabilityText}>
            {!selectedCountry
              ? 'Choose your country to see the current shop plan.'
              : selectedCountry.commerce
                ? 'Chaos Fan Edition 001 and selected event merchandise are planned for your market. Join the alert below to hear when the shop opens.'
                : 'You can still join the walk. Shop availability for your country will be announced separately.'}
          </p>
        </div>
      </div>

      <fieldset className={styles.choiceGroup}>
        <legend>Keep me in the loop</legend>
        <label className={styles.checkboxLabel}>
          <input name="merchandise_interest" type="checkbox" />
          <span>Tell me when Chaos Fan Edition 001 and the Chaos Shop open.</span>
        </label>
        <label className={styles.checkboxLabel}>
          <input name="marketing_consent" type="checkbox" />
          <span>Send me occasional PlanetHike event updates. I can unsubscribe at any time.</span>
        </label>
        <label className={styles.checkboxLabel}>
          <input name="privacy_accepted" type="checkbox" required />
          <span>I have read the <a href="/privacy">privacy notice</a> and agree to the processing needed to manage my pre-registration.</span>
        </label>
      </fieldset>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Registering…' : 'Pre-register free'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>

      <p className={styles.microcopy}>
        Free. No purchase required. We’ll email the exact date and confirmed local city details as they are announced.
      </p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
