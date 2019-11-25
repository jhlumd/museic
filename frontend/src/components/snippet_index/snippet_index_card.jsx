import React from 'react';
import { getSnippetLikes } from '../../actions/like_actions';
import SnippetIndexDisplayContainer from '../snippet_display/snippet_index_display_container';


class SnippetIndexCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ownerName: ''
    }
  }

  
  render(){
    const {snippetId, snippet: {title, description, notes, date }} = this.props
    return (
      <div className="snippet-index-card-container">
        <div
          className="snippet-index-card"
          onClick={e => {
            // debugger
            this.props.handleClick(e);
          }}
          snippetid={snippetId}
        >
          <SnippetIndexDisplayContainer snippet={this.props.snippet.notes} />

          <div className="snippet-index-card-base-container">
            <div className='snippet-index-card-top'>
              <div className='left-container'>

                <div className="snippet-index-card-title">
                  <h4>{title}</h4>
                  <p>{'author'}</p>
                </div>
              </div>

              <div className='right-container'>
                <p>{this.props.snippetLikes} Likes</p>
                <p>{this.props.snippetLikes} Comments</p>
              </div>
            </div>
            <div className="snippet-index-card-description">
              <p>{description}</p>
            </div>
            
            {/* <p>{user}</p> */}
            {/* <p>{public}</p> */}
            {/* <p>{notes}</p> */}
            {/* <p>{date}</p> */}
          </div>
        </div>
      </div>
    );
  }

}

export default SnippetIndexCard;