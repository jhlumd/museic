import React from 'react';
import { withRouter } from 'react-router-dom';
import IndexCard from './snippet_index_card';
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
  }

  handleClick(e){
    const snippetId = e.currentTarget.getAttribute("snippetid")
    this.setState({ selectedId: snippetId})
  }

  render(){
    const { 
      comments,
      likes,
      userId, 
      composeComment, 
      removeComment, 
      editComment,
      fetchSnippetComments,
      fetchSnippetOwner,
      newLike,
      unlike,
      getSnippetLikes,
    } = this.props

    return(
      <div>
        <h1>Snippet Index</h1>
        {
          this.props.snippets.map( snippet => {
            const snippetId = snippet._id
            if (this.state.selectedId === snippet._id) {
              return <ShowCard 
              key={snippet._id}
              
              //data needed to display and send to actions
              snippet={snippet}
              comments={comments}
              likes={likes}
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
              getSnippetLikes={getSnippetLikes}
              />
            } else {
              console.log(this.props.likes[snippetId])
              return <IndexCard
              handleClick={ this.handleClick }
              key={snippet._id} 
              snippetId={snippetId}
              snippet={snippet}
              snippetLikes={this.props.likes[snippetId]}
              getSnippetLikes={getSnippetLikes}
              />
            }
          
          })
        }
      </div>
    )
  }
  
}

export default withRouter(SnippetIndex)