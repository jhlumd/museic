import React from 'react';

class SnippetInfo extends React.Component {

  handleLike(){
    const likeData = {
      user: this.props.userId,
      snippet: this.props.snippet._id
    }
    this.props.newLike(likeData)
  }

  handleUnlike(){
    this.props.unlike(this.props.snippet._id)
  }
  
  render(){
    const {
      snippet: { title, description, date, owner },
      likes,
    } = this.props

    return(
      <div id="snippet-display">
        <h3>INFO Section</h3>
        <p>{title}</p>
        <p>Created By: {owner}</p>
        <p>{description}</p>
        <p>Created: {date}</p>
        <p>[Number of likes]:{likes.length}</p>
        <button onClick={this.handleLike.bind(this)}>Like</button>
        <button onClick={this.handleUnlike.bind(this)}>Unlike</button>
      </div>
      )
  }
}

export default SnippetInfo