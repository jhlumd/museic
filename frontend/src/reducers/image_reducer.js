import { RECEIVE_IMAGES } from '../actions/image_actions';

export default function (state = {}, action) {
  Object.freeze(state)

  // const newState = Object.assign( {}, state);

  switch (action.type) {
    case RECEIVE_IMAGES: //saves images under userId keys
      const images = {}
      action.images.forEach( image => {
        images[image.user] = image
      })
      return images
    default:
      return state;
  }
}