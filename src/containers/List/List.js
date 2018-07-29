import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './List.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { Header, SearchDialog } from 'containers'
import { NotificationDialog } from 'components'

import axios from 'requests/axios'

export class ListComponentClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [
        {
          id: 1,
          created_at: '2018',
          name: 'sojo'
        },
        {
          id: 2,
          created_at: '2018',
          name: 'kumamoto'
        },
        {
          id: 3,
          created_at: '2018',
          name: 'gakuenn1'
        }
      ]
    }
  }

  componentDidMount() {
    this.props.setTitle('List')

    axios
      .get('/list')
      .catch(() => {})
      .then(response => {
        // npm run test で落ちる
        if (response) {
          this.setState({ lists: response.data })
        }
      })
  }

  edit(id) {
    this.props.history.push('/edit', {
      id
    })
  }

  render() {
    return (
      <div className="List">
        <Header menuToggle={this.props.menuToggle} title="List">
          <IconButton
            aria-haspopup="true"
            color="inherit"
            onClick={() => this.refs.notification_dialog.toggle()}
          >
            <NotificationsNone />
          </IconButton>
        </Header>
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className="button"
          onClick={() => this.refs.search_dialog.toggle()}
        >
          <AddIcon />
        </Button>
        <NotificationDialog ref="notification_dialog" />
        <SearchDialog ref="search_dialog" />
        <List>
          {(() => {
            return this.state.lists.map((list, index) => {
              const date = new Date(list.created_at)

              return (
                <ListItem key={index} button onClick={() => this.edit(list.id)}>
                  <ListItemText
                    primary={list.name}
                    secondary={`${date.getFullYear()}/${date.getMonth() +
                      1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}
                  />
                </ListItem>
              )
            })
          })()}
        </List>
      </div>
    )
  }
}

export const ListComponent = withRouter(ListComponentClass)
