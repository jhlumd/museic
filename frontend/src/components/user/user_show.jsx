import React, { Component } from 'react';
import SnippetShowCard from '../snippet_index/snippet_show_card';
import UserCard from './user_card';

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchAllSnippets()
    this.props.fetchLikes()
    this.props.fetchUsers()
    this.props.fetchImages()
    this.props.fetchFans()
    this.props.fetchComments()
    this.props.fetchUsers()
  }

  handleClick(){
    if(this.props.userId === this.props.currentUser.id){
      this.props.openModal('upload')
    }
  }

  // handleFollow() {
  //   if ( ) {
  //     this.props.addFan();
  //   } else {
  //     this.props.removeFan();
  //   }
  // }

  render(){
    const {snippets, snippetLikes, users, comments, fans, images, likes, currentUser, userId,
      composeComment, removeComment, editComment, newLike, unlike, addFan, removeFan} = this.props

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

    let profileImageUrlAddress = 'https://museic-dev.s3-us-west-1.amazonaws.com/default-user-icon.svg' //profile image aws address
    if (images[userId]) {
      profileImageUrlAddress = images[userId].aws_url
    }

    let fansCount = 0
    const myFans = []
    fans.forEach( fanObj => {
      if (fanObj.idol === userId){
        myFans.push(fanObj)
        fansCount += 1
      }
    })

    let followCount = 0
    const myFollowers = []
    fans.forEach(fanObj => {
      if (fanObj.fan === userId) {
        myFollowers.push(fanObj)
        followCount += 1
      }
    })

    return (
      <div className='user-show-container'>
        <div className='left-container'>

          <div className='user-info-container'>
            <div className='user-icon-container' onClick={ () => this.handleClick()}>
              <div className="image-upload-hover" >
                <img className="profile-picture" src={profileImageUrlAddress}/>
              </div>
            </div>

            <div className='user-text-info-container'>
              <h2  className='username'>{users[userId]}</h2>
              <button 
                className='follow-btn'
                onClick={this.handleFollow}
              >
                follow
              </button>

              <div className='snippets user-stat'>
                <p className='num'>{snippetCount}</p>
                <p className='label'>Snippets</p>
              </div>
              <div className='likes user-stat'>
                <p className='num'>{likeCount}</p>
                <p className='label'>Likes</p>
              </div>
              <div className='fans user-stat'>
                <p className='num'>{fansCount}</p>
                <p className='label'>Fans</p>
              </div>
              <div className='following user-stat'>
                <p className='num'>{followCount}</p>
                <p className='label'>Following</p>
              </div>
            </div>

          </div>

        </div>

        <div className='right-container'>
          <section className='snippets'>
            <h2>My Snippets</h2>
            <ul className='snippet-show-container'>
              {
                mySnippets.map( snippet => {
                  const snippetId = snippet._id
                  return <SnippetShowCard 
                    key={snippetId}

                    snippet={snippet}
                    comments={comments[snippetId]}
                    snippetId={snippetId}
                    likes={likes[snippetId]}
                    users={users}
                    userId={currentUser.id}
                    images={images}

                    composeComment={composeComment}
                    removeComment={removeComment}
                    editComment={editComment}

                    newLike={newLike}
                    unlike={unlike}
                  />
                })
              }
            </ul>
          </section>

          <section className='fans'>

            <h2>My Fans</h2>
            <ul className='fan-container user-cards'>
              {
                myFans.map(fan => {
                  return <UserCard 
                    id={fan.fan}
                    name={users[fan.fan]}
                    icon={images[fan.fan]}
                  />
                })
              }
            </ul>

          </section>
          
          <section className='idols'>

            <h2>My Idols</h2>
            <ul className='idol-container user-cards'>
              {
                myFollowers.map(follower => {
                  return <UserCard
                    id={follower.idol}
                    name={users[follower.idol]}
                    icon={images[follower.idol]}
                  />
                })
              }
            </ul>

          </section>
          
        </div>

      </div>
    )
  }
}

