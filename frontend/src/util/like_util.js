import axios from 'axios';

export const newLike = (likeData) => {
  console.log(likeData)
  return axios.post('/api/likes/', likeData)
}

export const deleteLike = (likeId)=> {  
  console.log(likeId)
  return axios.delete(`/api/likes/${likeId}`)
}

export const snippetLikes = snippet_id => {
  return axios.get(`/api/likes/${snippet_id}`)
}

export const allLikes = () => {
  return axios.get('/api/likes/')
}