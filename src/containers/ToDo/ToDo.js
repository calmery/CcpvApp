import React, { Component } from 'react'
import { connectStore } from 'modules/store'
import { addText, clearText } from 'modules/ToDo/actions'

class ToDoComponent extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={e => this.onAddBtnClicked(e)}>Add</button>
        <button onClick={e => this.onClearBtnClicked(e)}>Clear</button>
        <ul>
          {this.props.state.ToDo.storedText.map(obj => (
            <li key={obj.id}>{obj.text}</li>
          ))}
        </ul>
      </div>
    )
  }

  onAddBtnClicked(e) {
    let input = this.refs.input
    let text = input.value.trim()
    if (!text) return alert('Please input.')
    input.value = ''
    this.props.dispatch(addText(text))
  }

  onClearBtnClicked(e) {
    this.props.dispatch(clearText())
  }
}

export const ToDo = connectStore(ToDoComponent)
