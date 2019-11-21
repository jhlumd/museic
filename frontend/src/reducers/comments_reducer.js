import { ALL_SNIPPET_COMMENTS, REMOVE_COMMENT, NEW_COMMENT } from '../actions/comment_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state)

  const newState = Object.assign( {}, state);

  switch (action.type) {
    case ALL_SNIPPET_COMMENTS:
      const snippets = {}
      // debugger
      action.comments.forEach( comment => 
        snippets[comment._id] = comment)
      return snippets;
    case NEW_COMMENT:
      newState[action.comment._id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      // debugger
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
}