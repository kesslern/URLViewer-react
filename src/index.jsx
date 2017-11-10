import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma/bulma.sass'
import './style.scss'

import URLInput from './URLInput'
import FilterInput from './FilterInput.jsx'

const app = (
  <div id='app' className='container'>
    <div><URLInput/></div>
    <div className='filter-inputs'><FilterInput/><FilterInput/></div>
  </div>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)
