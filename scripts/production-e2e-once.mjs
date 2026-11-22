import assert from 'node:assert/strict';

const base = 'https://planethike.org';
const run = process.env.GITHUB_RUN_ID;
assert.match(run || '', /^\d+$/);
const email = `e2e-planethike-${run}@example.invalid`;
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 20000);
try {
  for (const [path, needle] of [['/', 'Two different shoes'], ['/shop', 'One Fan'], ['/shop/chaos-fan', 'Chaos Fan']]) {
    const res = await fetch(base + path, { signal: controller.signal, redirect: 'follow' });
    assert.equal(res.status, 200, `GET ${path}: ${res.status}`);
    const html = await res.text();
    assert.ok(html.includes(needle), `GET ${path}: missing ${needle}`);
    if (path === '/shop') {
      assert.ok(!html.includes('Mismatch Socks'), 'Old socks product present');
      assert.ok(!html.includes('The Chaos Kit'), 'Old bundle present');
    }
    console.log(`PASS public GET ${path}`);
  }

  const payload = {
    first_name: 'E2E Test',
    email,
    country_code: 'DE',
    city: 'Berlin',
    interest: 'walker',
    privacy_accepted: true,
    merchandise_interest: true,
    marketing_consent: false
  };
  const invalid = await fetch(base + '/api/preregister', {
    method: 'POST', headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({...payload, privacy_accepted: false}),
    signal: controller.signal
  });
  assert.equal(invalid.status, 400, 'Missing privacy consent must reject registration');
  console.log('PASS API requires privacy consent');

  const res = await fetch(base + '/api/preregister', {
    method: 'POST', headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload), signal: controller.signal
  });
  const json = await res.json();
  console.log('Live registration response status:', res.status);
  assert.equal(res.status, 200, JSON.stringify(json));
  assert.equal(json.ok, true, JSON.stringify(json));
  assert.equal(json.already_registered, undefined, 'Test email was already registered');
  assert.equal(json.city_status, 'interest_only');
  console.log('PASS production signup API, test email:', email);
} finally { clearTimeout(timer); }
