import { OPEN_HEADER, CLOSE_HEADER } from './constants'

export const open = () => {
  return {
    type: OPEN_HEADER
  }
}

export const close = () => {
  return {
    type: CLOSE_HEADER
  }
}
