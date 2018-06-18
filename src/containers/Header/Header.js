import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { SideMenu } from 'components'
import './Header.css'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className="Header" style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              style={{
                marginLeft: -12,
                marginRight: 20
              }}
            >
              <MenuIcon onClick={() => this.open()} />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              style={{
                flex: 1
              }}
            >
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.isOpen}
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
    this.setState({ isOpen: true })
  }

  close() {
    this.setState({ isOpen: false })
  }
}
