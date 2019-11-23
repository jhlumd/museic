import React from 'react';
import CommentListItem from './comment_list_item';
import SnippetDisplay from './snippet_display';

class IndexShowCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userId: this.props.userId,
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    // debugger
    this.props.composeComment(this.state)
      .then(() => this.props.fetchSnippetComments(this.props.userId))
    this.setState({ body: '' })
  }

  componentDidMount(){
    this.props.fetchSnippetComments(this.props.snippet._id)
  }

  render(){
    const { snippet } = this.props

    return (
      <div>
        <SnippetDisplay snippet={snippet}/>
        
        {
          this.props.comments.map(comment => (
            <CommentListItem
              key={comment._id}
              id={comment._id}
              deleteComment={this.props.removeComment}
              body={comment.body}
              editComment={this.props.editComment}
            // userId={this.props.userId}
            />
          ))
        }
        <form onSubmit={ e => this.handleSubmit(e)}>
              <input type="text"
              value={this.state.body}
              onChange={this.handleChange('body')}
              placeholder="----Body text"
            />
          <input type="submit" value="create new comment" />
        </form>
      </div>
    )
  }
}

export default IndexShowCard;