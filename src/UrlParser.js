const regex = {
  url: /([a-zA-Z]+:\/\/)?([a-zA-Z0-9.-]+)?(\/[/a-zA-Z0-9]+)?(\?[a-zA-Z0-9&=%]+)?(#[a-zA-Z0-9]+)?/
}

function parseQueryParamString (queryParams) {
  return queryParams
    .substr(1)
    .split('&')
    .map(x => (x.split('=')))
    .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y || '')])
    .filter(([x, y]) => (x !== ''))
}

class UrlParser {
  static parseUrl (urlString) {
    const parsedUrl = regex.url.exec(urlString)
    return {
      protocol: parsedUrl[1] || '',
      host: parsedUrl[2] || '',
      path: parsedUrl[3] || '',
      queryParams: parseQueryParamString(parsedUrl[4] || '?'),
      anchor: parsedUrl[5] || ''
    }
  }

  static toString (parsedUrl) {
    return parsedUrl.protocol +
      parsedUrl.host + parsedUrl.path + '?' + parsedUrl.queryParams.map(it => it[0] + '=' + it[1]).join('&') + parsedUrl.anchor
  }
}

export default UrlParser
