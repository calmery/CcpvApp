import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from '../'
import { SideBar } from '../'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header menuToggle={() => {}} title="" />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SideBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
