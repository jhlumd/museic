import React, { Component } from 'react';
import SnippetShowCard from '../snippet_index/snippet_show_card';

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: '',
    }
  }

  componentDidMount() {
    this.props.fetchAllSnippets()
    this.props.fetchLikes()
    this.props.fetchUsers()
    this.props.fetchComments()
    this.props.fetchImages()
  }

  render() {
    const { snippets, users, comments, images, likes, currentUser, snippetId,
      composeComment, removeComment, editComment, newLike, unlike} = this.props

    if(!snippets[snippetId]){
      return null
    }

    return (
      <div id='standalone'>
        <SnippetShowCard
          snippet={snippets[snippetId]}
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
      </div>
             
    )
  }
}

