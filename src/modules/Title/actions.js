import { SET_TITLE } from './constants'

export const setTitle = title => {
  return {
    type: SET_TITLE,
    title
  }
}
