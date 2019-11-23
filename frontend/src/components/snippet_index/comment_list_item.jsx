import React from 'react';

class CommentListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      commentId: this.props.id
    }
    this.deleteComment = this.deleteComment.bind(this)
    this.editComment = this.editComment.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  

  deleteComment(){
    // console.log(this.props.deleteComment)
    // debugger
    this.props.deleteComment(this.props.id);
    // this.setState({ triggerRender: ''});
  }

  editComment(){
    this.props.editComment(this.state)
    this.setState({body: ''})
  }

  handleChange(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    return (
      <div>
        <p>{this.props.body}</p>
        <br />
        <button onClick={this.deleteComment}>Delete</button>
        <form onSubmit={this.editComment}>
          <label>Edit comment:
            <input 
              type="text" 
              placeholder="---changes here"
              onChange={this.handleChange('body')}
            />
          </label>
          <input type="submit" value="Save changes"/>
        </form>
      </div>
    )
  }
}

export default CommentListItem