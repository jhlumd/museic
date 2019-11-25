import React from 'react';
import CommentEditForm from './comment_edit_form';
import XIcon from '../resources/x_icon';

class CommentListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      commentId: this.props.commentId,
      snippetId: this.props.snippetId,
      edit: false,
      ownerId: this.props.ownerId,
      userId: this.props.userId
    }
    this.deleteComment = this.deleteComment.bind(this)
    this.editComment = this.editComment.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.renderDelete = this.renderDelete.bind(this)
  }

  deleteComment(){
    this.props.deleteComment(this.state.commentId);
  }

  editComment(newText){
    const newEdit = {
      body: newText,
      commentId: this.state.commentId,
      snippetId: this.state.snippetId,
    }
    this.props.editComment(newEdit)
    this.setState({body: '', edit: false})
  }

  handleClick(){
    const toggle = this.state.edit ? false : true;
    this.setState({edit: toggle})
  }

  renderDelete(){
    if (this.state.ownerId === this.state.userId) {
      return(
        // <button onClick={this.deleteComment}>[X]</button>
        <XIcon onClick={this.deleteComment} />
      )
    }
  }

  render(){
    const { edit, ownerId, userId } = this.state
    if (edit && ownerId === userId) {
      return (
        <li className="comment-list-item-container owned">
          <div className="comment-list-item" >
            <div className='user-icon'></div>
            <CommentEditForm
              handleClick={this.handleClick}
              editComment={this.editComment}
              handleChange={this.handleChange}
              body={this.props.body}
            />
          </div>
          {/* {this.renderDelete()} */}
        </li>
      )
      

    } else {
      return(
        <li className="comment-list-item-container unowned">
          <div className="comment-list-item" onClick={this.handleClick}>
            <div className='user-icon'></div>
            <p>{this.props.body}</p>
          </div>
          {this.renderDelete()}
        </li>
      )
    }
  }
}

export default CommentListItem