import { NextRequest, NextResponse } from 'next/server';
import { countryByCode } from '../../locations';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = String(body.first_name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const countryCode = String(body.country_code || '').trim().toUpperCase();
    const city = String(body.city || '').trim();
    const interest = String(body.interest || 'walker').trim();
    const company = String(body.company || '').trim();

    if (company) return NextResponse.json({ ok: true });

    if (!firstName || firstName.length > 80) {
      return NextResponse.json({ error: 'Please enter your first name.' }, { status: 400 });
    }
    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const country = countryByCode[countryCode];
    if (!country) {
      return NextResponse.json({ error: 'Please choose an available participation country.' }, { status: 400 });
    }
    if (!city || !country.cities.includes(city)) {
      return NextResponse.json({ error: 'Please choose a city from the list.' }, { status: 400 });
    }
    if (!['walker', 'host', 'volunteer', 'team'].includes(interest)) {
      return NextResponse.json({ error: 'Please choose a valid interest.' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !publishableKey) {
      return NextResponse.json(
        { error: 'Pre-registration is being connected. Please try again shortly.' },
        { status: 503 },
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/planethike_preregistrations`, {
      method: 'POST',
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${publishableKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        first_name: firstName,
        email,
        country_code: country.code,
        country: country.name,
        city,
        location: `${city}, ${country.name}`,
        commerce_eligible: country.commerce,
        interest,
        source: 'planethike.org',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status === 409 && errorText.includes('23505')) {
        return NextResponse.json({ ok: true, already_registered: true });
      }

      console.error('Supabase preregistration error', response.status, errorText);
      return NextResponse.json({ error: 'We could not save your pre-registration. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, commerce_eligible: country.commerce });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
