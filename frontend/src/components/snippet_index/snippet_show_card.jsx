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
      images,
      newLike,
      unlike,
      userId
    } = this.props;
    
    let hasLiked = false;

    let comments = [];
    if( this.props.comments ){
      comments = this.props.comments;
    }
    let likes = [];
    if (this.props.likes) {
      likes = this.props.likes;
      likes.forEach(like => {
        if (like.user === userId){
          hasLiked = true;
        }
      });
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
              users={users}
            />
          </div>

          <SnippetDisplayContainer 
            snippet={snippet.notes} 
            snippetCreatorId={snippet.user}
            liked={hasLiked} 
            snippetId={snippet._id}
          />

          <ul className="comment-display">
          {
            comments.map(comment => {
              let imageUrl = '';
              if (!images[comment.user]){ //if user does not have an image
                //set to default image
                imageUrl = "https://museic-dev.s3-us-west-1.amazonaws.com/default-user-icon.svg";
              } else {
                imageUrl = images[comment.user].aws_url;
              }

              return (
                <CommentListItem
                  key={comment._id}
                  commentId={comment._id}
                  snippetId={comment.snippet}
                  body={comment.body}
                  ownerId={comment.user}
                  ownername={users[comment.user]}
                  userId={userId}
                  imageUrl={imageUrl}
                  history={this.props.history}

                  deleteComment={this.props.removeComment}
                  editComment={this.props.editComment}
                  composeComment={this.props.composeComment}
                />
              );
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