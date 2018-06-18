import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { setTitle } from 'modules/Title/actions'

export class Search extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Search'))
  }

  render() {
    return (
      <div className="Search">
        <Button variant="raised" color="primary">
          Primary
        </Button>
        <List>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
    )
  }
}
