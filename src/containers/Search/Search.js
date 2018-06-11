import React, { Component } from 'react'

import { setTitle } from 'modules/Title/actions'

export class Search extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Search'))
  }

  render() {
    return <div className="Search">Hello</div>
  }
}
