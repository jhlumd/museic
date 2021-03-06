import axios from 'axios';

export const newFan = (fanData) => {
  return axios.post('/api/fans/', fanData)
}

export const deleteFan = (fansId) => {
  return axios.delete(`/api/fans/${fansId}`)
}

export const allFans = () => {
  return axios.get('/api/fans/');
}