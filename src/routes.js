import React, { Component } from 'react'
import { Top, ToDo } from 'containers'
import { Route } from 'react-router'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Top} />
        <Route path="/todo" component={ToDo} />
      </div>
    )
  }
}
