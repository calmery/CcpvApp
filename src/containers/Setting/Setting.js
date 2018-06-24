import React, { Component } from 'react'
import './Setting.css'

import authentication from 'requests/authentication'

export class Setting extends Component {
  componentDidMount() {
    this.props.setTitle('Setting')
  }

  async authentication() {
    await authentication.authentication()
  }

  render() {
    return (
      <div className="Setting">
        <div onClick={this.authentication}>Authentication</div>
      </div>
    )
  }
}
