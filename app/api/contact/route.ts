import { NextRequest, NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedTopics = ['general','registration','city_lead','shop','partnership','press','privacy','other'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const topic = String(body.topic || 'general').trim();
    const message = String(body.message || '').trim();
    const company = String(body.company || '').trim();
    const privacyAccepted = body.privacy_accepted === true || body.privacy_accepted === 'on';

    if (company) return NextResponse.json({ ok: true });

    if (!name || name.length > 120) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
    if (!emailPattern.test(email) || email.length > 254) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    if (!allowedTopics.includes(topic)) return NextResponse.json({ error: 'Please choose a valid topic.' }, { status: 400 });
    if (message.length < 10 || message.length > 4000) return NextResponse.json({ error: 'Please enter a message between 10 and 4,000 characters.' }, { status: 400 });
    if (!privacyAccepted) return NextResponse.json({ error: 'Please accept the privacy notice so we can process your message.' }, { status: 400 });

    const supabaseUrl = process.env.SUPABASE_URL;
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!supabaseUrl || !publishableKey) {
      return NextResponse.json({ error: 'Contact messaging is temporarily unavailable. Please email hello@planethike.org.' }, { status: 503 });
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/planethike_contact_messages`, {
      method: 'POST',
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${publishableKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name,
        email,
        topic,
        message,
        privacy_accepted_at: new Date().toISOString(),
        source: 'planethike.org',
        status: 'new',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Supabase contact error', response.status, await response.text());
      return NextResponse.json({ error: 'We could not save your message. Please email hello@planethike.org.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
