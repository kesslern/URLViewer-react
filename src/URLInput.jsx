import React from 'react'
import PropTypes from 'prop-types'

class URLInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  render () {
    return (
      <input
        className='input'
        type='text'
        placeholder='Enter URL'
        onChange={this.props.onChange}/>
    )
  }
}

export default URLInput
