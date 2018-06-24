import React, { Component } from 'react'
import './Search.css'

export class Search extends Component {
  componentDidMount() {
    this.props.setTitle('Search')
  }

  render() {
    return <div className="Search">Hello!</div>
  }
}
