import React, { Component } from 'react'
import './Search.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import axios from 'axios'

export class Search extends Component {
  render() {
    return (
      <div className="Search">
      <TextField id="名前" label="名前" margin="normal" /><br />
        <TextField id="検索" label="検索" margin="normal" /><br />
        <Button variant="raised" color="primary" className="button">
          検索
        </Button>
      </div>
    )
  }
}
