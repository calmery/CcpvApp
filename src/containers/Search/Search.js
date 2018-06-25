import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import axios from 'axios'

export class Search extends Component {
  constructor(props) {
   super(props)

   this.state = {
     data: []
   }
 }
  componentDidMount() {
    this.props.setTitle('Search')
      this.getData()
  }
  async getData() {
     try {
       const response = await axios.get('https://quiet-plains-74935.herokuapp.com/list')
          console.log('あああああああ')
          this.setState({ data: response.data.lists })
     } catch(error) {
       throw error
     }
   }
  render() {
    console.log('State', this.state)
    let array = []
    for (let i = 0; i < 100; i++) {
      array[i] = i
    }
    return (
      <div className="Search">
        <Button variant="raised" color="primary">
          Primary
        </Button>
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
