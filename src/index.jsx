import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Toggle from './toggle'

import 'bulma/bulma.sass'
import './style.scss'

import Navbar from './navbar'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h1>Hello, {this.props.title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

Clock.propTypes = {
  title: PropTypes.string.isRequired
}

const app = (
  <div>
    <Navbar/>
    <Clock title='world'/>
    <Toggle/>
  </div>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)
