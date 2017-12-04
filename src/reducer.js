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

const reducers = {
  'URL INPUT': (state, action) => ({
    ...state,
    url: action.url,
    queryParams: parseQueryParams(action.url)
  }),
  'PARAM INPUT': (state, action) => {
    let queryParams = [...state.queryParams]
    queryParams[action.index] = [action.key, action.value]
    const url = '?' + queryParams.map(it => it[0] + '=' + it[1]).join('&')
    return {
      ...state,
      url,
      queryParams
    }
  }
}

function reducer (state = {url: ''}, action) {
  const defaultFn = () => ({ ...state })
  const maybeFn = reducers[action.type]
  return (maybeFn || defaultFn)(state, action)
}

export default reducer
