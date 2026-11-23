import nodemailer from 'nodemailer';

type RegistrationEmailInput = {
  email: string;
  firstName: string;
  city: string;
  fanInterest: boolean;
};

export type RegistrationEmailStatus = 'sent' | 'not_configured' | 'auth_failed' | 'connection_failed' | 'smtp_rejected' | 'failed';

type MailData = { from: { name: string; address: string }; to: string; subject: string; text: string };
type MailSender = (mail: MailData) => Promise<unknown>;

export async function sendRegistrationConfirmation(
  input: RegistrationEmailInput,
  options: {
    user?: string;
    password?: string;
    host?: string;
    send?: MailSender;
  } = {},
): Promise<RegistrationEmailStatus> {
  const user = options.user ?? process.env.TITAN_SMTP_USER;
  const password = options.password ?? process.env.TITAN_SMTP_PASSWORD;
  if (!user || !password) return 'not_configured';

  // A receipt confirms a saved registration, not a city ticket or a purchase.
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

  try {
    const host = options.host ?? process.env.TITAN_SMTP_HOST ?? 'smtp.titan.email';
    const sender = options.send ?? (async (mail: MailData) => {
      const smtp = nodemailer.createTransport({
        host,
        port: 465,
        secure: true,
        auth: { user, pass: password },
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 10000,
      });
      return smtp.sendMail(mail);
    });
    await sender({
      from: { name: 'PlanetHike', address: user },
      to: input.email,
      subject: 'You are on the Chaos Walk first-access list',
      text: lines.join('\n'),
    });
    return 'sent';
  } catch (error: unknown) {
    // SMTP exception messages may include sensitive provider details; never log them.
    const failure = error as { code?: unknown; responseCode?: unknown };
    const code = typeof failure?.code === 'string' ? failure.code : '';
    const responseCode = typeof failure?.responseCode === 'number' ? failure.responseCode : 0;
    let category: RegistrationEmailStatus = 'failed';
    if (code === 'EAUTH' || responseCode === 535 || responseCode === 534) category = 'auth_failed';
    else if (['ECONNECTION', 'ETIMEDOUT', 'ESOCKET', 'EDNS', 'ECONNRESET', 'ENOTFOUND'].includes(code)) category = 'connection_failed';
    else if (code === 'EENVELOPE' || code === 'EMESSAGE' || responseCode >= 400) category = 'smtp_rejected';
    console.error('Titan SMTP confirmation failure', { category, code: /^[A-Z_]{2,25}$/.test(code) ? code : 'UNKNOWN', responseCode });
    return category;
  }
}
