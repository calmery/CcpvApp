import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Search.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import axios from 'requests/axios'

export class SearchComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      query: '',
      loading: false
    }
  }

  search() {
    this.setState({ loading: true })
    axios
      .post(`/list`, {
        name: this.state.name,
        query: this.state.query
      })
      .then(response => {
        this.props.history.push('/edit', {
          id: response.data.id
        })
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

export const Search = withRouter(SearchComponent)
