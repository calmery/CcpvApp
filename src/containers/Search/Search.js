import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import { Logo } from 'components'


import { setTitle } from 'modules/Title/actions'

export class Search extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Search'))
  }

  render() {
    return (
      <div className="Search">
        Hello!
      </div>
    )
  }
}
