import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './List.css'

export class List extends Component {
  componentDidMount() {
    this.props.setTitle('List')
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
