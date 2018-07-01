import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import './List.css'

import { Header } from 'containers'

export class List extends Component {
  componentDidMount() {
    this.props.setTitle('List')
  }

  render() {
    return (
      <div className="List">
        <Header menuToggle={this.props.menuToggle} title="List" />
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className="button"
        >
          <AddIcon />
        </Button>
      </div>
    )
  }
}
