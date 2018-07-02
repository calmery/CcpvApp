import React, { Component } from 'react'

import './List.css'

import { Header } from 'containers'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
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
