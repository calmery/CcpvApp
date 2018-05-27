import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connectStore } from 'modules/store'

import { ToDo } from 'containers'

import { Logo } from 'components'
import './Top.css'

export class TopComponent extends Component {
  render() {
    return (
      <div className="Top">
        <header className="Top-header">
          <Logo />
          <h1 className="Top-title">Welcome to React</h1>
        </header>
        <p className="Top-intro">Hello World !</p>
        <ToDo />
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

export const Top = connectStore(TopComponent)
