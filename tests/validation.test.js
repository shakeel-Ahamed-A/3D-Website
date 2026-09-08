import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRegistration, validateRegistration } from '../src/validation.js';

test('normalizes whitespace and email case', () => {
  assert.deepEqual(normalizeRegistration({ teamName:'  Alpha   Lab ', leadName:'  Ada  Lovelace ', email:' ADA@EXAMPLE.COM ', teamSize:3, track:' Neural Forge ', consent:true }), { teamName:'Alpha Lab', leadName:'Ada Lovelace', email:'ada@example.com', teamSize:'3', track:'Neural Forge', consent:true });
});
test('accepts a complete valid registration', () => { assert.equal(validateRegistration({ teamName:'Orbit', leadName:'Ada', email:'ada@example.com', teamSize:'4', track:'PixelStorm', consent:true }).isValid, true); });
test('rejects blank values', () => { const result=validateRegistration({}); assert.equal(result.isValid,false); assert.deepEqual(Object.keys(result.errors),['teamName','leadName','email','teamSize','track','consent']); });
test('rejects malformed email and unsupported team size', () => { const result=validateRegistration({ teamName:'OK', leadName:'OK', email:'not-an-email', teamSize:'99', track:'ZeroDay', consent:true }); assert.equal(result.isValid,false); assert.ok(result.errors.email); assert.ok(result.errors.teamSize); });
test('handles non-string and special-character input safely', () => { const result=validateRegistration({ teamName:'<Team & Co>', leadName:42, email:'x@y.co', teamSize:1, track:'FormFlux', consent:true }); assert.equal(result.isValid,true); assert.equal(result.data.teamName,'<Team & Co>'); });
