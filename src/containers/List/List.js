import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import './List.css'

import { Header } from 'containers'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export class ListComponent extends Component {
  componentDidMount() {
    this.props.setTitle('List')
  }

  render() {
    return (
      <div className="List">
        <Header menuToggle={this.props.menuToggle} title="List" />

        <List component="nav">
          <ListItem button>
            <ListItemText primary="Inbox" />
            <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <ListItemText secondary="July 20, 2014" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Drafts" />
            <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <ListItemText secondary="July 20, 2014" />
          </ListItem>
        </List>

      </div>
    )
  }
}
