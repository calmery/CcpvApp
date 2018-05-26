import React, { Component } from 'react'

import { Logo } from 'components'
import './Top.css'

export class Top extends Component {
  render() {
    return (
      <div className="Top">
        <header className="Top-header">
          <Logo />
          <h1 className="Top-title">Welcome to React</h1>
        </header>
        <p className="Top-intro">Hello World !</p>
      </div>
    )
  }
}
