import React, { Component } from 'react'
import './Edit.css'
import IconTabs from './IconTabs'
import Contents from './Contents'

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import BlockIcon from "@material-ui/icons/Block";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export class Edit extends Component {

  constructor(props) {
      super(props);
      this.state ={
        data:[
          {id: 1,username:'taro',date:'2017/1/1', text: 'I am Taro',dangerFlg:true},
          {id: 2,username:'jiro',date:'2017/3/1', text: 'I am jiro',dangerFlg:true},
          {id: 3,username:'たろう',date:'2017/3/1', text: 'たろうです',dangerFlg:true},
          {id: 4,username:'じろう',date:'2017/3/1', text: 'じろうです',dangerFlg:true}
        ],
        //color=
      }
  }

  componentDidMount() {
    this.props.setTitle('Edit')
  }

  render() {
    var contents = this.state.data.map((data) => {
      return (<Contents username={data.username} date={data.date} text={data.text} />);
    })
    return (
      <div>
        <IconTabs />
        { contents }
      </div>
    );
  }
}
