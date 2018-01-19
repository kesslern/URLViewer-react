import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  queryParams: state.queryParams
})

class QueryParam extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    queryParams: PropTypes.array,
    index: PropTypes.number
  }

  onKeyChange = (event) => {
    this.props.dispatch({
      type: 'PARAM INPUT',
      index: this.props.index,
      key: event.target.value,
      value: this.props.queryParams[this.props.index][1]
    })
  }

  onValueChange = (event) => {
    this.props.dispatch({
      type: 'PARAM INPUT',
      index: this.props.index,
      key: this.props.queryParams[this.props.index][0],
      value: event.target.value
    })
  }

  onRemove = (event) => {
    this.props.dispatch({
      type: 'PARAM REMOVE',
      index: this.props.index
    })
  }

  render () {
    const { queryParams, index } = this.props
    return (
      <li className='columns'>
        <button
          onClick={this.onRemove}>
          Remove
        </button>
        <input
          className='key-input input column'
          value={queryParams[index][0]}
          onChange={this.onKeyChange}
        />
        <input
          className='value-input input column'
          value={queryParams[index][1]}
          onChange={this.onValueChange}
        />
      </li>
    )
  }
}

export default connect(mapStateToProps)(QueryParam)
