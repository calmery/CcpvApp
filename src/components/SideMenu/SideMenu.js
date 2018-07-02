import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListIcon from '@material-ui/icons/List'

export class SideMenu extends Component {
  render() {
    return (
      <div style={{ width: 250 }}>
        <List>
          <ListItem button>
            <ListItemText primary="CCPV" secondary="" />
          </ListItem>
          <Divider />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
          </Link>
        </List>
      </div>
    )
  }
}
