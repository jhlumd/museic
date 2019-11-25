import {
  // ALL_SNIPPET_COMMENTS,
  // REMOVE_COMMENT,
  // NEW_COMMENT,
  RECEIVE_COMMENTS
} from '../actions/comment_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state)

  // const newState = Object.assign( {}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      const comments = {}
      //sets comments to snippetID keys, pointing to an array of comment objs
      action.comments.forEach( comment => {

        if( comments[comment.snippet] ){
          comments[comment.snippet].push(comment)
        } else {
          comments[comment.snippet] = [comment]
        }

      });
      return comments
    // case ALL_SNIPPET_COMMENTS:
    //   const snippets = {};
    //   // debugger
    //   action.comments.forEach( comment => 
    //     snippets[comment._id] = comment);
    //   return snippets;
    // case NEW_COMMENT:
    //   newState[action.comment._id] = action.comment;
    //   return newState;
    // case REMOVE_COMMENT:
    //   // debugger
    //   delete newState[action.commentId];
    //   return newState;
    default:
      return state;
  }
}