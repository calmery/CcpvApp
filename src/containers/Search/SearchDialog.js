import React, { Component } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { Search } from './Search'

export class SearchDialog extends Component {
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
      <Dialog open={this.state.isOpen} onClose={() => this.toggle()}>
        <DialogTitle>New</DialogTitle>
        <DialogContent>
          <Search />
        </DialogContent>
      </Dialog>
    )
  }
}
