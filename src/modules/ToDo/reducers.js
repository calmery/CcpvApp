import { ADD_TEXT, CLEAR_TEXT, TEXT_ONCHANGE } from './constants'

const initialState = {
  storedText: [],
  text: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        text: state.text,
        storedText: [
          ...state.storedText,
          {
            id: action.id,
            text: action.text
          }
        ]
      }
    case CLEAR_TEXT:
      return { text: state.text, storedText: [] }
    case TEXT_ONCHANGE:
      return { text: action.text, storedText: state.storedText }
    default:
      return state
  }
}
