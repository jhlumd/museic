import React from 'react';
import CommentListItem from './comment_list_item';
import SnippetDisplay from './snippet_display';
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

  // handleSubmit(e) {
  //   e.preventDefault();

  //   this.props.composeComment(this.state)
  //     .then(() => this.props.fetchSnippetComments(this.props.userId))
  //   this.setState({ body: '' })
  // }

  componentDidMount(){
    this.props.fetchSnippetComments(this.props.snippet._id)
  }

  render(){
    const { snippet } = this.props

    return (
      <div id="snippet-show-card">
        <SnippetDisplay snippet={snippet}/>

        <div id="comment-display">
        {
          this.props.comments.map(comment => (
            <CommentListItem
            key={comment._id}
            commentId={comment._id}
            snippetId={comment.snippet}
            ownerId={comment.user}
            deleteComment={this.props.removeComment}
            body={comment.body}
            editComment={this.props.editComment}
            composeComment={this.props.composeComment}
            userId={this.props.userId}
            />
            ))
          }
        </div>

        <div>
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