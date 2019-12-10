import React from 'react';
import CommentEditForm from './comment_edit_form';
import { withRouter } from 'react-router-dom';
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
    const { edit, ownerId, userId } = this.state
    const { ownername, imageUrl } = this.props
    const editable = ownerId === userId ? 'editable' : '';
    
    if (edit && ownerId === userId) {
      return (
        <li className={`comment-list-item-container owned`}>
          <div className="comment-list-item" >

            <div className='user-icon hvr-grow' onClick={() => this.props.history.push(`/profile/${ ownerId }`)}>
              <img className='comment-profile-image' src={imageUrl} />
              <p className='owner-name' onClick={() => this.props.history.push(`/profile/${ownerId}`)}>
                {`${ownername} `}
              </p> 
            </div>

            <CommentEditForm
              handleClick={this.handleClick}
              editComment={this.editComment}
              handleChange={this.handleChange}
              body={this.props.body}
              // deleteComment={this.deleteComment}
            />
          </div>
        </li>
      )
      

    } 
    else {
      return(
        <li className={`comment-list-item-container unowned ${ editable }`}>
          <div className="comment-list-item" onClick={this.handleClick}>

            <div className='user-info'>
              <div className='user-icon hvr-grow' onClick={() => this.props.history.push(`/profile/${ownerId}`)}>
                <img className='comment-profile-image' src={imageUrl} />
              </div>
              <p className='owner-name' onClick={() => this.props.history.push(`/profile/${ownerId}`)}>
                {`${ ownername } `}
              </p> 
            </div>

            <p className='comment-body'>{this.props.body}</p>
            <button onClick={e => {
              e.stopPropagation()
              this.deleteComment()}}><XIcon/></button>
          </div>
        </li>
      )
    }
  }
}

export default withRouter(CommentListItem)