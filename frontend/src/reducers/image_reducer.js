import { RECEIVE_IMAGES } from '../actions/image_actions';

export default function (state = {}, action) {
  Object.freeze(state)

  // const newState = Object.assign( {}, state);

  switch (action.type) {
    case RECEIVE_IMAGES: //saves under userId keys
       
      // const images = {}
      //sets images to ___, pointing to an array of ___
      // action.comments.forEach(comment => {

      //   if (comments[comment.snippet]) {
      //     comments[comment.snippet].push(comment)
      //   } else {
      //     comments[comment.snippet] = [comment]
      //   }

      // });
      return action.images

    default:
      return state;
  }
}