import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import ToDo from './ToDo/reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

// Reducers
const reducers = {
  ToDo: ToDo.store
}

export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
