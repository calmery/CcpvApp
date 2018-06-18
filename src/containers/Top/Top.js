import React, { Component } from 'react'
import './Top.css'
import Button from '@material-ui/core/Button'

import { setTitle } from 'modules/Title/actions'

export class Top extends Component {
  componentDidMount() {
    this.props.dispatch(setTitle('Top'))
  }

  render() {
      return (
        <div className="Top">
          <Button variant="raised" color="primary">
            Primary
        </Button>
      </div>
    )
    }
}
