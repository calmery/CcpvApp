import { connect } from 'react-redux'

import { Top as TopComponent } from './Top/Top'
import { ToDo as ToDoComponent } from './ToDo/ToDo'
import { Edit as EditComponent } from './Edit/Edit'

const connectStore = target => {
  return connect(state => {
    return { state }
  })(target)
}

export const Top = connectStore(TopComponent)
export const ToDo = connectStore(ToDoComponent)
export const Edit = connectStore(EditComponent)
