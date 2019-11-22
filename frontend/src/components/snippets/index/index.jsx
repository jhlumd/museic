import React from 'react';
import { withRouter } from 'react-router-dom';

class SnippetIndex extends React.Component {

  render(){
    return(
      <h1>this is the snippet index</h1>
    )
  }
}

export default withRouter(SnippetIndex)