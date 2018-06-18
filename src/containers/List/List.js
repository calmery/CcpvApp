import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { setTitle } from 'modules/Title/actions'
export class List extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('List'))
  }

  render() {
    return (
      <div className="List">
        <Button variant="raised" color="primary">
          Primary
        </Button>
      </div>
    )
  }
}
