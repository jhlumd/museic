import React from 'react';
import { withRouter } from 'react-router-dom';
import SnippetIndexCard from './snippet_index_card';
import ShowCard from './snippet_show_card';

class SnippetIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: ''
    }
    this.handleClick = this.handleClick.bind(this)
    // this.mapLikesToSnippets = this.mapLikesToSnippets.bind(this)
  }

  componentDidMount(){
    this.props.fetchSnippets()
    this.props.fetchLikes()
    this.props.fetchComments()
    this.props.fetchUsers()
  }
//git test
  handleClick(e){
    const snippetId = e.currentTarget.getAttribute("snippetid")
    this.setState({ selectedId: snippetId})
  }
  render(){
    const { 
      comments,
      likes,
      users,
      allSnippets,
      userId, 
      composeComment, 
      removeComment, 
      editComment,
      fetchSnippetComments,
      fetchSnippetOwner,
      newLike,
      unlike,
    } = this.props

    return(
      <div id='snippet-index-container'>
        {/* <h1>Snippet Index</h1> */}
        <div className='snippet-index-snippets-container'>
          {
            this.props.snippets.map( snippet => {
              const snippetId = snippet._id

              // debugger
              if (this.state.selectedId === snippetId) {
                return <ShowCard
                key={snippetId}
                //data needed to display and send to actions
                snippet={snippet}
                comments={comments}
                likes={likes[snippetId]} // array of userIds for this snippet
                userId={userId}
                //comment actions
                composeComment={composeComment}
                removeComment={removeComment}
                editComment={editComment}
                //get data on mount
                fetchSnippetComments={fetchSnippetComments}
                fetchSnippetOwner={fetchSnippetOwner}
                //like actions
                newLike={newLike}
                unlike={unlike}
                />
              } else {
                return <SnippetIndexCard
                handleClick={ this.handleClick }
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
      </div>
    )
  }
}

export default withRouter(SnippetIndex)