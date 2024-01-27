import * as assert from 'node:assert/strict';
import {test} from 'node:test';
import {queryStringify} from '../main.js';

test('queryStringify', async (t) => {
  await t.test('stringify simple objects', () => {
    assert.equal(
      queryStringify({
        a: 1,
        b: 2
      }),
      'a=1&b=2'
    );
  });

  await t.test('nested objects using [xyz] syntax', () => {
    assert.equal(
      queryStringify({
        nested: {
          a: {
            b: {
              c: 'd'
            }
          }
        }
      }),
      'nested%5Ba%5D%5Bb%5D%5Bc%5D=d'
    );
  });

  await t.test('URL encoding', () => {
    assert.equal(
      queryStringify({
        'key&value': 'key=value'
      }),
      'key%26value=key%3Dvalue'
    );
  });

  await t.test('encoded arrays', () => {
    assert.equal(
      queryStringify({
        object: {
          xyz: 'hello'
        },
        array: [0, 1, 2]
      }),
      'object%5Bxyz%5D=hello&array%5B0%5D=0&array%5B1%5D=1&array%5B2%5D=2'
    );
  });
});
