import React, { Component } from 'react'
import { setTitle } from 'modules/Title/actions'

export class List extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('List'))
  }

  render() {
    return <div className="List">hello!</div>
  }
}
