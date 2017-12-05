const regex = {
  host: /\S+(?=\?|^)/,
  queryString: /(\?\S+)(?:#\S)?$/
}

function parseQueryParams (urlString) {
  const regexResult = regex.queryString.exec(urlString)
  if (regexResult) {
    return regexResult[0]
      .substr(1)
      .split('&')
      .map(x => (x.split('=')))
      .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y || '')])
  } else {
    return undefined
  }
}

function parseHost (urlString) {
  const regexResult = regex.host.exec(urlString)
  return regexResult ? regexResult[0] : ''
}

class UrlParser {
  static parseUrl (urlString) {
    return {
      host: parseHost(urlString),
      queryParams: parseQueryParams(urlString)
    }
  }

  static toString (parsedUrl) {
    return parsedUrl.host + '?' + parsedUrl.queryParams.map(it => it[0] + '=' + it[1]).join('&')
  }
}

export default UrlParser
