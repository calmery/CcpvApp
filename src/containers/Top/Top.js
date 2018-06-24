import React, { Component } from 'react'
import './Top.css'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export class Top extends Component {
  componentDidMount() {
    this.props.setTitle('Top')
  }

  render() {
    let array = []

    for (let i = 0; i < 100; i++) {
      array[i] = i
    }

    return (
      <div className="Top">
        <Button variant="raised" color="primary">
          Primary
        </Button>
        <List>
          {array.map(n => (
            <ListItem button>
              <ListItemText primary={n} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}
