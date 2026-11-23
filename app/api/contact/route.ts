import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reply = (error: string, status: number) => NextResponse.json({ ok: false, error }, { status });

export async function POST(request: NextRequest) {
  try {
    const type = request.headers.get('content-type') || '';
    if (!type.includes('application/json')) return reply('Invalid request.', 415);
    const origin = request.headers.get('origin');
    if (origin) {
      try {
        const url = new URL(origin);
        if (!['planethike.org', 'www.planethike.org', 'localhost'].includes(url.hostname)) return reply('Invalid request.', 403);
      } catch { return reply('Invalid request.', 403); }
    }
    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';
    // Honeypot fields are intentionally not surfaced in the public interface.
    if (body?.company) return NextResponse.json({ ok: true });
    if (!name || name.length > 100 || /[\r\n\x00-\x1f]/.test(name)) return reply('Please enter your name.', 400);
    if (!emailPattern.test(email) || email.length > 254 || /[\r\n]/.test(email)) return reply('Please enter a valid email address.', 400);
    if (message.length < 2 || message.length > 5000) return reply('Please enter a message (2–5,000 characters).', 400);

    const user = process.env.TITAN_SMTP_USER;
    const pass = process.env.TITAN_SMTP_PASSWORD;
    const host = process.env.TITAN_SMTP_HOST;
    if (!user || !pass || !host) {
      console.error('PlanetHike contact mail not configured');
      return reply('Message delivery is temporarily unavailable. Please try again later.', 503);
    }

    const sender = nodemailer.createTransport({
      host, port: 465, secure: true,
      auth: { user, pass },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    });

    try {
      await sender.sendMail({
        from: { name: 'PlanetHike Contact', address: user },
        to: user,
        replyTo: { name, address: email },
        subject: 'PlanetHike contact form enquiry',
        text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      });
      return NextResponse.json({ ok: true });
    } catch (error: unknown) {
      const smtpError = error as { code?: unknown; responseCode?: unknown };
      const code = typeof smtpError?.code === 'string' && /^[A-Z_]{2,25}$/.test(smtpError.code) ? smtpError.code : 'UNKNOWN';
      const responseCode = typeof smtpError?.responseCode === 'number' ? smtpError.responseCode : 0;
      console.error('PlanetHike contact SMTP rejected', { code, responseCode });
      return reply('Your message could not be delivered. Please try again later.', 502);
    }
  } catch {
    return reply('Invalid request.', 400);
  }
}
