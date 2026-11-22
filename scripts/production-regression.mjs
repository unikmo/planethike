import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = 'https://planethike.org';
const paths = ['/', '/shop', '/shop/chaos-fan', '/the-chaos-walk', '/faq', '/privacy', '/city-leads'];
const browser = await chromium.launch({ headless: true });
let checks = 0;
try {
  for (const viewport of [{width:375,height:812}, {width:768,height:1024}, {width:1440,height:900}]) {
    const context = await browser.newContext({viewport});
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const path of paths) {
      const start = Date.now();
      const response = await page.goto(base+path, {waitUntil:'domcontentloaded', timeout:25000});
      assert.equal(response?.status(), 200, `${path} http status`);
      await page.waitForTimeout(100);
      const dimension = await page.evaluate(() => ({
        vw:innerWidth,
        body:document.body.scrollWidth,
        html:document.documentElement.scrollWidth
      }));
      assert.ok(dimension.html <= dimension.vw + 3, `Overflow ${viewport.width} ${path}: ${JSON.stringify(dimension)}`);
      assert.deepEqual(errors, [], `JS errors on ${path}`);
      const elapsed = Date.now()-start;
      console.log(`PASS ${viewport.width} ${path} HTTP 200 no overflow / JS errors (${elapsed}ms)`);
      checks++;
    }
    if (viewport.width === 375) {
      await page.goto(base);
      const merch = page.locator('input[name="merchandise_interest"]');
      const marketing = page.locator('input[name="marketing_consent"]');
      const privacy = page.locator('input[name="privacy_accepted"]');
      assert.equal(await merch.isChecked(),false);
      assert.equal(await marketing.isChecked(),false);
      assert.equal(await privacy.isChecked(),false);
      console.log('PASS opt-in default state');
      checks++;
    }
    await context.close();
  }
  const response = await fetch(base+'/api/preregister', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
    first_name:'Test', email:'bad@invalid',country_code:'DE',city:'Berlin',privacy_accepted:false
  })});
  assert.equal(response.status,400);
  checks++;
  console.log('PASS invalid privacy consent rejection');
  const home = await fetch(base);
  const headerNames = ['content-security-policy','strict-transport-security','x-content-type-options','referrer-policy','permissions-policy','x-frame-options'];
  for (const key of headerNames) {
    console.log(`SECURITY_HEADER ${key}: ${home.headers.has(key) ? 'PRESENT' : 'MISSING'}`);
  }
  const samples=[];
  for(let i=0;i<5;i++){
    const start=performance.now();
    const res=await fetch(base+'/shop', {cache:'no-store'});
    await res.arrayBuffer();
    assert.equal(res.status,200);
    samples.push(Math.round(performance.now()-start));
  }
  samples.sort((a,b)=>a-b);
  console.log('PERFORMANCE shop 5-request ms sorted:',samples.join(','));
  console.log('PASS production regression checks:',checks);
} finally { await browser.close(); }
