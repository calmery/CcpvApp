import React from 'react'
import ReactDOM from 'react-dom'
import { Notification } from './Notification'
import { NotificationDialog } from './NotificationDialog'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Notification />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NotificationDialog />, div)
  ReactDOM.unmountComponentAtNode(div)
})
