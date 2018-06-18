import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Static Files
import './index.css'
import registerServiceWorker from './assets/registerServiceWorker'

// Containers
import { Header, Top, Edit, Setting, Search, List } from 'containers'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <div>
        <Route exact path="/" component={Top} />
        <Route path="/edit" component={Edit} />
        <Route path="/setting" component={Setting} />
        <Route path="/search" component={Search} />
        <Route path="/list" component={List} />
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
