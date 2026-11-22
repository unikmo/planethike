import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const BASE = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3000';
const browser = await chromium.launch({ headless: true });
await fs.mkdir('smoke-artifacts', { recursive: true });

let passed = 0;
async function check(name, fn) {
  try {
    await fn();
    passed++;
    console.log('PASS:', name);
  } catch (error) {
    console.error('FAIL:', name, error);
    throw error;
  }
}

async function visit(viewport, name) {
  const context = await browser.newContext({ viewport, permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `smoke-artifacts/${name}.png`, fullPage: true });
  await check(`${name}: no horizontal overflow`, async () => {
    const dimensions = await page.evaluate(() => ({
      body: document.body.scrollWidth,
      html: document.documentElement.scrollWidth,
      viewport: window.innerWidth
    }));
    assert.ok(dimensions.html <= dimensions.viewport + 2, JSON.stringify(dimensions));
  });
  await check(`${name}: homepage no JavaScript exceptions`, async () => {
    assert.deepEqual(errors, []);
  });
  return { context, page, errors };
}

try {
  const desktop = await visit({ width: 1440, height: 900 }, 'desktop');
  const page = desktop.page;
  await check('hero signature and free signup CTA', async () => {
    await page.getByRole('heading', { name: /Two different shoes/i }).waitFor();
    await page.getByText('10,000 steps. Zero normal.').first().waitFor();
    assert.ok(await page.getByRole('link', { name: /Join the chaos — free/i }).count() >= 1);
  });
  await check('hero fan CTA reaches optional collectible', async () => {
    await page.getByRole('link', { name: /Meet the Chaos Fan/i }).click();
    assert.equal(new URL(page.url()).hash, '#chaos-fan');
    await page.getByRole('heading', { name: /official accessory/i }).waitFor();
    await page.getByText(/Completely optional: the walk is free/i).waitFor();
  });
  await check('Shoe Police reacts to changes and can copy challenge', async () => {
    await page.getByRole('radio', { name: /One for work/i }).check();
    await page.getByText('Your shoes are no longer speaking.').first().waitFor();
    await page.getByRole('button', { name: 'Copy your challenge' }).click();
    await page.getByRole('button', { name: 'Challenge copied' }).waitFor();
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    assert.match(clipboard, /planethike.org/);
    assert.match(clipboard, /Your shoes are no longer speaking/);
  });
  await check('registration keeps optional Fan checkbox separate and unchecked', async () => {
    await page.locator('#join').scrollIntoViewIfNeeded();
    const merch = page.locator('input[name="merchandise_interest"]');
    const marketing = page.locator('input[name="marketing_consent"]');
    const privacy = page.locator('input[name="privacy_accepted"]');
    assert.equal(await merch.isChecked(), false);
    assert.equal(await marketing.isChecked(), false);
    assert.equal(await privacy.isChecked(), false);
    await page.getByText(/Notify me when Chaos Fan Edition 001 ordering opens/i).last().waitFor();
  });
  await check('registration POST carries city and Fan opt-in, no live data writes', async () => {
    let recorded;
    await page.route('**/api/preregister', async route => {
      recorded = route.request().postDataJSON();
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, city_status: 'interest_only' }) });
    });
    const join = page.locator('#join');
    await join.locator('input[name="first_name"]').fill('QA Test');
    await join.locator('input[name="email"]').fill('qa-test@example.invalid');
    await join.locator('select[name="country_code"]').selectOption('DE');
    await join.locator('select[name="city"]').selectOption('Berlin');
    await join.locator('input[name="merchandise_interest"]').check();
    await join.locator('input[name="privacy_accepted"]').check();
    await join.getByRole('button', { name: /Count me in — free/i }).click();
    await join.getByText(/You’re pre-registered for/i).waitFor();
    assert.equal(recorded.country_code, 'DE');
    assert.equal(recorded.city, 'Berlin');
    assert.equal(recorded.merchandise_interest, 'on');
    assert.equal(recorded.marketing_consent, undefined);
    assert.equal(recorded.privacy_accepted, 'on');
    await join.getByText(/first to hear when Chaos Fan Edition 001/i).waitFor();
  });
  await check('shop: only Chaos Fan Edition 001 is marketed; no checkout or bundle catalogue', async () => {
    const shop = await desktop.context.newPage();
    const response = await shop.goto(`${BASE}/shop`, { waitUntil: 'networkidle' });
    assert.equal(response?.status(), 200);
    await shop.getByRole('heading', { name: /One Fan/i }).waitFor();
    await shop.getByRole('heading', { name: /The Fan. That.s the drop/i }).waitFor();
    assert.equal(await shop.locator('.commerceProduct').count(), 1);
    assert.equal(await shop.getByRole('heading', { name: /Chaos Fan Edition 001/i }).count(), 1);
    assert.equal(await shop.locator('.commerceBundles').count(), 0);
    assert.equal(await shop.getByRole('button', { name: /buy|add to cart|checkout/i }).count(), 0);
    await shop.getByText(/Sales are not open/i).first().waitFor().catch(async () => {
      await shop.getByText(/Sales are not open; price and delivery availability/i).waitFor();
    });
    await shop.getByRole('link', { name: /Get the Fan launch alert/i }).first().click();
    assert.equal(new URL(shop.url()).hash, '#join');
    await shop.getByRole('button', { name: /Count me in — free/i }).waitFor();
    await shop.close();
  });
  await check('Fan detail page: first-access only, target price not represented as final', async () => {
    const detail = await desktop.context.newPage();
    const response = await detail.goto(`${BASE}/shop/chaos-fan`, { waitUntil: 'networkidle' });
    assert.equal(response?.status(), 200);
    await detail.getByText(/Target price €19.99/i).waitFor();
    await detail.getByText(/Orders are not yet open/i).waitFor();
    await detail.close();
  });
  await desktop.context.close();

  const mobile = await visit({ width: 375, height: 812 }, 'mobile');
  await check('mobile: challenge and signup remain accessible', async () => {
    await mobile.page.getByRole('radio', { name: /Two entirely different shoes/i }).check();
    await mobile.page.getByText('Management has been notified.').first().waitFor();
    await mobile.page.getByRole('button', { name: /Count me in — free/i }).waitFor();
    await mobile.page.getByRole('link', { name: /Meet the Chaos Fan/i }).waitFor();
  });
  await check('mobile: Fan-only shop has no overflow and shows only one featured product', async () => {
    const shop = await mobile.context.newPage();
    await shop.goto(`${BASE}/shop`, { waitUntil: 'networkidle' });
    const width = await shop.evaluate(() => ({ viewport: window.innerWidth, html: document.documentElement.scrollWidth }));
    assert.ok(width.html <= width.viewport + 2, JSON.stringify(width));
    assert.equal(await shop.locator('.commerceProduct').count(), 1);
    await shop.getByRole('link', { name: /Get the Fan launch alert/i }).first().waitFor();
    await shop.close();
  });
  await mobile.context.close();
  console.log(`SUCCESS: ${passed} smoke assertions passed`);
} finally {
  await browser.close();
}
