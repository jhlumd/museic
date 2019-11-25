import React from 'react';
import CommentListItem from './comment_list_item';
import SnippetInfo from './snippet_info';
import CommentForm from './comment_form';
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';

class IndexShowCard extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state={
      
  //   }
  // }

  // componentDidMount(){
  // }

  render(){
    const { 
      snippet,
      // comments,
      // likes,
      users,
      newLike,
      unlike,
      userId
    } = this.props

    let hasLiked = false

    let comments = []
    if( this.props.comments ){
      comments = this.props.comments
    }
    let likes = []
    if (this.props.likes) {
      likes = this.props.likes
      likes.forEach(like => {
        if (like.user === userId){
          hasLiked = true
        }
      })
    }
    
    return (
      <div className='snippet-show-card-container'>

        <div className="snippet-show-card">

          <div className="snippet-info">
            <SnippetInfo 
              snippet={snippet}
              likes={likes}
              comments={comments}
              userId={userId}
              newLike={newLike}
              unlike={unlike}
              author={users[userId]}
            />
          </div>

          <SnippetDisplayContainer 
            snippet={snippet.notes} 
            liked={hasLiked} 
            snippetId={snippet._id}
          />

          <ul className="comment-display">
          {
            comments.map(comment => {
              return (
              <CommentListItem
                key={comment._id}
                commentId={comment._id}
                snippetId={comment.snippet}
                body={comment.body}
                ownerId={comment.user}
                ownername={users[comment.user]}
                userId={userId}

                deleteComment={this.props.removeComment}
                editComment={this.props.editComment}
                composeComment={this.props.composeComment}
              />
              )
            })
          }
          </ul>

          <div className="comment-form">
            <CommentForm
              composeComment={this.props.composeComment}
              userId={this.props.userId}
              snippetId={this.props.snippet._id}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default IndexShowCard;