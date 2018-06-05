import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Edit } from '../'

import { store, history } from 'modules'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Edit />
      </ConnectedRouter>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})