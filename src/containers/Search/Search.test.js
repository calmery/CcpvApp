import React from 'react'
import ReactDOM from 'react-dom'
import { SearchComponent } from './Search'
import { SearchDialog } from './SearchDialog'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchComponent />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchDialog />, div)
  ReactDOM.unmountComponentAtNode(div)
})
