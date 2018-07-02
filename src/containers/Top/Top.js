import React, { Component } from 'react'
import './Top.css'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const data = [
  {
    title: 'Title A',
    message: 'Message A'
  },
  {
    title: 'Title B',
    message: 'Message B'
  },
  {
    title: 'Title C',
    message: 'Message C'
  },
  {
    title: 'Title D',
    message: 'Message D'
  }
]

export class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div>
          {data.map(n => {
            return (
              <div key={n.title}>
                {
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">
                        Word of the Day
                      </Typography>
                      <Typography variant="headline" component="h2">
                        benevolent
                      </Typography>
                      <Typography color="textSecondary">{n.title}</Typography>
                      <Typography component="p">{n.message}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
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
