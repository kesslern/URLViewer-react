import React from 'react'
import PropTypes from 'prop-types'

class QueryParam extends React.Component {
  static propTypes = {
    paramKey: PropTypes.string,
    paramValue: PropTypes.string,
    paramIndex: PropTypes.number,
    paramChange: PropTypes.func
  }

  onKeyChange = (event) => {
    this.props.paramChange(
      this.props.paramIndex,
      event.target.value,
      this.props.paramValue)
  }

  onValueChange = (event) => {
    this.props.paramChange(
      this.props.paramIndex,
      this.props.paramKey,
      event.target.value)
  }

  render () {
    return (
      <li>
        <input
          className='key-input column'
          value={this.props.paramKey}
          onChange={this.onKeyChange}
        />
        <input
          className='value-input column'
          value={this.props.paramValue}
          onChange={this.onValueChange}
        />
      </li>
    )
  }
}

export default QueryParam
