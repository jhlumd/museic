import React from 'react';
import CommentListItem from './comment_list_item';
import SnippetInfo from './snippet_info';
import CommentForm from './comment_form';

class IndexShowCard extends React.Component {
  constructor(props){
    super(props)
    // this.state={
    //   userId: this.props.userId,
    //   snippetId: this.props.snippetId,
    //   body: ''
    // }
  }

  componentDidMount(){
    this.props.fetchSnippetComments(this.props.snippet._id)
    this.props.fetchSnippetOwner(this.props.snippet.user, this.props.snippet._id)
    this.props.getSnippetLikes(this.props.snippet._id)
  }

  render(){
    const { 
      snippet,
      likes,
      newLike,
      unlike,
      userId
    } = this.props

    return (
      <div id="snippet-show-card">

        <div id="snippet-info">
          <SnippetInfo 
            snippet={snippet}
            likes={likes}
            userId={userId}
            newLike={newLike}
            unlike={unlike}
          />
        </div>

        <div id="comment-display">
        {
          this.props.comments.map(comment => (
            <CommentListItem
              key={comment._id}
              commentId={comment._id}
              snippetId={comment.snippet}
              body={comment.body}
              ownerId={comment.user}
              userId={userId}

              deleteComment={this.props.removeComment}
              editComment={this.props.editComment}
              composeComment={this.props.composeComment}
            />
            ))
          }
        </div>

        <div id="comment-form">
          <CommentForm
            composeComment={this.props.composeComment}
            userId={this.props.userId}
            snippetId={this.props.snippet._id}
          />
        </div>

      </div>
    )
  }
}

export default IndexShowCard;