import UrlParser from './util/urlParser'

const reducers = {
  'URL INPUT': (state, action) => ({
    ...state,
    ...UrlParser.parseUrl(action.url),
    url: action.url
  }),
  'SET PARAM VALUE': (state, action) => {
    let queryParams = [...state.queryParams]
    queryParams[action.index] = [queryParams[action.index][0], action.value]
    const url = UrlParser.toString({...state, queryParams})
    return {
      ...state,
      queryParams,
      url
    }
  },
  'SET PARAM KEY': (state, action) => {
    let queryParams = [...state.queryParams]
    queryParams[action.index] = [action.key, queryParams[action.index][1]]
    const url = UrlParser.toString({...state, queryParams})
    return {
      ...state,
      queryParams,
      url
    }
  },
  'PARAM REMOVE': (state, action) => {
    const queryParams = state.queryParams.slice()
    queryParams.splice(action.index, 1)
    const url = UrlParser.toString({...state, queryParams})
    return {
      ...state,
      queryParams,
      url
    }
  },
  'ADD QUERY PARAM': (state, action) => {
    const queryParams = state.queryParams.slice()
    queryParams.push(['', ''])
    return {
      ...state,
      queryParams
    }
  }
}

function reducer (state = {
  url: '',
  queryParams: [],
  protocol: '',
  host: '',
  path: '',
  anchor: ''
}, action) {
  const defaultFn = () => ({ ...state })
  const maybeFn = reducers[action.type]
  return (maybeFn || defaultFn)(state, action)
}

export default reducer
