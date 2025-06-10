/* eslint-disable no-var */
'use strict'

var test = require('tape')
var hasDynamicImport = require('has-dynamic-import')
var stringify = require('../')

test('stringify', function (t) {
  t.is(stringify({
    a: 1,
    b: 2
  }), 'a=1&b=2', 'should stringify simple objects')
  t.is(stringify({
    nested: {
      a: {
        b: {
          c: 'd'
        }
      }
    }
  }), 'nested[a][b][c]=d', 'should nest objects using [xyz] syntax')
  t.is(stringify({
    'key&value': 'key=value'
  }), 'key%26value=key%3Dvalue', 'should URL encode')
  t.is(stringify({
    object: {
      xyz: 'hello'
    },
    array: [0, 1, 2]
  }), 'object[xyz]=hello&array[0]=0&array[1]=1&array[2]=2', 'should encode arrays')

  t.is(stringify({
    omit: undefined,
    omit2: null,
    keep: true
  }), 'keep=true', 'should omit null and undefined')

  t.end()
})

hasDynamicImport().then(function (supportsModules) {
  if (supportsModules) {
    require('./module')
  }
})
