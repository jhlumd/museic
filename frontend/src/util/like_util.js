import axios from 'axios';

export const newLike = (likeData) => {
  return axios.post('/api/like/', likeData)
}

export const deleteLike = like_id => {
  return axios.delete(`/api/like/${like_id}`)
}