import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

import { Header } from 'containers'

import './Edit.css'
import Contents from './Contents'

import axios from 'requests/axios'

export class EditComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      data: []
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  componentWillMount() {
    console.log(this.props.location.state)
    if (!this.props.location.state) {
      this.props.history.push('/')
      return
    }

    const id = this.props.location.state.id
    axios
      .get(`/list/${id}`)
      .catch(err => {
        console.log(err)
      })
      .then(response => {
        if (response) {
          this.setState({ data: response.data.lists_tweets })
        }
        /*==list_tweets==
          id: number
          list_id: number
          tweet_id: number
          is_safe: boolean
          //Association
          @BelongsTo(() => List)
          list: List
          @BelongsTo(() => Tweet)
          tweet: Tweet
        */
      })
  }

  updateState(index) {
    const array = this.state.data.slice()
    array[index].is_safe = !this.state.data[index].is_safe
    this.setState({
      data: array
    })
  }

  cancel() {
    console.log('Cancel')
    window.location.href = '/'
  }

  save() {
    console.log('Save')
    console.log(this.state.data)
    const data = this.state.data.map((data, index) => {
          tweets: [{
            id: data.tweet.id,
            is_safe: data.is_safe
          }]
        })
    axios
      .post(`/list/${this.props.location.state.id}`, data)
      .then(response => {
        this.props.history.push('/list')
      })
  }

  render() {
    var contents = this.state.data.map((data, index) => {
      return (
        <Contents
          index={index}
          name={data.tweet.user.name}
          date={data.tweet.created_at}
          text={data.tweet.text}
          is_safe={data.is_safe}
          key={index}
          change={() => this.updateState(index)}
        />
      )
    })
    return (
      <div className="Edit">
        <Header menuToggle={this.props.menuToggle} title="Edit">
          <Button color="inherit" onClick={() => this.cancel()}>
            CANCEL
          </Button>
          <Button
            color="inherit"
            onClick={() => this.save() /*this.handleClickOpen*/}
          >
            SAVE
          </Button>
        </Header>
        {contents}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">編集しました</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              戻る
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export const Edit = withRouter(EditComponent)
