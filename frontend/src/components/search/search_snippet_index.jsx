import React from 'react';
import { withRouter } from 'react-router-dom';
import SnippetIndexCard from '../snippet_index/snippet_index_card';
import SnippetShowCard from '../snippet_index/snippet_show_card';
const queryString = require('query-string');

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: '',
      searchTerms: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.setState({ searchTerms: queryString.parse(this.props.location.search).st })
    this.props.fetchSnippets();
    this.props.fetchLikes();
    this.props.fetchComments();
    this.props.fetchUsers();
    this.props.fetchImages();
    console.log(this.props.location.search)
  }

  componentDidUpdate(){
    debugger
    if (queryString.parse(this.props.location.search).st != this.state.searchTerms){
      debugger
      this.setState({ searchTerms: queryString.parse(this.props.location.search).st })
    }
  }

//git test
  handleClick(e){
    this.props.pausePlayback();
    const snippetId = e.currentTarget.getAttribute("snippetid");
    this.setState({ selectedId: snippetId });
  }

  handleSearch() {
    if(this.state.searchTerms === '') return null
    const { snippets, users } = this.props
    const userSearch = []
    const snippetResults = {} //pojo of snippets by the user, or have the search terms in title
    const terms = this.state.searchTerms.split(' ')
    const userIds = Object.keys(users)
    terms.forEach(term => { //search by each term
      // debugger
      Object.values(users).forEach((user, i) => {
        if (user === term) {
          userSearch.push(userIds[i])
        }
      })

      if (term.length > 2) { //only do snippet title search if input at least 3 chars
        snippets.forEach(snippet => {
          for (let i = 0; i + term.length < snippet.title.length; i++) {
            if (snippet.title.slice(i, i + term.length).toLowerCase() === term.toLowerCase()) {
              snippetResults[snippet._id] = snippet
            }
          }
        })
      }

    })
    userSearch.forEach(user => {
      snippets.forEach(snippet => {
        if (snippet.user === user) {
          snippetResults[snippet._id] = snippet
        }
      })
    })


    if (this.state.searchTerms.length > 2) { //only do snippet title search if input at least 3 chars
      snippets.forEach(snippet => {
        for (let i = 0; i + this.state.searchTerms.length < snippet.title.length; i++) {
          if (snippet.title.slice(i, i + this.state.searchTerms.length).toLowerCase() === this.state.searchTerms.toLowerCase()) {
            snippetResults[snippet._id] = snippet
          }
        }
      })
    }

    // comments.forEach(snippetComments => {
    //   snippetComments.forEach(comment => {
    // if(users[comment.user] === string){
    // results.push(comment.snippet) //adds snippet Id to results
    // }
    //   })
    // })

    // const promise = new Promise((resolve, reject) => {
    //   this.props.receiveSearchResults(snippetResults)
    //   resolve('success')
    // }).then(() => 
    return snippetResults
  }


  render() {
    const searchResults = this.handleSearch()
    if(!searchResults) return null
    const { 
      comments,
      likes,
      users,
      images,
      allSnippets,
      userId, 
      composeComment, 
      removeComment, 
      editComment,
      newLike,
      unlike,
    } = this.props;

    return(
      <div id='snippet-index-container'>
        {/* <h1>Snippet Index</h1> */}
        <div className='snippet-index-snippets-container'>
          {
            Object.values(searchResults).map( snippet => {
              const snippetId = snippet._id

              // debugger
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
                images={images}
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
    );
  }
}

export default withRouter(SearchIndex)