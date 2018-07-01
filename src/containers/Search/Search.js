import React, { Component } from 'react'
import './Search.css'

import { Header } from 'containers'

export class Search extends Component {
  componentDidMount() {
    this.props.setTitle('Search')
  }

  render() {
    return (
      <div className="Search">
        <Header menuToggle={this.props.menuToggle} title="Search" />
        Hello!
      </div>
    )
  }
}
