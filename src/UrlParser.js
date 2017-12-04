function matchRegex (regex, str, defaultValue) {
  const result = regex.exec(str)
  if (result) {
    return result[0]
  } else {
    return defaultValue
  }
}

function parseQueryParams (urlString) {
  const queryParamRegex = /(\?\S+)(?:#\S)?$/
  const queryParamString = matchRegex(queryParamRegex, urlString, '?')
  return queryParamString
    .substr(1)
    .split('&')
    .map(x => (x.split('=')))
    .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y || '')])
}

class UrlParser {
  static parseUrl (urlString) {
    return {
      queryParams: parseQueryParams(urlString)
    }
  }

  static toString (parsedUrl) {
    return '?' + parsedUrl.queryParams.map(it => it[0] + '=' + it[1]).join('&')
  }
}

export default UrlParser
