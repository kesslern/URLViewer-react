import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import RootApp from './components/RootApp'
import reducer from './reducer'

import 'bulma/bulma.sass'
import './style.scss'

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
