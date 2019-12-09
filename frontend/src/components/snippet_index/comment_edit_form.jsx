import React from 'react';
import XIcon from '../resources/x_icon';

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
            className='comment-body'
          />
        </label>
        <input type="submit" value="submit"/>
        <button onClick={this.props.deleteComment}><XIcon/></button>
        {/* JENNY/jenny/Jenny: moved ur icon here */}
      </form>
    )
  }
}

export default CommentEditForm;