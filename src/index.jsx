import React from 'react'
import ReactDOM from 'react-dom'
import URL from 'url-parse'
import QueryParam from './queryParam'

import 'bulma/bulma.sass'
import './style.scss'

import URLInput from './URLInput'
import FilterInput from './FilterInput.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      url: new URL()
    }
  }

  parse = (query) => query
    .substr(1)
    .split('&')
    .map(x => x.split('='))
    .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y)])

  onUrlChange = (urlString) => {
    const url = new URL(urlString)
    const queryParams = this.parse(url.query)
    this.setState(prevState => ({
      queryParams,
      url,
      urlString
    }))
  }

  onParamChange = (index, key, value) => {
    this.setState((prev, props) => {
      let queryParams = prev.queryParams
      queryParams[index] = [key, value]
      let url = prev.url
      url.query = '?' + queryParams.map(it => it[0] + '=' + it[1]).join('&')

      return {
        queryParams,
        url,
        urlString: url.toString()
      }
    })
  }

  render () {
    return (
      <div id='app' className='container'>
        <div>
          <URLInput
            onChange={this.onUrlChange}
            url={this.state.urlString}
          />
        </div>
        <div className='filter-inputs'>
          <FilterInput/>
          <FilterInput/>
          {!this.state.queryParams
            ? 'No query params'
            : <ul>
              {this.state.queryParams.map((param, index) => (
                <QueryParam
                  key={index}
                  paramIndex={index}
                  paramKey={param[0]}
                  paramValue={param[1]}
                  paramChange={this.onParamChange}
                />
              ))}
            </ul>
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
