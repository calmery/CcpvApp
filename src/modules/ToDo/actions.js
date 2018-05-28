import { ADD_TEXT, CLEAR_TEXT, TEXT_ONCHANGE } from './constants'

let textId = 1

export const onTextChange = text => {
  return {
    type: TEXT_ONCHANGE,
    text
  }
}

export const addText = newText => {
  return {
    type: ADD_TEXT,
    id: textId++,
    text: newText
  }
}

export const clearText = () => {
  return {
    type: CLEAR_TEXT
  }
}
