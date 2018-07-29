import React from 'react'
import ReactDOM from 'react-dom'
import { EditComponent } from './Edit'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EditComponent location={{}} history={{push: () => {}}} setTitle={() => {}} setEventHandler={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
