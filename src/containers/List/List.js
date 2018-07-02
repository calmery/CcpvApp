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

import { Header, SearchDialog, NotificationDialog } from 'containers'

export class ListComponent extends Component {
  componentDidMount() {
    this.props.setTitle('List')
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
          <ListItem button>
            <Checkbox checked={true} />
            <ListItemText primary="001" secondary="July 20, 2014" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <Checkbox checked={true} />
            <ListItemText primary="002" secondary="July 20, 2014" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    )
  }
}
