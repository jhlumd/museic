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
  }

  componentDidMount(){
    this.props.fetchSnippets();
  }

  handleClick(e){
    const snippetId = e.currentTarget.getAttribute("snippetid")
    this.setState({ selectedId: snippetId})
  }

  render(){
    const { 
      comments,
      userId, 
      composeComment, 
      removeComment, 
      editComment,
      fetchSnippetComments,
      fetchSnippetOwner
    } = this.props

    return(
      <div>
        <h1>Snippet Index</h1>
        {
          this.props.snippets.map( snippet => {
            if (this.state.selectedId === snippet._id) {
              return <ShowCard 
              key={snippet._id}
              snippet={snippet}
              comments={comments}
              composeComment={composeComment}
              removeComment={removeComment}
              editComment={editComment}
              userId={userId}
              fetchSnippetComments={fetchSnippetComments}
              fetchSnippetOwner={fetchSnippetOwner}
              />
            } else {
              return <IndexCard
              handleClick={ this.handleClick }
              key={snippet._id} 
              snippetId={snippet._id}
              snippet={snippet}
              />
            }
          
          })
        }
      </div>
    )
  }
  
}

export default withRouter(SnippetIndex)