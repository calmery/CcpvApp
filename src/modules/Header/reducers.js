import { combineReducers } from 'redux'
import { OPEN_HEADER, CLOSE_HEADER } from './constants'

const opened = (state = false, action) => {
  switch (action.type) {
    case OPEN_HEADER:
      return true
    case CLOSE_HEADER:
      return false
    default:
      return state
  }
}

export default {
  store: combineReducers({
    opened
  })
}
