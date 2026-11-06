import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../src/core.js';
test('noise is deterministic with supplied RNG and fade clamps',()=>{const a=c.noise(100,()=>.75);assert.equal(a.length,100);assert.ok(a.every(Number.isFinite));assert.equal(c.fadeLevel(120,100),0);assert.equal(c.fadeLevel(20,100),1);assert.equal(c.fadeLevel(90,100),1/3)});
