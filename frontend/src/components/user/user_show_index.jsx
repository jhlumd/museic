import React from 'react';
import { withRouter } from 'react-router-dom';
import SnippetIndexCard from '../snippet_index/snippet_index_card';
import SnippetShowCard from '../snippet_index/snippet_show_card';

class UserShowIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: ''
    }
    this.handleClick = this.handleClick.bind(this)
    // this.mapLikesToSnippets = this.mapLikesToSnippets.bind(this)
  }

  componentDidMount() {
    this.props.fetchSnippets()
    this.props.fetchLikes()
    this.props.fetchComments()
    this.props.fetchUsers()
  }
  //git test
  handleClick(e) {
    const snippetId = e.currentTarget.getAttribute("snippetid")
    this.setState({ selectedId: snippetId })
  }
  render() {
    const {
      comments,
      likes,
      users,
      allSnippets,
      userId,
      composeComment,
      removeComment,
      editComment,
      newLike,
      unlike,
    } = this.props

    return (
      <div id='user-show-index-container'>
        {
          this.props.snippets.map(snippet => {
            const snippetId = snippet._id

            if (this.state.selectedId === snippetId) {
              return <SnippetShowCard
                key={snippetId}
                //data needed to display and send to actions
                snippet={snippet}
                comments={comments[snippetId]} //array of comment objs for this snippet
                snippetId={snippetId}
                likes={likes[snippetId]} // array of objs containing userId and likeId for this snippet
                users={users} //array of usernames according to userId
                userId={userId}
                //comment actions
                composeComment={composeComment}
                removeComment={removeComment}
                editComment={editComment}
                //like actions
                newLike={newLike}
                unlike={unlike}
              />
            } else {
              return <SnippetIndexCard
                handleClick={this.handleClick}
                key={snippetId}
                snippetId={snippetId}
                snippet={snippet}
                snippets={allSnippets}
                likes={likes[snippetId]}
                comments={comments[snippetId]}
                users={users}
              />
            }
          })
        }
      </div>
    )
  }
}

export default withRouter(UserShowIndex)