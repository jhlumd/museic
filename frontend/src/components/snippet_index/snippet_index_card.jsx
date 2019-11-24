import React from 'react';
import { getSnippetLikes } from '../../actions/like_actions';

class SnippetIndexCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ownerName: ''
    }
  }

  componentDidMount() {
    this.props.getSnippetLikes(this.props.snippetId)
  }
  
  render(){
    const {snippetId, snippet: {title, description, user, notes, date }} = this.props
    return (
      <div 
        className='SnippetIndexCard' 
        onClick={e => {
          // debugger
          this.props.handleClick(e)
        }} 
        snippetid={snippetId}
      >
        <p>----------------------</p>
        <h2>{this.state.likes}</h2>
        <p>{title}</p>
        <p>{description}</p>
        <p>{user}</p>
        {/* <p>{public}</p> */}
        {/* <p>{notes}</p> */}
        <p>{date}</p>
        <p>Likes: {this.props.snippetLikes}</p>
        <p>---------------------</p>
      </div>
    )
  }

}

export default SnippetIndexCard;