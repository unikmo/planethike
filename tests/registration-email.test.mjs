import test from 'node:test';
import assert from 'node:assert/strict';
import { sendRegistrationConfirmation } from '../app/registration-email.ts';

const input = { email:'user@example.invalid', firstName:'Mina', city:'Berlin', fanInterest:true };

test('missing Titan SMTP credentials does not send', async () => {
  let called=false;
  const status=await sendRegistrationConfirmation(input,{
    user:'',password:'', send:async()=>{called=true;}
  });
  assert.equal(status,'not_configured');
  assert.equal(called,false);
});

test('registration receipt uses verified Titan mailbox and Fan consent correctly', async()=>{
  let delivered;
  const status=await sendRegistrationConfirmation(input,{
    user:'hello@planethike.org',password:'test-smtp-pass',
    send:async mail=>{delivered=mail; return {messageId:'mock-id'};}
  });
  assert.equal(status,'sent');
  assert.deepEqual(delivered.from,{name:'PlanetHike',address:'hello@planethike.org'});
  assert.equal(delivered.to,input.email);
  assert.match(delivered.text,/one-time alert when Chaos Fan/);
  assert.match(delivered.text,/not yet confirmed/);
  assert.doesNotMatch(delivered.text,/You are subscribed to marketing/);
});

test('no Fan interest means no Fan opt-in confirmation',async()=>{
  let delivered;
  const status=await sendRegistrationConfirmation({...input,fanInterest:false},{
    user:'hello@planethike.org',password:'test',send:async mail=>{delivered=mail;}
  });
  assert.equal(status,'sent');
  assert.match(delivered.text,/did not request the optional Chaos Fan/);
});

test('Titan SMTP failure does not masquerade as sent',async()=>{
  const status=await sendRegistrationConfirmation(input,{
    user:'hello@planethike.org',password:'test',send:async()=>{throw Error('SMTP failed');}
  });
  assert.equal(status,'failed');
});

test('user-supplied fields are stripped of embedded newlines',async()=>{
  let delivered;
  await sendRegistrationConfirmation({...input,firstName:'Mina\nInjected Subject:',city:'Berlin\r\nInjected header'},{
    user:'hello@planethike.org',password:'test',send:async mail=>{delivered=mail;}
  });
  assert.doesNotMatch(delivered.text,/Mina\nInjected Subject/);
  assert.doesNotMatch(delivered.text,/Berlin\r\nInjected header/);
});

test('classifies Titan 535 authentication rejection without leaking details', async () => {
  const status=await sendRegistrationConfirmation(input,{
    user:'hello@planethike.org',password:'test',send:async()=> {
      const e=new Error('secret mail server details'); e.code='EAUTH'; e.responseCode=535; throw e;
    }
  });
  assert.equal(status,'auth_failed');
});

test('classifies Titan socket connection failure without leaking details', async () => {
  const status=await sendRegistrationConfirmation(input,{
    user:'hello@planethike.org',password:'test',send:async()=> {
      const e=new Error('secret'); e.code='ESOCKET'; throw e;
    }
  });
  assert.equal(status,'connection_failed');
});
