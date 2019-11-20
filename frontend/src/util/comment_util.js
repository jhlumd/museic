import axios from 'axios';

export const newComment = (commentData) => {
  return axios.post('/api/comments/new', commentData);
};

