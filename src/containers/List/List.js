import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import './List.css'

export class List extends Component {
  componentDidMount() {
    this.props.setTitle('List')
  }

  render() {
    const { classes } = this.props

    return (
      <div className="List">
        <Button variant="fab" color="primary" aria-label="add" className="button">
          <AddIcon />
        </Button>
      </div>
    )
  }
}
