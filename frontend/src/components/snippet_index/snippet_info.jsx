import React from 'react';
import HeartIcon from '../resources/heart_icon';

class SnippetInfo extends React.Component {

  constructor(props){
    super(props)
  }

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
      // likes,
      author,
      snippet: { title, description, date },
    } = this.props

    let likes = []
    if (this.props.likes) {
      likes = this.props.likes
    }
    let comments = []
    if (this.props.comments) {
      comments = this.props.comments
    }
    
    const hasLiked = Boolean(likes.find( user => user === userId))

    if (hasLiked){
      return (
        <h1>User has liked!</h1> // can pass specific vairable to 'like_component' 
        //to render differently
      )
    } else {
      
      return (
        <div className="snippet-show-info-container">
          
          <div className='snippet-show-info-top'>

            <div className='snippet-show-info-left'>
              <h4>{title}</h4>
              <p>{author}</p>
            </div>

            <div className='snippet-show-info-right'>
              <p>{date.slice(0, 10)}</p>
              <p>{likes.length} Likes</p>
              <p>{comments.length} Comments</p>
            </div>
          </div>


          <div className='description'>
            <p>{description}</p>
          </div>
          
          {/* <button onClick={this.handleLike.bind(this)}>Like</button>
          <button onClick={this.handleUnlike.bind(this)}>Unlike</button> */}
        </div>
      )
    }
  }
}

export default SnippetInfo