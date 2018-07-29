import React, { Component } from 'react'
import './Notification.css'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { get } from 'requests/axios'

export class Notification extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    get('/notification')
      .catch(() => {})
      .then(response => {
        if (response) {
          this.setState({ notifications: response.data.notifications })
        }
      })
  }

  render() {
    return (
      <div className="Notification">
        <div>
          {this.state.notifications.map(notification => {
            const date = new Date(notification.created_at)

            return (
              <div key={notification.id}>
                {
                  <Card style={{ margin: '0 16px 16px 16px' }}>
                    <CardContent>
                      <Typography color="textSecondary">
                        {`${date.getFullYear()}/${date.getMonth() +
                          1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}
                      </Typography>
                      <Typography color="textSecondary">
                        {notification.title}
                      </Typography>
                      <Typography component="p">
                        {notification.message}
                      </Typography>
                    </CardContent>
                  </Card>
                }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
