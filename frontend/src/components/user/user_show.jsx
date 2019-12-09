import React, { Component } from 'react';
import UserShowIndex from './user_show_index';

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchSnippets()
    this.props.fetchLikes()
    this.props.fetchUsers()
    this.props.fetchImages()
    this.props.fetchFans()
  }

  handleClick(){
    this.props.openModal('upload')
  }

  render(){
    const {snippets, snippetLikes, images, currentUser, userId} = this.props

    let snippetCount = 0
    const mySnippets = [] //snippets belonging to the profile's user
    snippets.forEach(snippet => {
      if(snippet.user === userId){
        // debugger
        snippetCount += 1
        mySnippets.push(snippet) //snippets created by the user, that this profile refers to
      }
    })
    let likeCount = 0
    snippetLikes.forEach(snippetId => {
      const likes = Object.values(snippetId)
      likes.forEach( like => {
        if (like.user === userId){
          likeCount += 1
        }
      })
    })

    let profileImageUrlAddress = ''
    if (this.props.images[userId]) {
      profileImageUrlAddress = this.props.images[userId].aws_url
    }

    let fanCount = 0
    // add fan count logic

    let followCount = 0
    // add follow count logic

    return (
      <div className='user-show-container'>
        <div className='left-container'>

          <div className='user-info-container'>
            <div className='user-icon-container' onClick={ () => this.handleClick()}>
              <div id="image-upload-hover">
                <img id="profile-picture" src={profileImageUrlAddress}/>
              </div>
            </div>
            <div className='user-text-info-container'>
              <h2>{currentUser.username}</h2>
              <div className='snippets user-stat'>
                <p className='num'>{snippetCount}</p>
                <p className='label'>Snippets</p>
              </div>
              <div className='likes user-stat'>
                <p className='num'>{likeCount}</p>
                <p className='label'>Likes</p>
              </div>
              <div className='fans user-stat'>
                <p className='num'>{/* NUMBER HERE */}10</p>
                <p className='label'>Fans</p>
              </div>
              <div className='following user-stat'>
                <p className='num'>{/* NUMBER HERE */}10</p>
                <p className='label'>Following</p>
              </div>
            </div>
          </div>

        </div>

        <div className='right-container'>
          <h2>Your Creations</h2>
          {/* <UserShowIndex /> */}
        </div>

      </div>
    )
  }
}

