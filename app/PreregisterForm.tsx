'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from './PreregisterForm.module.css';

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
      setMessage('You’re on the first-access list. We’ll send the 2027 date and city news first.');
      event.currentTarget.reset();
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
          <span>City / Country</span>
          <input name="location" autoComplete="address-level2" maxLength={120} placeholder="Berlin, Germany" required />
        </label>
        <label>
          <span>I’m interested in</span>
          <select name="interest" defaultValue="walker">
            <option value="walker">Walking</option>
            <option value="host">Hosting my city</option>
            <option value="team">Bringing a group / team</option>
          </select>
        </label>
      </div>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={styles.submit} type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining…' : 'Pre-register now'}
        {status !== 'loading' && <ArrowRight size={18} />}
      </button>

      <p className={styles.microcopy}>No payment. No commitment. Just first access to the May 2027 launch, city announcements and Chaos Drops.</p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
