import { connect } from 'react-redux'

import { Top as TopComponent } from './Top/Top'
import { ToDo as ToDoComponent } from './ToDo/ToDo'

const connectStore = target => {
  return connect(state => {
    return { state }
  })(target)
}

export const Top = connectStore(TopComponent)
export const ToDo = connectStore(ToDoComponent)
