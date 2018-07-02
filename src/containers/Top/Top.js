import React, { Component } from 'react'
import './Top.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Header } from 'containers'

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
  componentDidMount() {
    this.props.setTitle('Top')
  }

  render() {
    return (
      <div className="Top">
        <Header menuToggle={this.props.menuToggle} title="Top" />
        <div>
        {data.map(n => {
          return <div>{
            <Card>
              <CardContent>
                <Typography color="textSecondary">
                  Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                  benevolent
                </Typography>
                <Typography color="textSecondary">
                  {n.title}
                </Typography>
                <Typography component="p">
                  {n.message}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          }</div>
        })}
        </div>
      </div>
    )
  }
}
