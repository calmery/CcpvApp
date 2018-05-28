import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import title from './Title/reducers'

import ToDo from './ToDo/reducers'
import Header from './Header/reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    Header,
    ToDo,
    title,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
