import React from 'react'
import ReactDOM from 'react-dom'
// import QueryParam from './queryParam'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bulma/bulma.sass'
import './style.scss'

import URLInput from './URLInput'
import FilterInput from './FilterInput.jsx'

class App extends React.Component {
  reducer = (state = {url: ''}, action) => {
    if (action.type === 'URL INPUT') {
      return {
        ...state,
        url: action.url
      }
    } else {
      return { ...state }
    }
  }

  store = createStore(this.reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  parseQuery = (query) => query
    .substr(1)
    .split('&')
    .map(x => x.split('='))
    .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y)])

  matchRegex = (regex, str, defaultValue) => {
    const result = regex.exec(str)
    if (result) {
      return result[0]
    } else {
      return defaultValue
    }
  }

  /*
  onUrlChange = (urlString) => {
    const queryParamRegex = /(\?\S+)(?:#\S)?$/
    const queryParamString = this.matchRegex(queryParamRegex, urlString, '?')
    const queryParamList = this.parseQuery(queryParamString)
  }
  */

  /*
  onParamChange = (index, key, value) => {
    let queryParamList = prev.queryParamList
    queryParamList[index] = [key, value]
    const urlString = '?' + queryParamList.map(it => it[0] + '=' + it[1]).join('&')
  }
  */

  render () {
    return (
      <Provider store={this.store}>
        <div id='app' className='container'>
          <div>
            <URLInput/>
          </div>
          <div className='filter-inputs'>
            <FilterInput/>
            <FilterInput/>
            {/* !this.state.queryParamList
              ? 'No query params'
              : <ul>
                {this.state.queryParamList.map((param, index) => (
                  <QueryParam
                    key={index}
                    paramIndex={index}
                    paramKey={param[0]}
                    paramValue={param[1]}
                    paramChange={this.onParamChange}
                  />
                ))} 
              </ul>
              */}
          </div>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
