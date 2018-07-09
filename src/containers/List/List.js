import React, { Component } from 'react'

import './List.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { Header, SearchDialog } from 'containers'
import { NotificationDialog } from 'components'

import axios from 'axios'
import {url} from 'constants/url'

export class ListComponent extends Component {
constructor(props){
  super(props)

  this.state = {
    contents: []
  }
}

  componentDidMount() {
    this.props.setTitle('List')

axios.get(url + '/list').then(response => {
  this.setState({ contents: response.data })
})
  }

delete(index) {
  let contents = this.state.contents
  let result = []

for {let;
  result[] = cotents[]
}
result[0] = contents[1]
result[1] = contents[2]
result[2] = contents[3]
result[3] = contents[4]

//console.log (contents)

  this.setState({ contents: result })
}

  render() {
    return (
      <div className="List">
        <Header menuToggle={this.props.menuToggle} title="List">
          <IconButton
            aria-haspopup="true"
            color="inherit"
            onClick={() => this.refs.notification_dialog.toggle()}
          >
            <NotificationsNone />
          </IconButton>
        </Header>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className="button"
          onClick={() => this.refs.search_dialog.toggle()}
        >
          <AddIcon />
        </Button>
        <NotificationDialog ref="notification_dialog" />
        <SearchDialog ref="search_dialog" />
        <List>
{this.state.contents.map((content, index) => {
  return (
    <ListItem button key={index}>
	<Checkbox checked={true} />
            <ListItemText primary={content.name} secondary={content.query} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={() => this.delete(index)} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
  )
})}
        </List>
      </div>
    )
  }
}
