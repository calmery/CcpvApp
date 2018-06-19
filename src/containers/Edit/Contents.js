import React, { Component } from 'react'

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

export default class Contents extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dangerFlg: false,
      color: ['red','green']
    };
  }

  handleDangerClick = () => {
    this.setState({ dangerFlg: !this.state.dangerFlg });
    console.log(this.state.dangerFlg)
  };

  render() {
    return (
      <div style={{ margin: '15px 20px 0px 20px'}}>
        <Card>
          <CardHeader
            avatar={ <Avatar>R</Avatar> }
            title={ this.props.username }
            subheader={ this.props.date }
          />
          <CardContent>
            <Typography component="p">{ this.props.text }</Typography>
          </CardContent>

          <CardActions disableActionSpacing>
            <IconButton
              onClick={this.handleDangerClick}
              aria-label="Share">
              <BlockIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}