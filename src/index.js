import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Top } from 'containers'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Top />, document.getElementById('root'))
registerServiceWorker()
