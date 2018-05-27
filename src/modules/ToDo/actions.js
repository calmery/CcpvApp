import { ADD_TEXT, CLEAR_TEXT } from './constants'

let textId = 1

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
