import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import EditIcon from '@material-ui/icons/Edit'

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
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Top" />
            </ListItem>
          </Link>
          <Link to="/todo" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="ToDo" />
            </ListItem>
          </Link>
        </List>
      </div>
    )
  }
}
