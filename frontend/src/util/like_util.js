import axios from 'axios';

export const newLike = (likeData) => {
  return axios.post('/api/likes/', likeData)
}

export const deleteLike = (likeData)=> {
  return axios.delete(`/api/likes/`, likeData)
}

export const snippetLikes = snippet_id => {
  return axios.get(`/api/likes/${snippet_id}`)
}

export const allLikes = () => {
  return axios.get('/api/likes/')
}