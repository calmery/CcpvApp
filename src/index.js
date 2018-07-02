import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

// Static Files
import './index.css'
import registerServiceWorker from './assets/registerServiceWorker'

// Containers
import { Top, Edit, Setting, Search, ListComponent as List, SideBar } from 'containers'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Top'
    }
  }

  setTitle(title) {
    this.setState({ title })
  }

  menuToggle() {
    this.refs.sidebar.toggle()
  }

  render() {
    return (
      <DocumentTitle title={this.state.title}>
        <BrowserRouter>
          <div className="App">
            <SideBar ref="sidebar" />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Top
                    setTitle={title => this.setTitle(title)}
                    menuToggle={() => this.menuToggle()}
                  />
                )}
              />
              <Route
                path="/edit"
                render={props => (
                  <Edit
                    setTitle={title => this.setTitle(title)}
                    menuToggle={() => this.menuToggle()}
                  />
                )}
              />
              <Route
                path="/setting"
                render={props => (
                  <Setting
                    setTitle={title => this.setTitle(title)}
                    menuToggle={() => this.menuToggle()}
                  />
                )}
              />
              <Route
                path="/search"
                render={props => (
                  <Search
                    setTitle={title => this.setTitle(title)}
                    menuToggle={() => this.menuToggle()}
                  />
                )}
              />
              <Route
                path="/list"
                render={props => (
                  <List
                    setTitle={title => this.setTitle(title)}
                    menuToggle={() => this.menuToggle()}
                  />
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
