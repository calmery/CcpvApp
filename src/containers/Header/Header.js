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
  menuToggle() {
    if (this.props.menuToggle) {
      this.props.menuToggle()
    }
  }

  render() {
    return (
      <div className="Header">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={() => this.menuToggle()} />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              style={{
                flex: 1
              }}
            >
              {this.props.title}
            </Typography>
            {(() => {
              if (this.props.children) {
                return this.props.children
              }
            })()}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <SwipeableDrawer
        open={this.state.isOpen}
        onClose={() => this.toggle()}
        onOpen={() => this.toggle()}
        onClick={() => this.toggle()}
      >
        <SideMenu />
      </SwipeableDrawer>
    )
  }
}
