'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to send your message.');

      setStatus('success');
      setMessage('Message received. If your question needs a reply, we’ll use the email address you provided.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <CheckCircle2 size={30}/>
        <h2>Got it.</h2>
        <p>{message}</p>
        <a href="/">Back to The Chaos Walk <ArrowRight size={16}/></a>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.row}>
        <label><span>Name</span><input name="name" autoComplete="name" maxLength={120} required /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      </div>

      <label>
        <span>What is this about?</span>
        <select name="topic" defaultValue="general" required>
          <option value="general">General question</option>
          <option value="registration">Participant registration</option>
          <option value="city_lead">City Lead / volunteering</option>
          <option value="shop">Chaos Shop / merchandise</option>
          <option value="partnership">Partnership</option>
          <option value="press">Press / media</option>
          <option value="privacy">Privacy / data request</option>
          <option value="other">Something else</option>
        </select>
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" minLength={10} maxLength={4000} rows={8} placeholder="Tell us what you need." required />
      </label>

      <label className={styles.check}>
        <input name="privacy_accepted" type="checkbox" required />
        <span>I have read the <a href="/privacy">privacy notice</a> and agree to the processing needed to answer my message.</span>
      </label>

      <input className={styles.honeypot} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
        {status !== 'loading' && <ArrowRight size={18}/>} 
      </button>
      <p className={styles.note}>Prefer email? <a href="mailto:hello@planethike.org">hello@planethike.org</a></p>
      {status === 'error' && <p className={styles.error} role="alert">{message}</p>}
    </form>
  );
}
