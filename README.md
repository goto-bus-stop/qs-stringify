# qs-stringify

Simple query stringify with nesting.

[![npm][npm-image]][npm-url]
[![github][github-image]][github-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/qs-stringify.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/qs-stringify
[github-image]: https://github.com/goto-bus-stop/qs-stringify/workflows/Node%20CI/badge.svg
[github-url]: https://github.com/goto-bus-stop/qs-stringify/actions
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install qs-stringify
```

## Usage

```js
var stringify = require('qs-stringify')

stringify({
  page: {
    offset: 50,
    limit: 25
  },
  filter: 'hello world'
})
// → "page[offset]=50&page[limit]=25&filter=hello%20world"
```

This module expects that you know the shape of the query string you want to print, and only does trivial serialization of strings, numbers, and nested objects.
If you want to use other types or do custom serialization, fit them into a supported shape first:

```js
var stringify = require('qs-stringify')

var startAt = new Date()
var filterTags = ['work', 'home']

stringify({
  tags: filterTags.join(','),
  startAt: startAt.toISOString(),
})
// → "tags=work,home&startAt=2024-10-15T20%3A22%3A36.883Z"
```

## License

[MIT](LICENSE.md)
