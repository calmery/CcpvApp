import React, { Component } from 'react'

import { setTitle } from 'modules/Title/actions'

export class Setting extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Setting'))
  }

  render() {
    return <div>Setting</div>
  }
}
