import React from 'react';
import HeartIcon from '../resources/heart_icon';
import { withRouter } from 'react-router-dom';

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
      // likes,
      users,
      snippet: { title, description, date, user, _id },
    } = this.props

    let likes = []
    if (this.props.likes) {
      likes = this.props.likes
    }
    let comments = []
    if (this.props.comments) {
      comments = this.props.comments
    }
    
    // const hasLiked = Boolean(likes.find( user => user === userId))
      
    return (
      <div className="snippet-show-info-container">
        
        <div className='snippet-show-info-top'>

          <div className='snippet-show-info-left'>
            <h4 onClick={() => this.props.history.push(`/snippets/${_id}`)}>{ title }</h4>
            <p 
              className='username'
              onClick={() => this.props.history.push(`/profile/${user}`)}
            >{ users[user] }</p>
          </div>

          <div className='snippet-show-info-right'>
            <p>{ date.slice(0, 10) }</p>
            <p>{ likes.length } Likes</p>
            <p>{ comments.length } Comments</p>
          </div>
        </div>


        <div className='description'>
          <p>{ description }</p>
        </div>
        
        {/* <button onClick={this.handleLike.bind(this)}>Like</button>
        <button onClick={this.handleUnlike.bind(this)}>Unlike</button> */}
      </div>
    )
  }
}

export default withRouter(SnippetInfo)