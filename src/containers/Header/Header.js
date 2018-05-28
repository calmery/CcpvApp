import React, { Component } from 'react'
import { open, close } from 'modules/Header/actions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { SideMenu } from 'components'

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
        <SwipeableDrawer
          open={this.props.state.Header.isOpen}
          onClose={() => this.close()}
          onOpen={() => this.open()}
          onClick={() => this.close()}
        >
          <SideMenu />
        </SwipeableDrawer>
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
