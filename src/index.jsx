import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import RootApp from './RootApp'

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

const reducer = (state = {url: ''}, action) => {
  if (action.type === 'URL INPUT') {
    return {
      ...state,
      url: action.url,
      queryParams: parseQueryParams(action.url)
    }
  } else if (action.type === 'PARAM INPUT') {
    let queryParams = [...state.queryParams]
    queryParams[action.index] = [action.key, action.value]
    const url = '?' + queryParams.map(it => it[0] + '=' + it[1]).join('&')
    return {
      ...state,
      url,
      queryParams
    }
  } else {
    return { ...state }
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <RootApp/>
  </Provider>,
  document.getElementById('root')
)
