import { uploadImage, saveImage, getImages, deleteImage } from '../util/image_util'

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
})

export const upload = (imageFormData) => (
  uploadImage(imageFormData)
    .then(res => {return res.data})
)

export const save = imageData => dispatch => {
  saveImage(imageData)
    .then(res => dispatch(receiveImages(res.data)))
}

export const fetchImages = () => dispatch => {
  getImages()
    .then(res => dispatch(receiveImages(res.data)))
}