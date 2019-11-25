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
        <div className="snippet-show-info-container">
          
          <div className='snippet-show-info-top'>

            <div className='snippet-show-info-left'>
              <h4>{title}</h4>
              <p>{owner}</p>
            </div>

            <div className='snippet-show-info-right'>
              <p>{date.slice(0, 10)}</p>
              <p>{likesArray.length} Likes</p>
              <p> Comments</p>
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