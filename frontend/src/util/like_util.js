import axios from 'axios';

export const newLike = (likeData) => {
  return axios.post('/api/like/', likeData)
}

export const deleteLike = like_id => {
  return axios.delete(`/api/like/${like_id}`)
}

export const snippetLikes = snippet_id => {
  return axios.get(`/api/like/${snippet_id}`)
}