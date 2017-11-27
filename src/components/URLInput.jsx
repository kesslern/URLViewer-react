import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  url: state.url
})

class URLInput extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    url: PropTypes.string
  }

  onChange = (event) => {
    this.props.dispatch({ type: 'URL INPUT', url: event.target.value })
  }

  render () {
    return (
      <input
        className='input'
        type='text'
        placeholder='Enter URL'
        onChange={this.onChange}
        value={this.props.url}/>
    )
  }
}

export default connect(mapStateToProps)(URLInput)
