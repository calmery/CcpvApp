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
      title: 'Top',
      editEventHandler: () => {}
    }
  }

  setTitle(title) {
    this.setState({ title })
    this.refs.header.update(title)
  }

  // Edit ページを表示しているときに Header に表示されるボタンからのイベントを受け取る
  editEventHandler(command) {
    if (this.state.editEventHandler) {
      this.state.editEventHandler(command)
    }
  }

  render() {
    return (
      <DocumentTitle title={this.state.title}>
        <BrowserRouter>
          <div>
            <Header
              ref="header"
              editEventHandler={command => this.editEventHandler(command)}
            />
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
                  // setEventHandler を渡し，そこからイベントを Edit に渡すための関数を受け取る
                  // 受け取った関数は State で管理する
                  // 辛いので Redux をいれて解決したい
                  <Edit
                    setTitle={title => this.setTitle(title)}
                    setEventHandler={fn =>
                      this.setState({ editEventHandler: fn })
                    }
                  />
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
