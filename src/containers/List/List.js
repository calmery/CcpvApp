import React, { Component } from 'react'
import './List.css'

export class List extends Component {
  componentDidMount() {
    this.props.setTitle('List')
  }

  render() {
    return <div className="List">hello!</div>
  }
}
