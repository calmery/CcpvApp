import React, { Component } from 'react'
import './Edit.css'
import IconTabs from './IconTabs'
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
      //color=
    }
  }

  componentDidMount() {
    this.props.setTitle('Edit')
  }

  render() {
    var contents = this.state.data.map((data, index) => {
    　return (
        <Contents username={data.username} date={data.date} text={data.text} key={index} />
      )
    })
    return (
      <div>
        <IconTabs />
        {contents}
      </div>
    )
  }
}
