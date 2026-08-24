import { NextRequest, NextResponse } from 'next/server';
import { countryByCode } from '../../locations';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const firstName = String(body.first_name || '').trim();
    const lastName = String(body.last_name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const countryCode = String(body.country_code || '').trim().toUpperCase();
    const city = String(body.city || '').trim();
    const currentRole = String(body.current_role || '').trim();
    const localNetwork = String(body.local_network || '').trim();
    const crewStatus = String(body.crew_status || '').trim();
    const organizingExperience = String(body.organizing_experience || '').trim();
    const motivation = String(body.motivation || '').trim();
    const company = String(body.company || '').trim();
    const routePermitAck = body.route_permit_ack === true || body.route_permit_ack === 'on';
    const safetyAccessibilityAck = body.safety_accessibility_ack === true || body.safety_accessibility_ack === 'on';
    const privacyAccepted = body.privacy_accepted === true || body.privacy_accepted === 'on';
    const marketingConsent = body.marketing_consent === true || body.marketing_consent === 'on';

    if (company) return NextResponse.json({ ok: true });

    if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80) {
      return NextResponse.json({ error: 'Please enter your first and last name.' }, { status: 400 });
    }
    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    const country = countryByCode[countryCode];
    if (!country) return NextResponse.json({ error: 'Please choose a valid country.' }, { status: 400 });
    if (!city || city.length > 120) return NextResponse.json({ error: 'Please enter the city you want to lead.' }, { status: 400 });
    if (!currentRole || currentRole.length > 160) return NextResponse.json({ error: 'Please describe your current role or community connection.' }, { status: 400 });
    if (!['small', 'some', 'strong'].includes(localNetwork)) return NextResponse.json({ error: 'Please choose your local-network level.' }, { status: 400 });
    if (!['need_recruit', 'one_or_two', 'crew_ready'].includes(crewStatus)) return NextResponse.json({ error: 'Please choose your crew-readiness level.' }, { status: 400 });
    if (!organizingExperience || organizingExperience.length > 1800 || !motivation || motivation.length > 1800) {
      return NextResponse.json({ error: 'Please complete the experience and motivation fields.' }, { status: 400 });
    }
    if (!routePermitAck || !safetyAccessibilityAck) {
      return NextResponse.json({ error: 'Please acknowledge the route, permission, safety and accessibility requirements.' }, { status: 400 });
    }
    if (!privacyAccepted) {
      return NextResponse.json({ error: 'Please accept the privacy notice to submit your application.' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!supabaseUrl || !publishableKey) {
      return NextResponse.json({ error: 'City Lead applications are being connected. Please try again shortly.' }, { status: 503 });
    }

    const now = new Date().toISOString();
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
        last_name: lastName,
        email,
        country_code: country.code,
        country: country.name,
        city,
        current_role: currentRole,
        local_network: localNetwork,
        crew_status: crewStatus,
        organizing_experience: organizingExperience,
        motivation,
        route_permit_ack: routePermitAck,
        safety_accessibility_ack: safetyAccessibilityAck,
        privacy_accepted_at: now,
        marketing_consent: marketingConsent,
        marketing_consent_at: marketingConsent ? now : null,
        source: 'planethike.org',
        status: 'new',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status === 409) {
        return NextResponse.json({ ok: true, already_applied: true });
      }
      console.error('Supabase City Lead application error', response.status, errorText);
      return NextResponse.json({ error: 'We could not save your application. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, application_status: 'new' });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
