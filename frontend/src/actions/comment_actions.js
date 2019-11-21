import * as APIUtil from '../util/comment_util';

export const NEW_COMMENT = 'NEW_COMMENT';
export const ALL_SNIPPET_COMMENTS = 'ALL_SNIPPET_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

//not sure if we will ever use this
export const receiveComment = comment => ({
  type: NEW_COMMENT,
  comment
})

//probably only use this one, but it's untested because no snippets created yet
export const receiveSnippetComments = comments => ({
  type: ALL_SNIPPET_COMMENTS,
  comments
})

export const clearComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

export const composeComment = data => dispatch => (
  APIUtil.newComment(data)
    .then(comment => dispatch(receiveComment(comment)) && comment //'&& comment' unsure what it does
    )
    .catch(err => console.log(err))
)

export const fetchSnippetComments = snippet_id => dispatch => {
  APIUtil.snippetComments(snippet_id)
    .then(res => dispatch(receiveSnippetComments(res.data)))
    .catch(err => console.log(err))
}

export const removeComment = commentId => dispatch => {
  APIUtil.deleteComment(commentId)
    .then(() => dispatch(clearComment(commentId)))
}