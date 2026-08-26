import { NextRequest, NextResponse } from 'next/server';
import { POST as preregisterPost } from '../../preregister/route';
import { POST as cityLeadPost } from '../../city-leads/route';
import { POST as contactPost } from '../../contact/route';

type Handler = (request: NextRequest) => Promise<NextResponse>;

async function invoke(handler: Handler, origin: string, path: string, payload: Record<string, unknown>) {
  const request = new NextRequest(`${origin}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const response = await handler(request);
  let body: unknown = null;
  try { body = await response.clone().json(); } catch { body = await response.text(); }
  return { status: response.status, ok: response.ok, body };
}

export async function GET(request: NextRequest) {
  if (process.env.VERCEL_ENV === 'production') return new NextResponse('Not found', { status: 404 });

  const origin = request.nextUrl.origin;
  const stamp = Date.now();
  const qaEmail = `planethike.qa.${stamp}@example.com`;

  const preregistration = await invoke(preregisterPost, origin, '/api/preregister', {
    first_name: 'PlanetHike QA',
    email: qaEmail,
    country_code: 'DE',
    city: 'Bonn',
    interest: 'walker',
    merchandise_interest: 'on',
    marketing_consent: 'on',
    privacy_accepted: 'on',
  });

  const preregistrationPrivacyGuard = await invoke(preregisterPost, origin, '/api/preregister', {
    first_name: 'PlanetHike QA Missing Privacy',
    email: `no-privacy.${qaEmail}`,
    country_code: 'DE',
    city: 'Bonn',
    interest: 'walker',
  });

  const preregistrationUnknownCityGuard = await invoke(preregisterPost, origin, '/api/preregister', {
    first_name: 'PlanetHike QA Unknown City',
    email: `bad-city.${qaEmail}`,
    country_code: 'DE',
    city: 'Definitely Not In The List',
    interest: 'walker',
    privacy_accepted: 'on',
  });

  const preregistrationCustomCity = await invoke(preregisterPost, origin, '/api/preregister', {
    first_name: 'PlanetHike QA Custom City',
    email: `custom.${qaEmail}`,
    country_code: 'DE',
    city: 'City not yet listed',
    custom_city: 'Siegburg',
    interest: 'walker',
    privacy_accepted: 'on',
  });

  const cityLead = await invoke(cityLeadPost, origin, '/api/city-leads', {
    first_name: 'PlanetHike',
    last_name: 'QA',
    email: qaEmail,
    country_code: 'DE',
    city: 'Bonn',
    current_role: 'Automated release QA',
    local_network: 'some',
    crew_status: 'one_or_two',
    organizing_experience: 'Automated end-to-end test record created only to verify the deployed City Lead submission flow.',
    motivation: 'Automated end-to-end test record created only to verify the deployed City Lead submission flow.',
    route_permit_ack: 'on',
    safety_accessibility_ack: 'on',
    privacy_accepted: 'on',
    marketing_consent: 'on',
  });

  const cityLeadSafetyGuard = await invoke(cityLeadPost, origin, '/api/city-leads', {
    first_name: 'PlanetHike',
    last_name: 'QA Guard',
    email: `guard.${qaEmail}`,
    country_code: 'DE',
    city: 'Bonn',
    current_role: 'Automated QA',
    local_network: 'some',
    crew_status: 'need_recruit',
    organizing_experience: 'Automated validation test that deliberately omits required safety acknowledgements.',
    motivation: 'Automated validation test that deliberately omits required safety acknowledgements.',
    privacy_accepted: 'on',
  });

  const contact = await invoke(contactPost, origin, '/api/contact', {
    name: 'PlanetHike QA',
    email: qaEmail,
    topic: 'general',
    message: 'Automated release QA contact message. This record should be removed after verification.',
    privacy_accepted: 'on',
  });

  const contactPrivacyGuard = await invoke(contactPost, origin, '/api/contact', {
    name: 'PlanetHike QA Missing Privacy',
    email: `contact-guard.${qaEmail}`,
    topic: 'general',
    message: 'Automated validation test that deliberately omits privacy acceptance.',
  });

  const contactTopicGuard = await invoke(contactPost, origin, '/api/contact', {
    name: 'PlanetHike QA Bad Topic',
    email: `contact-topic.${qaEmail}`,
    topic: 'not-a-real-topic',
    message: 'Automated validation test for the contact topic whitelist.',
    privacy_accepted: 'on',
  });

  const pass = preregistration.status === 200
    && preregistrationPrivacyGuard.status === 400
    && preregistrationUnknownCityGuard.status === 400
    && preregistrationCustomCity.status === 200
    && cityLead.status === 200
    && cityLeadSafetyGuard.status === 400
    && contact.status === 200
    && contactPrivacyGuard.status === 400
    && contactTopicGuard.status === 400;

  return NextResponse.json({
    ok: pass,
    environment: process.env.VERCEL_ENV ?? 'unknown',
    qaEmail,
    tests: {
      preregistration,
      preregistrationPrivacyGuard,
      preregistrationUnknownCityGuard,
      preregistrationCustomCity,
      cityLead,
      cityLeadSafetyGuard,
      contact,
      contactPrivacyGuard,
      contactTopicGuard,
    },
  }, { headers: { 'Cache-Control': 'no-store' } });
}
