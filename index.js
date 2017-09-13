function encode (key) {
  return encodeURIComponent(key)
}

function nest (current, key) {
  return current + '[' + encode(key) + ']'
}

module.exports = function queryStringify (obj, prefix) {
  var pairs = []
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue
    }

    var value = obj[key]
    var pair
    if (typeof value === 'object') {
      pair = queryStringify(value, prefix ? nest(prefix, key) : encode(key))
    } else if (prefix) {
      pair = nest(prefix, key) + '=' + encode(value)
    } else {
      pair = encode(key) + '=' + encode(value)
    }
    pairs.push(pair)
  }
  return pairs.join('&')
}
