import React, { Component } from 'react'
import './Search.css'

import { Header } from 'containers'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class Search extends Component {
  componentDidMount() {
    this.props.setTitle('Search')
  }

  render() {
    return (
      <div className="Search">
        <Header menuToggle={this.props.menuToggle} title="Search" />
        <TextField id="検索" label="検索" margin="normal" />
        <Button variant="raised" color="primary">
          Primary
        </Button>
      </div>
    )
  }
}
