import React from 'react'

class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (
      <a className="button is-primary" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </a>
    )
  }
}

export default Toggle
