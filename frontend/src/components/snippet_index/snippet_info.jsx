import React from 'react';

class SnippetInfo extends React.Component {

  // componentDidMount(){
    //fetch the owner's username to display 
  // }
  
  render(){
    const {
      snippet: { title, description, user, notes, date, owner }
    } = this.props

    //need stats => likes, 
    //need user's name
    return(
      <div id="snippet-display">
        <h3>INFO Section</h3>
        <p>{title}</p>
        <p>Created By: {owner}</p>
        <p>{description}</p>
        <p>[Number of likes]</p>
      </div>
      )
  }
}

export default SnippetInfo