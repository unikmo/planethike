import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const send = process.argv.includes('--send');
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const from = process.env.PLANETHIKE_FROM_EMAIL;
const resendKey = process.env.RESEND_API_KEY;
const orderUrl = process.env.FAN_ORDER_URL;
const approved = process.env.FAN_LAUNCH_APPROVED === 'YES';

assert.ok(url?.startsWith('https://') && key, 'Supabase admin credentials required');
const base = url.replace(/\/$/, '');
const headers = {
  apikey: key,
  Authorization: `Bearer ${key}`,
  'Content-Type': 'application/json',
};
if (send) {
  assert.ok(approved, 'Explicit FAN_LAUNCH_APPROVED=YES required');
  assert.ok(resendKey && from, 'Verified sender and Resend API key required');
  assert.ok(orderUrl?.startsWith('https://planethike.org/'), 'Only PlanetHike ordering URL allowed');
  const shop = await fetch('https://planethike.org/shop', {cache:'no-store'});
  assert.equal(shop.status, 200, 'Live shop must be available');
  const html = await shop.text();
  assert.ok(!html.includes('Orders are not yet open'), 'Cannot announce before launch');
}

let total=0, accepted=0, failed=0;
for(let page=0;page<100;page++){
  const response=await fetch(
    `${base}/rest/v1/planethike_preregistrations?select=id,first_name,email&merchandise_interest=eq.true&fan_launch_notified_at=is.null&order=id.asc&limit=100&offset=${page*100}`,
    {headers,cache:'no-store'}
  );
  assert.equal(response.status,200,'Supabase subscriber list failed');
  const rows=await response.json();
  if (!rows.length) break;
  total+=rows.length;
  if (!send) {
    if (rows.length<100) break;
    continue;
  }
  // Process from a stable snapshot: each accepted row is marked, so never use
  // OFFSET while processing and removing rows from the pending subset.
  for (const row of rows){
    const idempotencyKey = createHash('sha256')
      .update('chaos-fan-001-launch:'+row.email.trim().toLowerCase()).digest('hex');
    const safeName=String(row.first_name).replace(/[\r\n\x00-\x1f]/g,' ').trim();
    try {
      const sent=await fetch('https://api.resend.com/emails',{
        method:'POST',
        headers:{
          'Authorization':`Bearer ${resendKey}`,
          'Content-Type':'application/json',
          'Idempotency-Key':idempotencyKey
        },
        body:JSON.stringify({
          from, to:[row.email],
          subject:'Chaos Fan Edition 001 ordering is open',
          text:`Hi ${safeName},\n\nYou asked for a one-time alert when Chaos Fan Edition 001 ordering opened. Ordering is now open: ${orderUrl}\n\nThe Chaos Walk remains free, with no purchase required.\n\nPlanetHike\n`
        }),
        signal: AbortSignal.timeout(15000)
      });
      if (!sent.ok) throw new Error(`Resend HTTP ${sent.status}`);
      const marked=await fetch(
        `${base}/rest/v1/planethike_preregistrations?id=eq.${encodeURIComponent(row.id)}&fan_launch_notified_at=is.null`,
        {
          method:'PATCH',headers:{...headers,Prefer:'return=minimal'},
          body:JSON.stringify({fan_launch_notified_at:new Date().toISOString()}),
          signal:AbortSignal.timeout(15000)
        }
      );
      if (!marked.ok) throw new Error(`Supabase acknowledgement HTTP ${marked.status}`);
      accepted++;
    } catch (error) {
      failed++;
      console.error('Fan launch alert failed for registration id',row.id,String(error));
    }
  }
  // stop after one page in send mode; run again to process next 100 pending rows.
  break;
}
console.log(JSON.stringify({mode:send?'SEND':'DRY_RUN',pendingConsidered:total,accepted,failed}));
if(failed) process.exitCode=1;
