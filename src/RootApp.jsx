import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import UrlViewer from './components/UrlViewer'
import reducer from './reducer'

import 'bulma/bulma.sass'
import './style.scss'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <UrlViewer/>
  </Provider>,
  document.getElementById('root')
)
