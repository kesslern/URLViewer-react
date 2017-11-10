import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma/bulma.sass'
import './style.scss'

import URLInput from './URLInput'
import FilterInput from './FilterInput.jsx'

function log (it) {
  console.log(it.target.value)
}

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
