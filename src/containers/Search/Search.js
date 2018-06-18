import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { setTitle } from 'modules/Title/actions'

export class Search extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Search'))
  }

  render() {
    return (
      <div className="Search">
      <Button variant="raised" color="primary">
          Primary
        </Button>
        </div>
    )
  }
}
