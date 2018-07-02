import React from 'react'
import ReactDOM from 'react-dom'
import { ListComponent as List } from '../'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<List setTitle={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
