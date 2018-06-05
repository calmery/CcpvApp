import React, { Component } from 'react'

import { setTitle } from 'modules/Title/actions'

export class Edit extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Edit'))
  }

  render() {
    return <p>Edit</p>
  }
}
