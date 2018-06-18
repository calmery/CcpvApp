import React, { Component } from 'react'
import './Edit.css'

export class Edit extends Component {
  componentDidMount() {
    this.props.setTitle('Edit')
  }

  render() {
    return <div className="Edit">Edit</div>
  }
}
