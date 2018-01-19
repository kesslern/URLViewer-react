import PropTypes from 'prop-types'
import React from 'react'
import URLInput from './URLInput'
import QueryParam from './QueryParam'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  queryParams: state.queryParams,
  url: state.url
})

class RootApp extends React.Component {
  static propTypes = {
    queryParams: PropTypes.array,
    url: PropTypes.string
  }

  render () {
    const editArea =
      <div id='edit-area' className={!this.props.url ? 'hidden' : null}>
        {this.props.queryParams.length === 0
          ? 'No query params'
          : <ul id='query-params'>
            {this.props.queryParams.map((param, index) => (
              <QueryParam
                key={index}
                index={index}
              />
            ))}
          </ul>
        }
      </div>

    return (
      <div id='app' className='container'>
        <div id='url-input' className={!this.props.url ? 'empty' : null}>
          <URLInput/>
        </div>
        {editArea}
      </div>
    )
  }
}
export default connect(mapStateToProps)(RootApp)
