import axios from 'axios';

export const newComment = (commentData) => {
  return axios.post('/api/comments/new', commentData);
};

export const snippetComments = user_id => {
  return axios.get(`/api/comments/${user_id}`)
}

export const deleteComment = comment_id => {
  return axios.delete(`/api/comments/${comment_id}`)
}