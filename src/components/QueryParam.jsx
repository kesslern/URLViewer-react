import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  queryParams: state.queryParams
})

const mapDispatchToProps = (dispatch) => ({
  onKeyChange: (event) => {
    dispatch({
      type: 'SET PARAM KEY',
      index: event.target.parentNode.getAttribute('data-index'),
      key: event.target.value
    })
  },
  onValueChange: (event) => {
    dispatch({
      type: 'SET PARAM VALUE',
      index: event.target.parentNode.getAttribute('data-index'),
      value: event.target.value
    })
  },
  onRemove: (event) => {
    dispatch({
      type: 'PARAM REMOVE',
      index: event.target.parentNode.getAttribute('data-index')
    })
  }
})

class QueryParam extends React.Component {
  static propTypes = {
    queryParams: PropTypes.array,
    index: PropTypes.number,
    onRemove: PropTypes.func,
    onKeyChange: PropTypes.func,
    onValueChange: PropTypes.func
  }

  render () {
    const { queryParams, index, onRemove, onKeyChange, onValueChange } = this.props
    return (
      <li className='columns' data-index={index}>
        <button
          onClick={onRemove}>
          Remove
        </button>
        <input
          className='key-input input column'
          value={queryParams[index][0]}
          onChange={onKeyChange}
        />
        <input
          className='value-input input column'
          value={queryParams[index][1]}
          onChange={onValueChange}
        />
      </li>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryParam)
