// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

require('../common');
const assert = require('assert');


function testUint8Array(ui) {
  const length = ui.length;
  for (let i = 0; i < length; i++)
    if (ui[i] !== 0) return false;
  return true;
}


for (let i = 0; i < 100; i++) {
  Buffer.alloc(0);
  const ui = new Uint8Array(65);
  assert.ok(testUint8Array(ui), `Uint8Array is not zero-filled: ${ui}`);
}
