import React from 'react';
import { getSnippetLikes } from '../../actions/like_actions';
import SnippetDisplayContainer from '../snippet_display/snippet_display_container';


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
      <div className='snippet-index-card-container'>
        <div 
          className='snippet-index-card' 
          onClick={e => {
            // debugger
            this.props.handleClick(e)
          }} 
          snippetid={snippetId}
        >
          <SnippetDisplayContainer snippet={this.props.snippet.notes} />
          
          <div className='snippet-index-card-base-container'>
            <div className='snippet-index-card-title'>
              <h4>{title}</h4>
            </div>
            <div className='snippet-index-card-description'>
              <p>{description}</p>
            </div>
            <p>Likes: {this.props.snippetLikes}</p> 
            {/* <p>{user}</p> */}
            {/* <p>{public}</p> */}
            {/* <p>{notes}</p> */}
            {/* <p>{date}</p> */}

          </div>
          
        </div>
      </div>
    )
  }

}

export default SnippetIndexCard;