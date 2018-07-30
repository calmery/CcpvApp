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
      data: [
        {
          id: 1,
          name: 'taro',
          date: '2017/1/1',
          text: 'I am Taro',
          isSafe: true
        },
        {
          id: 2,
          name: 'jiro',
          date: '2017/3/1',
          text: 'I am jiro',
          isSafe: true
        },
        {
          id: 3,
          name: 'たろう',
          date: '2017/3/1',
          text: 'たろうです',
          isSafe: true
        },
        {
          id: 4,
          name: 'じろう',
          date: '2017/3/1',
          text: 'じろうです',
          isSafe: true
        }
      ]
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
        /*
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
    console.log(this.state.data)
    array[index].isSafe = !this.state.data[index].isSafe
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
    //更新後のツイート情報を保存
  }

  render() {
    var contents = this.state.data.map((data, index) => {
      return (
        <Contents
          index={index}
          name={data.name}
          date={data.date}
          text={data.text}
          isSafe={data.isSafe}
          key={index}
          change={() => this.updateState(index)}
          // index={index}
          // name={data.list.name}
          // date={data.tweet.created_at}
          // text={data.tweet.text}
          // isSafe={data.is_safe}
          // key={index}
          // change={() => this.updateState(index)}
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
