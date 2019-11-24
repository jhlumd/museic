import { GET_LIKES, CREATE_LIKE, DELETE_LIKE } from '../actions/like_actions';

export default function ( state = {}, action ){
  Object.freeze(state)

  const newState = Object.assign( {}, state);

  switch (action.type) {
    case GET_LIKES:
      const likes = {};
      action.likes.forEach( like => 
        likes[like._id] = like
      )
      return likes;
    case CREATE_LIKE:
      newState[action.like._id] = action.like;
      return newState;
    case DELETE_LIKE:
      delete newState[action.likeId];
      return newState;
    default:
      return state;
  }
}