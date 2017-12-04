import UrlParser from './UrlParser'

const reducers = {
  'URL INPUT': (state, action) => ({
    ...state,
    url: action.url,
    queryParams: UrlParser.parseUrl(action.url).queryParams
  }),
  'PARAM INPUT': (state, action) => {
    let queryParams = [...state.queryParams]
    queryParams[action.index] = [action.key, action.value]
    const url = UrlParser.toString({queryParams})
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
