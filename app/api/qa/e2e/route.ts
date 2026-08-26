import { NextRequest, NextResponse } from 'next/server';

const expectedPaths = [
  '/',
  '/the-chaos-walk',
  '/10000-step-challenge',
  '/walk-for-a-cause',
  '/companies',
  '/groups',
  '/cities',
  '/city-leads',
  '/the-cause',
  '/schools',
  '/shop',
  '/shop/chaos-fan',
  '/join',
  '/guides',
  '/about',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
  '/imprint',
  '/guides/how-many-miles-is-10000-steps',
  '/guides/how-long-to-walk-10000-steps',
  '/guides/10000-steps-in-km',
  '/guides/10000-steps-calories',
  '/guides/10k-walk-training-plan',
  '/guides/walking-challenge-team-names',
  '/guides/walking-challenge-ideas',
  '/guides/how-to-organize-a-charity-walk',
  '/guides/how-to-start-a-walking-group',
  '/guides/walking-scavenger-hunt',
];

function extract(html: string, pattern: RegExp) {
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
}

function normalizeInternalHref(value: string) {
  if (!value.startsWith('/') || value.startsWith('//')) return null;
  const [path] = value.split('#');
  if (!path || path.startsWith('/_next/') || path.startsWith('/api/')) return null;
  return path.split('?')[0] || '/';
}

async function postJson(origin: string, path: string, payload: Record<string, unknown>) {
  const response = await fetch(`${origin}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });
  let body: unknown = null;
  try { body = await response.json(); } catch { body = await response.text(); }
  return { status: response.status, ok: response.ok, body };
}

export async function GET(request: NextRequest) {
  if (process.env.VERCEL_ENV === 'production') {
    return new NextResponse('Not found', { status: 404 });
  }

  const origin = request.nextUrl.origin;
  const stamp = Date.now();
  const qaEmail = `planethike.qa.${stamp}@example.com`;

  const pageResults = await Promise.all(expectedPaths.map(async (path) => {
    try {
      const response = await fetch(`${origin}${path}`, { cache: 'no-store', redirect: 'follow' });
      const html = await response.text();
      const title = extract(html, /<title[^>]*>([^<]*)<\/title>/i);
      const canonical = extract(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i)
        ?? extract(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i);
      const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)]
        .map((match) => normalizeInternalHref(match[1]))
        .filter((value): value is string => Boolean(value));
      return { path, status: response.status, title, canonical, hrefs: [...new Set(hrefs)] };
    } catch (error) {
      return { path, status: 0, title: null, canonical: null, hrefs: [], error: error instanceof Error ? error.message : String(error) };
    }
  }));

  const allInternalLinks = [...new Set(pageResults.flatMap((page) => page.hrefs))];
  const linkResults = await Promise.all(allInternalLinks.map(async (path) => {
    try {
      const response = await fetch(`${origin}${path}`, { cache: 'no-store', redirect: 'manual' });
      return { path, status: response.status, location: response.headers.get('location') };
    } catch (error) {
      return { path, status: 0, location: null, error: error instanceof Error ? error.message : String(error) };
    }
  }));

  const titles = pageResults.map((page) => page.title).filter((value): value is string => Boolean(value));
  const canonicals = pageResults.map((page) => page.canonical).filter((value): value is string => Boolean(value));
  const duplicateTitles = [...new Set(titles.filter((title, index) => titles.indexOf(title) !== index))];
  const duplicateCanonicals = [...new Set(canonicals.filter((canonical, index) => canonicals.indexOf(canonical) !== index))];

  const preregistration = await postJson(origin, '/api/preregister', {
    first_name: 'PlanetHike QA',
    email: qaEmail,
    country_code: 'DE',
    city: 'Bonn',
    interest: 'walker',
    merchandise_interest: 'on',
    marketing_consent: 'on',
    privacy_accepted: 'on',
  });

  const preregistrationPrivacyGuard = await postJson(origin, '/api/preregister', {
    first_name: 'PlanetHike QA Missing Privacy',
    email: `no-privacy.${qaEmail}`,
    country_code: 'DE',
    city: 'Bonn',
    interest: 'walker',
  });

  const cityLead = await postJson(origin, '/api/city-leads', {
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

  const cityLeadSafetyGuard = await postJson(origin, '/api/city-leads', {
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

  const contact = await postJson(origin, '/api/contact', {
    name: 'PlanetHike QA',
    email: qaEmail,
    topic: 'general',
    message: 'Automated release QA contact message. This record should be removed after verification.',
    privacy_accepted: 'on',
  });

  const contactPrivacyGuard = await postJson(origin, '/api/contact', {
    name: 'PlanetHike QA Missing Privacy',
    email: `contact-guard.${qaEmail}`,
    topic: 'general',
    message: 'Automated validation test that deliberately omits privacy acceptance.',
  });

  const brokenPages = pageResults.filter((page) => page.status !== 200);
  const pagesWithoutTitle = pageResults.filter((page) => !page.title).map((page) => page.path);
  const pagesWithoutCanonical = pageResults.filter((page) => !page.canonical).map((page) => page.path);
  const brokenInternalLinks = linkResults.filter((link) => !(link.status >= 200 && link.status < 400));

  const formsPass = preregistration.status === 200
    && preregistrationPrivacyGuard.status === 400
    && cityLead.status === 200
    && cityLeadSafetyGuard.status === 400
    && contact.status === 200
    && contactPrivacyGuard.status === 400;

  const seoPass = brokenPages.length === 0
    && pagesWithoutTitle.length === 0
    && pagesWithoutCanonical.length === 0
    && duplicateTitles.length === 0
    && duplicateCanonicals.length === 0;

  const linksPass = brokenInternalLinks.length === 0;

  return NextResponse.json({
    ok: formsPass && seoPass && linksPass,
    environment: process.env.VERCEL_ENV ?? 'unknown',
    origin,
    qaEmail,
    counts: {
      expectedPages: expectedPaths.length,
      crawledInternalLinks: allInternalLinks.length,
    },
    seo: {
      pass: seoPass,
      brokenPages,
      pagesWithoutTitle,
      pagesWithoutCanonical,
      duplicateTitles,
      duplicateCanonicals,
      pages: pageResults.map(({ hrefs, ...page }) => page),
    },
    internalLinks: {
      pass: linksPass,
      broken: brokenInternalLinks,
    },
    forms: {
      pass: formsPass,
      preregistration,
      preregistrationPrivacyGuard,
      cityLead,
      cityLeadSafetyGuard,
      contact,
      contactPrivacyGuard,
    },
  }, { headers: { 'Cache-Control': 'no-store' } });
}
