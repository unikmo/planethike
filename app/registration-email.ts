import { createHash } from 'node:crypto';

type RegistrationEmailInput = {
  email: string;
  firstName: string;
  city: string;
  fanInterest: boolean;
};

export type RegistrationEmailStatus = 'sent' | 'not_configured' | 'failed';

export async function sendRegistrationConfirmation(
  input: RegistrationEmailInput,
  options: {
    apiKey?: string;
    from?: string;
    send?: typeof fetch;
  } = {},
): Promise<RegistrationEmailStatus> {
  const apiKey = options.apiKey ?? process.env.RESEND_API_KEY;
  const from = options.from ?? process.env.PLANETHIKE_FROM_EMAIL;
  if (!apiKey || !from) return 'not_configured';

  // A receipt confirms a saved registration, not an event ticket, city approval, or purchase.
  const safeName = input.firstName.replace(/[\r\n\x00-\x1f]/g, ' ').trim();
  const safeCity = input.city.replace(/[\r\n\x00-\x1f]/g, ' ').trim();
  const lines = [
    `Hi ${safeName},`,
    '',
    'You are on the free first-access list for The Chaos Walk on Sunday, 17 October 2027.',
    `Your city of interest: ${safeCity}.`,
    'Your local walk, route and participation details are not yet confirmed. We will publish them when the local city is ready.',
    '',
    input.fanInterest
      ? 'You also requested a one-time alert when Chaos Fan Edition 001 ordering opens. The Fan is optional, and no purchase or deposit has been taken.'
      : 'You did not request the optional Chaos Fan ordering alert.',
    '',
    'The walk remains free. This message confirms interest, not a place at a confirmed local event.',
    'More details: https://planethike.org/the-chaos-walk',
    '',
    'PlanetHike',
  ];
  const idempotencyKey = createHash('sha256')
    .update('planethike-registration-v1:' + input.email.trim().toLowerCase())
    .digest('hex');

  try {
    const response = await (options.send ?? fetch)('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        from,
        to: [input.email],
        subject: 'You are on the Chaos Walk first-access list',
        text: lines.join('\n'),
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    return response.ok ? 'sent' : 'failed';
  } catch {
    return 'failed';
  }
}
