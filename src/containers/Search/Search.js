import React, { Component } from 'react'
import './Search.css'
import TextField from '@material-ui/core/TextField'

export class Search extends Component {
  render() {
    return (
      <div className="Search">
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="query"
          label="Query"
          type="text"
          fullWidth
        />
      </div>
    )
  }
}
