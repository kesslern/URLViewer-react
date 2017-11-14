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
    this.state = {}
  }

  parse = (query) => query
    .substr(1)
    .split('&')
    .map(x => x.split('='))
    .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y)])

  log = (it) => {
    const url = new URL(it.target.value)
    const queryParams = this.parse(url.query)
    this.setState(prevState => ({
      queryParams
    }))
  }

  render () {
    return (
      <div id='app' className='container'>
        <div><URLInput onChange={this.log}/></div>
        <div className='filter-inputs'>
          <FilterInput/>
          <FilterInput/>
          {!this.state.queryParams
            ? 'No query params'
            : this.state.queryParams.map((param) =>
              <QueryParam key={param} queryParam={param}/>)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
