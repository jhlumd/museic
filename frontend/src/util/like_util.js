import axios from 'axios';

export const newLike = (likeData) => {
  return axios.post('/api/likes/', likeData)
}

export const deleteLike = like_id => {
  return axios.delete(`/api/likes/${like_id}`)
}

export const snippetLikes = snippet_id => {
  return axios.get(`/api/likes/${snippet_id}`)
}