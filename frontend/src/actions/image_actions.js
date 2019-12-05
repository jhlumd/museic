import { uploadImage, saveImage, getImages, deleteImage } from '../util/image_util'

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
})

export const upload = (imageFormData) => dispatch => {
  uploadImage(imageFormData)
    .then(res => dispatch(receiveImages(res)))
}

export const save = imageData => dispatch => {
  saveImage(imageData)
    .then(res => dispatch(receiveImages(res)))
}