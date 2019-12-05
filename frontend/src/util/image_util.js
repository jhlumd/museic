import axios from 'axios';

export const saveImage = (imageData) => {
  return axios.post('/api/images/save', imageData);
};

export const uploadImage = (imageFormData) => {
  return axios({
    method: 'post',
    url: '/api/images/upload',
    data: imageFormData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
};

export const getImages = () => {
  return axios.get('/api/images/');
};

export const deleteImage = photoId => {
  return axios.delete(`/api/images/${photoId}`);
};