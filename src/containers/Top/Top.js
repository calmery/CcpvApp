import React, { Component } from 'react'
import './Top.css'

import { setTitle } from 'modules/Title/actions'

export class Top extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Top'))
  }

  render() {
    return <div className="Top">hello!</div>
  }
}
