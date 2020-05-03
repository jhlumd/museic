import React from "react";
import SnippetDisplayContainer from "../snippet_display/snippet_display_container";
// import { getSnippetLikes } from "../../actions/like_actions";

class SnippetIndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
    };
  }

  render() {
    const {
      users,
      snippets,
      snippetId,
      snippet: { title, description, notes, date },
    } = this.props;
    let numLikes = 0;
    let numComments = 0;
    // let username = 'Author';

    if (this.props.likes) {
      numLikes = this.props.likes.length;
    }
    if (this.props.comments) {
      numComments = this.props.comments.length;
    }

    return (
      <div className="snippet-index-card-container">
        <div
          className="snippet-index-card"
          onClick={(e) => {
            this.props.handleClick(e);
          }}
          snippetid={snippetId}
        >
          <SnippetDisplayContainer
            displayType="index"
            snippet={this.props.snippet.notes}
          />

          <div className="snippet-index-card-base-container">
            <div className="snippet-index-card-top">
              <div className="left-container">
                <div className="snippet-index-card-title">
                  <h4>{title}</h4>
                  <p>{users[snippets[snippetId].user]}</p>
                </div>
              </div>

              <div className="right-container">
                <p>{numLikes} Likes</p>
                <p>{numComments} Comments</p>
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
