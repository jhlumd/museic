import React from 'react';

class SnippetDisplay extends React.Component {
  render(){
    const {
      snippet: { title, description, user, notes, date }
    } = this.props

    return(
      <div id="snippet-display">
        <p>{title}</p>
        <p>{description}</p>
        <p>userId: {user}</p>
      </div>
      )
  }
}

export default SnippetDisplay