import assert from 'node:assert/strict';
const base = 'https://planethike.org';
const payload = {
 first_name: 'PlanetHike SMTP QA',
 email: 'hello@planethike.org',
 country_code: 'DE',
 city: 'Berlin',
 interest: 'walker',
 privacy_accepted: true,
 merchandise_interest: false,
 marketing_consent: false
};
const res = await fetch(base + '/api/preregister', {
 method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(payload),
 signal:AbortSignal.timeout(30000)
});
const obj = await res.json();
console.log('E2E_RESULT',JSON.stringify({
 status:res.status, ok:obj.ok, already_registered:obj.already_registered,
 confirmation_email:obj.confirmation_email, city_status:obj.city_status
}));
assert.equal(res.status,200,'Registration must succeed');
assert.equal(obj.ok,true);
assert.equal(obj.already_registered,undefined,'Pre-existing registration prevents mail test');
assert.equal(obj.city_status,'interest_only');
assert.equal(obj.confirmation_email,'sent','SMTP acceptance must be verified, not inferred');
console.log('PASS: Production registration saved and Titan SMTP accepted notification');
