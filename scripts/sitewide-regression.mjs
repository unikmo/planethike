import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const base = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3000';
const routes = ['', '/the-chaos-walk', '/10000-step-challenge', '/walk-for-a-cause', '/companies', '/groups', '/cities', '/city-leads', '/the-cause', '/become-a-partner', '/schools', '/shop', '/shop/chaos-fan', '/join', '/guides', '/about', '/faq', '/contact', '/privacy', '/terms', '/imprint',
'/guides/how-many-miles-is-10000-steps','/guides/how-long-to-walk-10000-steps','/guides/10000-steps-in-km','/guides/10000-steps-calories','/guides/10k-walk-training-plan','/guides/walking-challenge-team-names','/guides/walking-challenge-ideas','/guides/how-to-organize-a-charity-walk','/guides/how-to-start-a-walking-group','/guides/walking-scavenger-hunt'];
await mkdir('smoke-artifacts', { recursive:true });
const browser = await chromium.launch({headless:true});
let passed = 0;
try {
  for (const width of [375, 1440]) {
    const context = await browser.newContext({viewport:{width,height:900}});
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror',e=>errors.push(e.message));
    for (const path of routes) {
      const response = await page.goto(base + path, {waitUntil:'domcontentloaded', timeout:30000});
      assert.equal(response?.status(),200, `HTTP ${response?.status()} ${path}`);
      await page.locator('body').waitFor();
      const metrics = await page.evaluate(()=>({html:document.documentElement.scrollWidth,viewport:innerWidth,main:!!document.querySelector('main'),heading:!!document.querySelector('h1')}));
      assert.ok(metrics.html <= metrics.viewport+2,`overflow ${path} width=${width} ${JSON.stringify(metrics)}`);
      assert.ok(metrics.main && metrics.heading,`missing main or h1 ${path}`);
      passed++;
      if (['/imprint','/contact','/privacy','/terms'].includes(path)) {
        const style = await page.locator('.phInfoSection').first().evaluate(el=>({display:getComputedStyle(el).display,columns:getComputedStyle(el).gridTemplateColumns}));
        assert.equal(style.display,'grid',`legal layout unstyled at ${path}`);
        await page.screenshot({path:`smoke-artifacts/${path.slice(1)}-${width}.png`,fullPage:true});
      }
      if (path==='/imprint') {
        assert.equal(await page.getByText('Consumer information').count(),0);
        assert.equal(await page.getByText('Website',{exact:true}).count(),0);
      }
      if (path==='/contact') {
        await page.getByRole('button',{name:'Send message'}).waitFor();
        await page.getByLabel('Your name').fill('Browser QA');
        await page.getByLabel('Your email').fill('qa@example.invalid');
        await page.getByLabel('Message').fill('Test message');
        await page.route('**/api/contact', async route=>route.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'}));
        await page.getByRole('button',{name:'Send message'}).click();
        await page.getByText('Your message was sent.').waitFor();
        await page.unroute('**/api/contact');
      }
    }
    await page.goto(base);
    assert.equal(await page.getByText('Local city details remain subject to confirmation.').count(),0);
    assert.ok(await page.locator('footer a[href="/contact"]').count()>0);
    assert.deepEqual(errors,[],`JS page errors at ${width}px`);
    await context.close();
  }
  const resp=await fetch(base+'/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:'x',email:'bad',message:'hello'})});
  assert.equal(resp.status,400,'bad contact email must fail');
  console.log(`PASS sitewide QA: ${passed} route/viewport combinations, legal CSS, forms, overflow, footer, validation`);
} finally { await browser.close(); }
