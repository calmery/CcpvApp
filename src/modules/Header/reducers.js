import { OPEN_HEADER, CLOSE_HEADER } from './constants'

const initialState = {
  isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_HEADER:
      return { isOpen: true }
    case CLOSE_HEADER:
      return { isOpen: false }
    default:
      return state
  }
}
