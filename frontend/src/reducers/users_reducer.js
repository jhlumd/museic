import { RECEIVE_USERS } from '../actions/user_actions';

export default function ( state = {}, action){
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USERS:
      const users = {}
      action.users.forEach(user => {
        users[user._id] = user.username
      });
      return users
    default:
      return state;
  }
}