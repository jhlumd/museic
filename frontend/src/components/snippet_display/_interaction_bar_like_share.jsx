import React, { Component } from 'react';
import HeartIcon from '../resources/heart_icon';
import ShareIcon from '../resources/share_icon';

export default class InteractionBarLikeShare extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="interaction-bar-right">
        {/* FIXME <HeartIcon onClick={this.props.addLike(this.props.user.id), this.props.snippet.id} /> */}
        <HeartIcon />
        {/* FIXME add sharing function */}
        <ShareIcon />
      </div>
    )
  }
}
