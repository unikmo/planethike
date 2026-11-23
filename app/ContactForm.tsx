'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    setError('');
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.ok !== true) {
        setError(data?.error || 'Your message could not be delivered. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setError('Your message could not be delivered. Please try again.');
    }
  }

  if (status === 'sent') {
    return <div className="phContactStatus phContactSuccess" role="status">
      Your message was sent. We will reply by email.
    </div>;
  }

  return <form className="phContactForm" onSubmit={submit}>
    <label>Your name
      <input autoComplete="name" maxLength={100} required value={name} onChange={event => setName(event.target.value)} />
    </label>
    <label>Your email
      <input type="email" autoComplete="email" maxLength={254} required value={email} onChange={event => setEmail(event.target.value)} />
    </label>
    <label>Message
      <textarea required minLength={2} maxLength={5000} value={message} onChange={event => setMessage(event.target.value)} />
    </label>
    <p className="phContactNote">Please do not include payment card details or sensitive medical information.</p>
    {status === 'error' && <p className="phContactStatus phContactError" role="alert">{error}</p>}
    <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
  </form>;
}
