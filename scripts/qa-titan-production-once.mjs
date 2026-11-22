import assert from 'node:assert/strict';
const base='https://planethike.org';
const email='hello@planethike.org';
const payload={
  first_name:'PlanetHike QA', email, country_code:'DE', city:'Berlin',
  interest:'walker', privacy_accepted:true, marketing_consent:false,
  merchandise_interest:true
};
const get=await fetch(base+'/shop',{signal:AbortSignal.timeout(12000)});
assert.equal(get.status,200);
const html=await get.text();
assert.ok(html.includes('One Fan'));
console.log('PASS production Fan-only shop');
const invalid=await fetch(base+'/api/preregister',{
  method:'POST',headers:{'content-type':'application/json'},
  body:JSON.stringify({...payload,privacy_accepted:false}),
  signal:AbortSignal.timeout(15000)
});
assert.equal(invalid.status,400);
console.log('PASS rejection without privacy consent');
const response=await fetch(base+'/api/preregister',{
  method:'POST',headers:{'content-type':'application/json'},
  body:JSON.stringify(payload),signal:AbortSignal.timeout(25000)
});
const data=await response.json();
console.log('PRODUCTION_REGISTRATION',JSON.stringify({
  status:response.status,ok:data.ok,already_registered:data.already_registered,
  city_status:data.city_status,confirmation_email:data.confirmation_email
}));
assert.equal(response.status,200);
assert.equal(data.ok,true);
assert.equal(data.already_registered,undefined,'Email already registered; no new email would be sent');
console.log('PASS actual website API registration for Titan inbox');
