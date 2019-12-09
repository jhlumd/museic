import { GET_FANS } from '../actions/fan_actions';

export default function ( state = {}, action) {
  Object.freeze(state)

  switch (action.type) {
    case GET_FANS:
      const fans = {}
      action.fans.forEach( fan => {
        fans[fan._id] = fan
      })
      return fans;
  
    default:

      return state;
  }
}