import PropTypes from 'prop-types'
import React from 'react'
import URLInput from './URLInput'
import QueryParam from './queryParam'
import { connect } from 'react-redux'

import 'bulma/bulma.sass'
import './style.scss'

const mapStateToProps = (state) => ({
  queryParams: state.queryParams
})

class RootApp extends React.Component {
  static propTypes = {
    queryParams: PropTypes.array
  }

  render () {
    return (
      <div id='app' className='container'>
        <div>
          <URLInput/>
        </div>
        <div>
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
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(RootApp)
