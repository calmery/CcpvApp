import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PhoneIcon from '@material-ui/icons/Phone'
import PersonPinIcon from '@material-ui/icons/PersonPin'

export default class IconTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  getWindowSize() {
    const width = window.innerWidth
    return width
  }

  render() {
    const { value } = this.state

    return (
      <Paper style={{ width: this.getWindowSize() }}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<PhoneIcon />} label="APPROVED" />
          <Tab icon={<PersonPinIcon />} label="REJECTED" />
        </Tabs>
      </Paper>
    )
  }
}
