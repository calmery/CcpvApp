import { combineReducers } from 'redux'
import { ADD_TEXT, CLEAR_TEXT } from './constants'

let text = (state = [], action) => {
  switch (action.type) {
    case ADD_TEXT:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case CLEAR_TEXT:
      return []
    default:
      return state
  }
}

export default {
  store: combineReducers({
    storedText: text
  })
}
