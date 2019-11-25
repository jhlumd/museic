import React from 'react';

class CommentEditForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: this.props.body
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <form className="comment-form" onSubmit={() => this.props.editComment(this.state.body)}>
        <label>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange('body')}
          />
        </label>
        
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default CommentEditForm;