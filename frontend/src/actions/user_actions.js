import { getAllUsers } from '../util/user_util';


export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUsers = () => dispatch => {
  getAllUsers()
    .then( res => dispatch(receiveUsers(res.data)))
}