import React, { Component } from 'react'

import './List.css'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Checkbox from '@material-ui/core/Checkbox'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Slide from '@material-ui/core/Slide'

import { Header, Search, Top } from 'containers'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

export class ListComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      open2: false
    }
  }

  componentDidMount() {
    this.props.setTitle('List')
  }

  handleClickOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleClickOpen2() {
    this.setState({ open2: true })
  }

  handleClose2() {
    this.setState({ open2: false })
  }

  render() {
    return (
      <div className="List">
        <Header menuToggle={this.props.menuToggle} title="List">
          <IconButton
            aria-haspopup="true"
            color="inherit"
            onClick={() => this.handleClickOpen2()}
          >
            <NotificationsNone />
          </IconButton>
        </Header>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className="button"
          onClick={() => this.handleClickOpen()}
        >
          <AddIcon />
        </Button>
        <Dialog
          fullScreen
          open={this.state.open2}
          onClose={() => this.handleClose2()}
          TransitionComponent={Transition}
        >
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={() => this.handleClose2()}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Notifications
              </Typography>
            </Toolbar>
          </AppBar>
          <Top />
        </Dialog>
        <Dialog
          open={this.state.open}
          onClose={() => this.handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New</DialogTitle>
          <DialogContent>
            <Search />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleClose()} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
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
