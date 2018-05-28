import { connect } from 'react-redux'

import { Top as TopComponent } from './Top/Top'
import { ToDo as ToDoComponent } from './ToDo/ToDo'
import { Setting as SettingComponent } from './Setting/Setting'

const connectStore = target => {
  return connect(state => {
    return { state }
  })(target)
}

export const Top = connectStore(TopComponent)
export const ToDo = connectStore(ToDoComponent)
export const Setting = connectStore(SettingComponent)
