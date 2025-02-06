/* eslint-disable no-var */
'use strict'

var test = require('tape')

test('esm', function (t) {
  return import('qs-stringify').then(function (m) {
    t.is(typeof m.default, 'function')
    t.is(m.default({ a: 1 }), 'a=1')
  })
})
