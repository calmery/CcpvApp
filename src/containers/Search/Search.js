import React, { Component } from 'react'
import './Search.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios'
import { url } from 'constants/url'
export class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      query: '',
      loading: false
    }
  }

  search() {
    this.setState({ loading: true})
    axios
      .post('https://quiet-plains-74935.herokuapp.com/search', {
        name: this.state.name,
        query: this.state.query
      })
      .then(response => {
        window. location.href='/edit?id='+response.data.id
      })
  }
  onChangeNameField(event) {
    this.setState({ name: event.target.value })
  }
  onChangeQueryField(event) {
    this.setState({ query: event.target.value })
  }

  render() {
    return (
      <div className="Search">
        <TextField
          id="名前"
          label="名前"
          margin="normal"
          onChange={c => this.onChangeNameField(c)}
        />
        <br />
        <TextField
          id="検索"
          label="検索"
          margin="normal"
          onChange={c => this.onChangeQueryField(c)}
        />
        <br />
        <Button
          variant="raised"
          color="primary"
          className="button"
          onClick={() => this.search()}
          disabled={this.state.loading}
        >
          検索
        </Button>
      </div>
    )
  }
}
