import React from 'react';

class SnippetInfo extends React.Component {

  // constructor(props){
  //   super(props)

  // }

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
      userId,
      likes,
      snippet: { title, description, date, owner },
    } = this.props
    
    const likesArray = Object.values(likes)
    const hasLiked = Boolean(likesArray.find( like => like.user === userId))

    if (hasLiked){
      return (
        <h1>User has liked!</h1> // can pass specific vairable to 'like_component' 
        //to render differently
      )
    } else {
      return (
        <div id="snippet-display">
          <h3>INFO Section</h3>
          <p>{title}</p>
          <p>Created By: {owner}</p>
          <p>{description}</p>
          <p>Created: {date}</p>
          <p>[Number of likes]:{likesArray.length}</p>
          
          <button onClick={this.handleLike.bind(this)}>Like</button>
          <button onClick={this.handleUnlike.bind(this)}>Unlike</button>
        </div>
      )
    }
  }
}

export default SnippetInfo