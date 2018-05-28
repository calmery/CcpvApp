import React, { Component } from 'react'
import { addText, clearText, onTextChange } from 'modules/ToDo/actions'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import NoteIcon from '@material-ui/icons/Note'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { setTitle } from 'modules/Title/actions'

export class ToDo extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('ToDo'))
  }

  render() {
    return (
      <div style={{ margin: '0 15px' }}>
        <TextField
          id="full-width"
          label="ToDo"
          InputLabelProps={{
            shrink: true
          }}
          value={this.props.state.ToDo.text}
          onChange={e => this.onTextChange(e)}
          placeholder="What needs to be done ?"
          fullWidth
          margin="normal"
        />
        <Button
          variant="raised"
          color="primary"
          fullWidth
          onClick={e => this.onAddBtnClicked(e)}
        >
          Add
        </Button>
        <List subheader={<ListSubheader>ToDo</ListSubheader>}>
          {this.props.state.ToDo.storedText.map(obj => (
            <ListItem button key={obj.id}>
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }

  onTextChange(e) {
    this.props.dispatch(onTextChange(e.target.value))
  }

  onAddBtnClicked(e) {
    if (!this.props.state.ToDo.text) return alert('Please input.')
    this.props.dispatch(addText(this.props.state.ToDo.text))
    this.props.dispatch(onTextChange(''))
  }

  onClearBtnClicked(e) {
    this.props.dispatch(clearText())
  }
}
