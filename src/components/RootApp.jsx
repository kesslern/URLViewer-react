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
    const editArea = this.props.url
      ? <div>
        {!this.props.queryParams
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
      </div> : null

    return (
      <div id='app' className='container'>
        <div>
          <URLInput/>
        </div>
        {editArea}
      </div>
    )
  }
}

export default connect(mapStateToProps)(RootApp)
