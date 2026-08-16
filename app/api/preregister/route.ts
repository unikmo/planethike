import { NextRequest, NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = String(body.first_name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const location = String(body.location || '').trim();
    const interest = String(body.interest || 'walker').trim();
    const company = String(body.company || '').trim();

    if (company) return NextResponse.json({ ok: true });

    if (!firstName || firstName.length > 80) {
      return NextResponse.json({ error: 'Please enter your first name.' }, { status: 400 });
    }
    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!location || location.length > 120) {
      return NextResponse.json({ error: 'Please enter your city and country.' }, { status: 400 });
    }
    if (!['walker', 'host', 'team'].includes(interest)) {
      return NextResponse.json({ error: 'Please choose a valid interest.' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: 'Pre-registration is being connected. Please try again shortly.' },
        { status: 503 },
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/planethike_preregistrations?on_conflict=email`,
      {
        method: 'POST',
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates,return=minimal',
        },
        body: JSON.stringify({
          first_name: firstName,
          email,
          location,
          interest,
          source: 'planethike.org',
        }),
        cache: 'no-store',
      },
    );

    if (!response.ok) {
      console.error('Supabase preregistration error', response.status, await response.text());
      return NextResponse.json({ error: 'We could not save your pre-registration. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
