import PropTypes from 'prop-types'
import React from 'react'
import UrlInput from './UrlInput'
import QueryParam from './QueryParam'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  queryParams: state.queryParams,
  url: state.url
})

const mapDispatchToProps = (dispatch) => ({
  addQueryParam: (event) => {
    dispatch({
      type: 'ADD QUERY PARAM'
    })
  }
})

class RootApp extends React.Component {
  static propTypes = {
    queryParams: PropTypes.array,
    addQueryParam: PropTypes.func,
    url: PropTypes.string
  }

  render () {
    const editArea =
      <div id='edit-area' className={!this.props.url ? 'hidden' : null}>
        <div>
          <ul id='query-params'>
            {this.props.queryParams.map((param, index) => (
              <QueryParam
                key={index}
                index={index}
              />
            ))}
            <li>
              <button onClick={this.props.addQueryParam}>Add query param</button>
            </li>
          </ul>
        </div>
      </div>

    return (
      <div id='app' className='container'>
        <div id='url-input' className={!this.props.url ? 'empty' : null}>
          <UrlInput/>
        </div>
        {editArea}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RootApp)
