import { newLike, deleteLike, allLikes } from '../util/like_util';

export const GET_LIKES = 'GET_LIKES';
// export const CREATE_LIKE = 'CREATE_LIKE';
// export const DELETE_LIKE = 'DELETE_LIKE';

export const receiveLikes = (likes) => {
  return({
    type: GET_LIKES,
    likes,
  })
}

// export const receiveLike = like => {
//   return({
//     type: CREATE_LIKE,
//     like
//   })
// }

// export const removeLike = likeId => {
//   return ({
//     type: DELETE_LIKE,
//     likeId
//   })
// }

export const addLike = likeData => dispatch => {
  newLike(likeData)
    .then(res => dispatch(receiveLikes(res.data)))
    .catch(err => console.log(err))
}

export const unlike = likeId => dispatch => (
  deleteLike(likeId)
    .then((res) => dispatch(receiveLikes(res.data)))
    .catch(err => console.log(err))
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