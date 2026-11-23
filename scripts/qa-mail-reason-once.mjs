import assert from 'node:assert/strict';
const result = await fetch('https://planethike.org/api/preregister', {
 method:'POST',
 headers:{'content-type':'application/json'},
 body:JSON.stringify({
  first_name:'PlanetHike SMTP Diagnostic QA',email:'hello@planethike.org',
  country_code:'DE',city:'Berlin',interest:'walker',privacy_accepted:true,
  merchandise_interest:false,marketing_consent:false
 }),
 signal:AbortSignal.timeout(30000)
});
const data=await result.json();
console.log('SAFE_SMTP_DIAGNOSTIC',JSON.stringify({
 status:result.status,ok:data.ok,already_registered:data.already_registered,
 confirmation_email:data.confirmation_email,
 confirmation_email_reason:data.confirmation_email_reason,
 city_status:data.city_status
}));
assert.equal(result.status,200);
assert.equal(data.ok,true);
assert.equal(data.already_registered,undefined,'A previous test signup is present');
console.log('PASS registration endpoint; SMTP status and diagnostic above');
