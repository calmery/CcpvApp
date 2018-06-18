import React from 'react'
import ReactDOM from 'react-dom'
import { Setting } from '../'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Setting setTitle={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
