import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userId: this.props.userId,
      snippetId: this.props.snippetId,
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.composeComment(this.state)
    this.setState({ body: '' })
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render(){
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text"
            onChange={this.handleChange('body')}
            value={this.state.body}
            placeholder="comment here"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default CommentForm;