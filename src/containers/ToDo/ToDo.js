import React, { Component } from 'react'
import { addText, clearText } from 'modules/ToDo/actions'
import { Link } from 'react-router-dom'

import { setTitle } from 'modules/Title/actions'

export class ToDo extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('ToDo'))
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <br />
        <button onClick={e => this.onAddBtnClicked(e)}>Add</button>
        <button onClick={e => this.onClearBtnClicked(e)}>Clear</button>
        <ul>
          {this.props.state.ToDo.storedText.map(obj => (
            <li key={obj.id}>{obj.text}</li>
          ))}
        </ul>
        <Link to="/">Top</Link>
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
