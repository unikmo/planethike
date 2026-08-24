import { NextRequest, NextResponse } from 'next/server';
import { countryByCode } from '../../locations';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OTHER_CITY = 'City not yet listed';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = String(body.first_name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const countryCode = String(body.country_code || '').trim().toUpperCase();
    const listedCity = String(body.city || '').trim();
    const customCity = String(body.custom_city || '').trim();
    const interest = String(body.interest || 'walker').trim();
    const company = String(body.company || '').trim();
    const privacyAccepted = body.privacy_accepted === true || body.privacy_accepted === 'on';
    const marketingConsent = body.marketing_consent === true || body.marketing_consent === 'on';
    const merchandiseInterest = body.merchandise_interest === true || body.merchandise_interest === 'on';

    if (company) return NextResponse.json({ ok: true });

    if (!firstName || firstName.length > 80) {
      return NextResponse.json({ error: 'Please enter your first name.' }, { status: 400 });
    }
    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!privacyAccepted) {
      return NextResponse.json({ error: 'Please accept the privacy notice to join the first-access list.' }, { status: 400 });
    }

    const country = countryByCode[countryCode];
    if (!country) {
      return NextResponse.json({ error: 'Please choose an available participation country.' }, { status: 400 });
    }
    if (!listedCity || !country.cities.includes(listedCity)) {
      return NextResponse.json({ error: 'Please choose a city from the list.' }, { status: 400 });
    }

    const city = listedCity === OTHER_CITY ? customCity : listedCity;
    if (!city || city.length > 80) {
      return NextResponse.json({ error: 'Please enter your city.' }, { status: 400 });
    }
    const location = `${city}, ${country.name}`;
    if (location.length > 120) {
      return NextResponse.json({ error: 'Please use a shorter city name.' }, { status: 400 });
    }
    if (!['walker', 'host', 'volunteer', 'team'].includes(interest)) {
      return NextResponse.json({ error: 'Please choose a valid interest.' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !publishableKey) {
      return NextResponse.json({ error: 'First-access registration is being connected. Please try again shortly.' }, { status: 503 });
    }

    const now = new Date().toISOString();
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
        location,
        commerce_eligible: country.commerce,
        interest,
        source: 'planethike.org',
        privacy_accepted_at: now,
        marketing_consent: marketingConsent,
        marketing_consent_at: marketingConsent ? now : null,
        merchandise_interest: merchandiseInterest,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status === 409 && errorText.includes('23505')) {
        return NextResponse.json({ ok: true, already_registered: true });
      }
      console.error('Supabase preregistration error', response.status, errorText);
      return NextResponse.json({ error: 'We could not save your first-access registration. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, commerce_eligible: country.commerce, city_status: 'interest_only' });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
