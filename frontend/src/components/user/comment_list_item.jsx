import React from 'react';

class CommentListItem extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   triggerRender: ''
    // }
    this.deleteComment = this.deleteComment.bind(this)
  }
  

  deleteComment(){
    // console.log(this.props.deleteComment)
    // debugger
    this.props.deleteComment(this.props.id);
    // this.setState({ triggerRender: ''});
  }

  render(){
    return (
      <div>
        <h1>this is the comment</h1>
        <p>{this.props.body}</p>
        <br />
        <button onClick={this.deleteComment}>Delete</button>
      </div>
    )
  }
}

export default CommentListItem