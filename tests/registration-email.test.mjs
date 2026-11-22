import test from 'node:test';
import assert from 'node:assert/strict';
import { sendRegistrationConfirmation } from '../app/registration-email.ts';

const input = {
  email: 'user@example.invalid',
  firstName: 'Mina',
  city: 'Berlin',
  fanInterest: true
};

test('does not attempt sending without configuration', async () => {
  let called = false;
  const result = await sendRegistrationConfirmation(input, {
    apiKey: '', from: '',
    send: async () => { called = true; throw new Error('Should not be called'); },
  });
  assert.equal(result, 'not_configured');
  assert.equal(called, false);
});

test('sends consent-scoped receipt with Fan interest to verified sender', async () => {
  let payload, headers, address;
  const result = await sendRegistrationConfirmation(input, {
    apiKey: 'test-key',
    from: 'PlanetHike <hello@planethike.org>',
    send: async (url, init) => {
      address = url; headers = init.headers;
      payload = JSON.parse(init.body);
      return { ok: true };
    },
  });
  assert.equal(result, 'sent');
  assert.equal(address, 'https://api.resend.com/emails');
  assert.equal(payload.to[0], input.email);
  assert.match(payload.text, /one-time alert when Chaos Fan/);
  assert.match(payload.text, /not yet confirmed/);
  assert.doesNotMatch(payload.text, /You are subscribed to marketing/);
  assert.equal(headers.Authorization, 'Bearer test-key');
  assert.equal(headers['Idempotency-Key'].length, 64);
});

test('does not infer Fan opt-in for a walker', async () => {
  let payload;
  await sendRegistrationConfirmation({ ...input, fanInterest: false }, {
    apiKey: 'test', from: 'hello@planethike.org',
    send: async (_url, init) => {
      payload = JSON.parse(init.body);
      return { ok: true };
    },
  });
  assert.match(payload.text, /did not request the optional Chaos Fan/);
});

test('provider failure does not masquerade as sent', async () => {
  const result = await sendRegistrationConfirmation(input, {
    apiKey: 'test', from: 'hello@planethike.org',
    send: async () => ({ ok: false, status: 403 }),
  });
  assert.equal(result, 'failed');
});

test('sanitizes input before including it in receipt body', async () => {
  let payload;
  await sendRegistrationConfirmation({
    ...input, firstName: 'Mina\nInjected Subject:', city: 'Berlin\r\nInjected header'
  }, {
    apiKey: 'test', from: 'hello@planethike.org',
    send: async (_url, init) => {
      payload = JSON.parse(init.body);
      return { ok: true };
    },
  });
  assert.doesNotMatch(payload.text, /Mina\nInjected Subject/);
  assert.doesNotMatch(payload.text, /Berlin\r\nInjected header/);
});
