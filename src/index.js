import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

// Static Files
import './index.css'
import registerServiceWorker from './assets/registerServiceWorker'

// Containers
import { Header, Top, Edit, Setting, Search, List } from 'containers'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Top'
    }
  }

  setTitle(title) {
    this.setState({ title })
    this.refs.header.updateTitle(title)
  }

  render() {
    return (
      <DocumentTitle title={this.state.title}>
        <BrowserRouter>
          <div>
            <Header ref="header" />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Top setTitle={title => this.setTitle(title)} />
                )}
              />
              <Route
                path="/edit"
                render={props => (
                  <Edit setTitle={title => this.setTitle(title)} />
                )}
              />
              <Route
                path="/setting"
                render={props => (
                  <Setting setTitle={title => this.setTitle(title)} />
                )}
              />
              <Route
                path="/search"
                render={props => (
                  <Search setTitle={title => this.setTitle(title)} />
                )}
              />
              <Route
                path="/list"
                render={props => (
                  <List setTitle={title => this.setTitle(title)} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </DocumentTitle>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
