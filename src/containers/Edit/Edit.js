import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import { Header } from 'containers'

import './Edit.css'
import Contents from './Contents'

export class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          username: 'taro',
          date: '2017/1/1',
          text: 'I am Taro',
          dangerFlg: true
        },
        {
          id: 2,
          username: 'jiro',
          date: '2017/3/1',
          text: 'I am jiro',
          dangerFlg: true
        },
        {
          id: 3,
          username: 'たろう',
          date: '2017/3/1',
          text: 'たろうです',
          dangerFlg: true
        },
        {
          id: 4,
          username: 'じろう',
          date: '2017/3/1',
          text: 'じろうです',
          dangerFlg: true
        }
      ]
    }
  }

  componentDidMount() {
    this.props.setTitle('Edit')
  }

  cancel() {
    console.log('Cancel')
  }

  save() {
    console.log('Save')
  }

  render() {
    var contents = this.state.data.map((data, index) => {
      return (
        <Contents
          username={data.username}
          date={data.date}
          text={data.text}
          key={index}
        />
      )
    })
    return (
      <div className="Edit">
        <Header menuToggle={this.props.menuToggle} title="Edit">
          <Button color="inherit" onClick={() => this.cancel()}>CANCEL</Button>
          <Button color="inherit" onClick={() => this.save()}>SAVE</Button>
        </Header>
        {contents}
      </div>
    )
  }
}
