import React from 'react';
import CommentEditForm from './comment_edit_form';

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
        <button onClick={this.deleteComment}>[X]</button>
      )
    }
  }

  render(){
    const { edit, ownerId, userId } = this.state
    if (edit && ownerId === userId) {
      return <CommentEditForm 
        handleClick={this.handleClick} 
        editComment={this.editComment}
        handleChange={this.handleChange}
        body={this.props.body}
      />
    } else {
      return(
        <div className="comment-list-item-container">
          <div className="comment-list-item" onClick={this.handleClick}>
            <i>[UserPic]</i>
            <p>{this.props.body}</p>
          </div>
          {this.renderDelete()}
        </div>
      )
    }
  }
}

export default CommentListItem