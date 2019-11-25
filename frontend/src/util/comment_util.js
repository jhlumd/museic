import axios from 'axios';

export const newComment = (commentData) => {
  return axios.post('/api/comments/', commentData);
};

export const snippetComments = snippet_id => {
  return axios.get(`/api/comments/snippet/${snippet_id}`);
};

export const deleteComment = comment_id => {
  return axios.delete(`/api/comments/${comment_id}`);
};

export const updateComment = commentData => {
  return axios.patch(`/api/comments/update`, commentData);
};

export const getComments = () => {
  return axios.get('/api/comments/');
};