import React from 'react'
import PropTypes from 'prop-types'

class URLInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    url: PropTypes.string
  }

  onChange = (event) => {
    this.props.onChange(event.target.value)
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

export default URLInput
