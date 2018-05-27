import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { connect } from 'react-redux'

import ToDo from './ToDo/reducers'

const store = combineReducers({
  ToDo: ToDo.store
})

export const connectStore = component => {
  return connect(state => {
    return { state }
  })(component)
}

export default createStore(store)
