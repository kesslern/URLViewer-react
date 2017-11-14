import React from 'react'
import PropTypes from 'prop-types'

class QueryParam extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      key: props.paramKey,
      value: props.paramValue
    }
  }

  static propTypes = {
    paramKey: PropTypes.string,
    paramValue: PropTypes.string
  }

  onKeyChange = (event) => {
    this.setState({
      key: event.target.value
    })
  }

  onValueChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <li>
        <input
          className='key-input column'
          value={this.state.key}
          onChange={this.onKeyChange}
        />
        <input
          className='value-input column'
          value={this.state.value}
          onChange={this.onValueChange}
        />
      </li>
    )
  }
}

export default QueryParam
