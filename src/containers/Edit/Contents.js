import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Red from '@material-ui/core/colors/red'
import Green from '@material-ui/core/colors/green'
import BlockIcon from '@material-ui/icons/Block'

import PropTypes from 'prop-types'

const propTypes = {
  change: PropTypes.func
}

export default class Contents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSafe: this.props.isSafe,
      color: [Red[300], Green[100]]
    }
  }

  handleDangerClick = () => {
    this.setState({ isSafe: !this.state.isSafe })
    return this.props.change(this.props.index)
  }

  render() {
    return (
      <div style={{ margin: '15px 20px 0px 20px' }}>
        <Card
          style={{
            backgroundColor: this.state.color[Number(this.state.isSafe)]
          }}
        >
          <CardHeader
            avatar={<Avatar>R</Avatar>}
            title={this.props.name}
            subheader={this.props.date}
          />
          <CardContent>
            <Typography component="p">{this.props.text}</Typography>
          </CardContent>

          <CardActions disableActionSpacing>
            <IconButton onClick={this.handleDangerClick} aria-label="Share">
              <BlockIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    )
  }
}

Contents.propTypes = propTypes
