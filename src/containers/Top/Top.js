import React, { Component } from 'react'
import './Top.css'

import { Header } from 'containers'

export class Top extends Component {
  componentDidMount() {
    this.props.setTitle('Top')
  }

  render() {
    return (
      <div className="Top">
        <Header menuToggle={this.props.menuToggle} title="Top" />
        Hello
      </div>
    )
  }
}
