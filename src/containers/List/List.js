import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './List.css'
import axios from 'axios'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
export class ListComponent extends Component {
  constructor(props) {
   super(props)

   this.state = {
     data: []
   }
 }

  componentDidMount() {
    this.props.setTitle('List')
    this.getData()
  }

  async getData() {
     try {
       const response = await axios.get('https://quiet-plains-74935.herokuapp.com/list')
       console.log('OK')
       this.setState({ data: response.data.lists })
     } catch(error) {
       throw error
     }
   }
  render() {
    console.log('State', this.state)
    return (
      <div className="List">
      <List>
                {this.state.data.map(n => (
                  <ListItem button>
                    <ListItemText primary={n.title} />
                  </ListItem>
                ))}
              </List>
      </div>
    )
  }
}
