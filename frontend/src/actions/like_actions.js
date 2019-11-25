import { newLike, deleteLike, snippetLikes, allLikes } from '../util/like_util';

export const GET_LIKES = 'GET_LIKES';
export const CREATE_LIKE = 'CREATE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const receiveLike = like => {
  return({
    type: CREATE_LIKE,
    like
  })
}

export const receiveLikes = (likes, snippetId) => {
  return({
    type: GET_LIKES,
    likes,
    snippetId
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
    .then(res => dispatch(receiveLike(res.data)))
    .catch(err => console.log(err))
}

export const unlike = likeId => dispatch => (
  deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
)

// export const getSnippetLikes = snippetId => dispatch => (
//   snippetLikes(snippetId)
//     .then(res => dispatch(receiveLikes(res.data, snippetId)))
//     .catch(err => console.log(err))
// )

export const fetchLikes = () => dispatch => (
  allLikes()
    .then(res => dispatch(receiveLikes(res.data)))
    .catch(err => console.log(err))
)