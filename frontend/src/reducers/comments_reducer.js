import { NEW_COMMENT } from '../actions/comment_actions';

const initialState = {
};

export default function (state = initialState, action) {
  Object.freeze(state)

  switch (action.type) {
    case NEW_COMMENT:
      return {
        comment: action.comment
      };
    default:
      return state;
  }
}