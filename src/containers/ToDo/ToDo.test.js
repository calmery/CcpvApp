import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToDo } from '../'

import store from 'modules'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ToDo />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
