import React from 'react'
import ReactDOM from 'react-dom'
import { Edit } from '../'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Edit setTitle={() => {}} setEventHandler={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
