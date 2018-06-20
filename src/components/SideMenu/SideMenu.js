import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import ListIcon from '@material-ui/icons/List'
import SettingsIcon from '@material-ui/icons/Settings'

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
          <Link to="/search" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </Link>
          <Link to="/list" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/setting" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>
          </Link>
        </List>
      </div>
    )
  }
}
