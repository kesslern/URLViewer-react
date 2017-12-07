import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  url: state.url
})

const mapDispatchToProps = (dispatch) => ({
  urlChange: (event) => {
    dispatch({
      type: 'URL INPUT',
      url: event.target.value
    })
  }
})

class URLInput extends React.Component {
  static propTypes = {
    urlChange: PropTypes.func,
    url: PropTypes.string
  }

  render () {
    return (
      <input
        className='input'
        type='text'
        placeholder='Enter URL'
        onChange={this.props.urlChange}
        value={this.props.url}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(URLInput)
