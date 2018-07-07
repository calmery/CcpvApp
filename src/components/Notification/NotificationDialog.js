import React, { Component } from 'react'

import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'

// Icons
import CloseIcon from '@material-ui/icons/Close'

import { Notification } from './Notification'

const Transition = props => {
  return <Slide direction="up" {...props} />
}

export class NotificationDialog extends Component {
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
      <Dialog
        fullScreen
        open={this.state.isOpen}
        onClose={() => this.toggle()}
        TransitionComponent={Transition}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={() => this.toggle()}>
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Notifications
            </Typography>
          </Toolbar>
        </AppBar>
        <Notification />
      </Dialog>
    )
  }
}
