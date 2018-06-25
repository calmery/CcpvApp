import React from 'react'
import ReactDOM from 'react-dom'
import { ListComponent } from '../'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListComponent setTitle={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
