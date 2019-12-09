import {newFan, deleteFan, allFans} from '../util/fan_util';

export const GET_FANS = 'GET_FANS';

export const receiveFans = (fans) => {
  return({
    type: GET_FANS,
    fans,
  })
}

export const fetchFans = () => dispatch => {
  allFans()
    .then(res => dispatch(receiveFans(res.data)))
    .catch(err => console.log(err))
}

export const addFan = fanData => dispatch => {
  newFan(fanData)
    .then(res => dispatch(receiveFans(res.data)))
    .catch(err => console.log(err))
}

export const removeFan = fanId => dispatch => {
  deleteFan(fanId)
    .then(res => dispatch(receiveFans(res.data)))
    .catch(err => console.log(err))
}

// export const getFans = (idolId) => dispatch => {
//   userFans(idolId)
//     .then(res => dispatch(receiveFans(res.data)))
//     .catch(err => console.log(err))
// }

// export const getIdols = (fanId) => dispatch => {
//   userFans(fanId)
//     .then(res => dispatch(receiveFans(res.data)))
//     .catch(err => console.log(err))
// }
