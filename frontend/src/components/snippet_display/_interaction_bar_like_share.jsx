import React, { Component } from 'react';
import HeartIcon from '../resources/heart_icon';
import FilledHeartIcon from '../resources/filled_heart_icon';
import ShareIcon from '../resources/share_icon';

export default class InteractionBarLikeShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked
    };

    this.handelLike = this.handelLike.bind(this);
    this.handelUnlike = this.handelUnlike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handelLike(likeData) {
    this.props.addLike(likeData);
    this.setState({ liked: 'turnip'}); //force state change
  }

  handelUnlike(likeId) {
    this.props.unlike(likeId);
    this.setState({ liked: 'turnip' }); //force state change
  }

  handleDelete() {
    this.props.openModal({ delete: this.props.snippetId });
    // this.props.deleteSnippet(this.props.snippetId);
  }

  render() {
    const likeData = {
      userId: this.props.userId,
      snippetId: this.props.snippetId
    };

    let deleteButton = null;
    if (this.props.snippetCreatorId === this.props.userId) {
      deleteButton = <button onClick={this.handleDelete}>Delete</button>;
    }
    
    if (this.props.liked) {
      return (
        <div className="interaction-bar-right">
          <button onClick={() => this.handelUnlike(this.props.likeId)}>
            <FilledHeartIcon />
          </button>
          <div
            className="share-icon-container"
            onClick={() =>
              this.props.openModal(
                `http://museic-demo.herokuapp.com/#/snippets/${this.props.snippetId}`
              )
            }
          >
            <ShareIcon />
          </div>

          {deleteButton}
        </div>
      );
    } else {
      return (
        <div className="interaction-bar-right">
          <button onClick={() => this.handelLike(likeData)}>
            <HeartIcon />
          </button>
          <div
            className="share-icon-container"
            onClick={() =>
              this.props.openModal(
                `http://museic-demo.herokuapp.com/#/snippets/${this.props.snippetId}`
              )
            }
          >
            <ShareIcon />
          </div>

          {deleteButton}
        </div>
      );
    }
  }
}
