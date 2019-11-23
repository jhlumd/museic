import React from 'react';
import CommentEditForm from './comment_edit_form';

class CommentListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      commentId: this.props.commentId,
      snippetId: this.props.snippetId,
      edit: false
    }
    this.deleteComment = this.deleteComment.bind(this)
    this.editComment = this.editComment.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  render(){
    if (this.state.edit) {
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
          <button onClick={this.deleteComment}>[X]</button>
        </div>
      )
    }
  }
}

export default CommentListItem