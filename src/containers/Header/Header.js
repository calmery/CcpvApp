import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { open, close } from 'modules/Header/actions'

export class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={() => this.open()} />
            </IconButton>
            <Typography variant="title" color="inherit">
              CCPV
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.props.state.Header.isOpen}
          onClose={() => this.close()}
        >
          <div role="button" onClick={() => this.close()}>
            <List>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItem>
                  <ListItemText primary="Top" />
                </ListItem>
              </Link>
              <Link to="/todo" style={{ textDecoration: 'none' }}>
                <ListItem>
                  <ListItemText primary="ToDo" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }

  open() {
    this.props.dispatch(open())
  }

  close() {
    this.props.dispatch(close())
  }
}
