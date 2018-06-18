import React, { Component } from 'react'
import './Setting.css'

export class Setting extends Component {
  componentDidMount() {
    this.props.setTitle('Setting')
  }

  render() {
    return <div className="Setting">Setting</div>
  }
}
