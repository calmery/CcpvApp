import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Top } from '../'

import store from 'modules'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Top />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
