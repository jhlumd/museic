import { GET_LIKES, CREATE_LIKE, DELETE_LIKE } from '../actions/like_actions';

export default function ( state = {}, action ){
  Object.freeze(state)

  const newState = Object.assign( {}, state);

  switch (action.type) {
    case GET_LIKES:
      return action.likes;
    case CREATE_LIKE:
      newState[action.like.id] = action.like;
      return newState;
    case DELETE_LIKE:
      delete newState[action.likeId];
      return newState;
    default:
      return state;
  }
}