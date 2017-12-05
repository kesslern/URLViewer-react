import UrlParser from './UrlParser'

const reducers = {
  'URL INPUT': (state, action) => ({
    ...state,
    ...UrlParser.parseUrl(action.url),
    url: action.url
  }),
  'PARAM INPUT': (state, action) => {
    let queryParams = [...state.queryParams]
    queryParams[action.index] = [action.key, action.value]
    const url = UrlParser.toString({...state, queryParams})
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
