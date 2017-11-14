import React from 'react'
import ReactDOM from 'react-dom'
import URL from 'url-parse'

import 'bulma/bulma.sass'
import './style.scss'

import URLInput from './URLInput'
import FilterInput from './FilterInput.jsx'

function log (it) {
  const url = new URL(it.target.value)
  const queryParams = parse(url.query)
  console.log(queryParams)
}

const parse = (query) => query
  .substr(1)
  .split('&')
  .map(x => x.split('='))
  .map(([x, y]) => [decodeURIComponent(x), decodeURIComponent(y)])

const app = (
  <div id='app' className='container'>
    <div><URLInput onChange={log}/></div>
    <div className='filter-inputs'><FilterInput/><FilterInput/></div>
  </div>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)
