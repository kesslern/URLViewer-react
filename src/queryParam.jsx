import React from 'react'
import PropTypes from 'prop-types'

class QueryParam extends React.Component {
  static propTypes = {
    queryParam: PropTypes.array
  }

  render () {
    return (
      <li>{this.props.queryParam[0]} {this.props.queryParam[1]}</li>
    )
  }
}

export default QueryParam
