module.exports = function queryStringify (obj, prefix) {
  var pairs = []
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue
    }

    var value = obj[key]
    var enkey = encodeURIComponent(key)
    var pair
    if (typeof value === 'object') {
      pair = queryStringify(value, prefix ? prefix + '[' + enkey + ']' : enkey)
    } else {
      pair = (prefix ? prefix + '[' + enkey + ']' : enkey) + '=' + encodeURIComponent(value)
    }
    pairs.push(pair)
  }
  return pairs.join('&')
}
