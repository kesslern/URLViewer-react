import React from 'react'
import PropTypes from 'prop-types'

class QueryParam extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      queryKey: props.queryParam[0],
      queryValue: props.queryParam[1]
    }
  }

  static propTypes = {
    queryParam: PropTypes.array
  }

  onKeyChange = (event) => {
    this.setState({
      queryKey: event.target.value
    })
  }

  onValueChange = (event) => {
    this.setState({
      queryValue: event.target.value
    })
  }

  render () {
    return (
      <li>
        <input
          className='key-input column'
          value={this.state.queryKey}
          onChange={this.onKeyChange}
        />
        <input
          className='value-input column'
          value={this.state.queryValue}
          onChange={this.onValueChange}
        />
      </li>
    )
  }
}

export default QueryParam
