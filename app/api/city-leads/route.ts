import { NextRequest, NextResponse } from 'next/server';
import { countryByCode } from '../../locations';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const crewOptions = new Set(['solo', '1-2', '3-5', '6+']);
const reachOptions = new Set(['starting', 'some', 'strong']);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = String(body.first_name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const countryCode = String(body.country_code || '').trim().toUpperCase();
    const city = String(body.city || '').trim();
    const organizerExperience = String(body.organizer_experience || '').trim();
    const crewCapacity = String(body.crew_capacity || '').trim();
    const localReach = String(body.local_reach || '').trim();
    const languages = String(body.languages || '').trim();
    const notes = String(body.notes || '').trim();
    const consent = String(body.consent || '').trim();
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
      return NextResponse.json({ error: 'Please choose a country.' }, { status: 400 });
    }
    if (!city || city.length > 100) {
      return NextResponse.json({ error: 'Please enter the city you want to lead.' }, { status: 400 });
    }
    if (organizerExperience.length < 20 || organizerExperience.length > 1200) {
      return NextResponse.json({ error: 'Please give us a little more detail about your organising experience.' }, { status: 400 });
    }
    if (!crewOptions.has(crewCapacity)) {
      return NextResponse.json({ error: 'Please choose your current crew capacity.' }, { status: 400 });
    }
    if (!reachOptions.has(localReach)) {
      return NextResponse.json({ error: 'Please choose your current local reach.' }, { status: 400 });
    }
    if (languages.length > 160 || notes.length > 400) {
      return NextResponse.json({ error: 'One of the optional fields is too long.' }, { status: 400 });
    }
    if (consent !== 'yes') {
      return NextResponse.json({ error: 'Please confirm the privacy consent to apply.' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !publishableKey) {
      return NextResponse.json(
        { error: 'City Lead applications are being connected. Please try again shortly.' },
        { status: 503 },
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/planethike_city_lead_applications`, {
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
        organizer_experience: organizerExperience,
        crew_capacity: crewCapacity,
        local_reach: localReach,
        languages: languages || null,
        notes: notes || null,
        consent_at: new Date().toISOString(),
        source: 'planethike.org',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status === 409 && errorText.includes('23505')) {
        return NextResponse.json({ ok: true, already_applied: true });
      }

      console.error('Supabase City Lead application error', response.status, errorText);
      return NextResponse.json({ error: 'We could not save your application. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
