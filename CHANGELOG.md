# qs-stringify change log

All notable changes to this project will be documented in this file.

# Unreleased

 * Add an ES Modules entry point.
 * Remove redundant `&` character when attempting to serialize `null` fields.
 * Omit `undefined` fields.

```js
stringify({
  omit: undefined,
  omit2: null,
  keep: true
})

// 1.x: 'omit=undefined&&keep=true'
// 2.x: 'keep=true'
```

# 1.2.1 / 14 May 2020

 * Fix return type in typescript definition file.

# 1.2.0 / 08 Dec 2019

 * Add typescript definition.

# 1.1.0 / 17 Sep 2017

 * Make it even smaller (<200 bytes after gzip)

# 1.0.0 / 13 Sep 2017

 * Initial release.
