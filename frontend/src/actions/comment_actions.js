import * as APIUtil from '../util/comment_util';

export const NEW_COMMENT = 'NEW_COMMENT';
export const ALL_SNIPPET_COMMENTS = 'ALL_SNIPPET_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

//not sure if we will ever use this
export const receiveComment = comment => ({
  type: NEW_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

//remove after
export const receiveSnippetComments = comments => ({
  type: ALL_SNIPPET_COMMENTS,
  comments
});

export const clearComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const composeComment = data => dispatch => {
  return (
  APIUtil.newComment(data)
    .then(res => dispatch(receiveComment(res.data)) //'&& comment' unsure what it does
    )
    .catch(err => console.log(err))
  )
};

export const fetchSnippetComments = snippet_id => dispatch => (
  APIUtil.snippetComments(snippet_id)
    .then(res => dispatch(receiveSnippetComments(res.data)))
    .catch(err => console.log(err))
);

export const removeComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(() => dispatch(clearComment(commentId)))
);

export const editComment = comment => dispatch => {
  return(
    APIUtil.updateComment(comment)
      .then((res)=> dispatch(receiveComment(res.data)))
  );
}

export const fetchComments = () => dispatch => (
  APIUtil.getComments()
    .then((res) => dispatch(receiveComments(res.data)))
    .catch(err => console.log(err)) //make receive errors action
)