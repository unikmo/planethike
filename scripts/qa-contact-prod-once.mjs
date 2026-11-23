import assert from 'node:assert/strict';
const base='https://planethike.org';
for(const path of ['/imprint','/contact','/privacy','/terms']) {
  const r=await fetch(base+path,{signal:AbortSignal.timeout(15000)});
  assert.equal(r.status,200,'Page failed '+path);
  const html=await r.text();
  assert.match(html,/phInfoPage/);
  if(path==='/imprint') {
    assert.ok(!html.includes('Consumer information'));
    assert.ok(!html.includes('Additional purchase, shipping'));
  }
}
const result=await fetch(base+'/api/contact',{
  method:'POST',headers:{'content-type':'application/json'},
  body:JSON.stringify({name:'PlanetHike Production QA',email:'qa-contact@planethike.org',message:'Automated one-time contact form delivery check after sitewide layout repair. No reply needed.'}),
  signal:AbortSignal.timeout(30000)
});
const obj=await result.json();
console.log('CONTACT_E2E_RESULT',JSON.stringify({status:result.status,ok:obj.ok,error:obj.error}));
assert.equal(result.status,200);
assert.equal(obj.ok,true);
console.log('PASS live contact SMTP accepted; verify inbox receipt separately');
