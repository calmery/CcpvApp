import React, { Component } from 'react'
import './Setting.css'

import { Header } from 'containers'
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
        <Header menuToggle={this.props.menuToggle} title="Top" />
        <div onClick={this.authentication}>Authentication</div>
      </div>
    )
  }
}
