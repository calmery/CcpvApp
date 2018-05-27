import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Top } from 'containers'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

import store from './modules/store'

ReactDOM.render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
