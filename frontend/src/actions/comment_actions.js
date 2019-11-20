import * as APIUtil from '../util/comment_util';

export const NEW_COMMENT = 'NEW_COMMENT';

export const receiveComment = comment => ({
  type: NEW_COMMENT,
  comment
})

export const composeComment = data => dispatch => (
  APIUtil.newComment(data)
    .then(comment => dispatch(receiveComment(comment)))
    .catch(err => console.log(err))
)