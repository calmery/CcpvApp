import React, { Component } from 'react'
import './Top.css'

export class Top extends Component {
  componentDidMount() {
    this.props.setTitle('Top')
  }

  render() {
    return <div className="Top">Top</div>
  }
}
