import { newLike, deleteLike, snippetLikes } from '../util/like_util';

export const GET_LIKES = 'GET_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const receiveLike = like => {
  return({
    type: CREATE_LIKE,
    like
  })
}

export const receiveLikes = likes => {
  return({
    type: GET_LIKES,
    likes
  })
}

export const removeLike = likeId => {
  return ({
    type: DELETE_LIKE,
    likeId
  })
}

export const addLike = likeData => dispatch => {
  newLike(likeData)
    .then(like => dispatch(receiveLike(like)))
    .catch(err => console.log(err))
}

export const unlike = likeId => dispatch => (
  deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
)

export const getLikes = snippetId => dispatch => (
  snippetLikes(snippetId)
    .then(likes => dispatch(receiveLikes(likes)))
    .catch(err => console.log(err))
)