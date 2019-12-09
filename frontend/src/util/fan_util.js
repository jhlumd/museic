import axios from 'axios';

export const newFan = (fanData) => {
  return axios.post('/api/fans/', fanData)
}

export const deleteFan = (fansId) => {
  return axios.delete(`/api/fans/${fansId}`)
}

// export const userFans = idol_id => {
//   return axios.get(`/api/fans/${idol_id}`)
// }

// export const userIdols = fan_id => {
//   return axios.get(`/api/fans/${fan_id}`)
// }

export const allFans = () => {
  return axios.get('/api/fans/')
}