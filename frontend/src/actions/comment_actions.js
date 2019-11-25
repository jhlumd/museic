import * as APIUtil from '../util/comment_util';

// export const NEW_COMMENT = 'NEW_COMMENT';
// export const ALL_SNIPPET_COMMENTS = 'ALL_SNIPPET_COMMENTS';
// export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';


export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const composeComment = data => dispatch => {
  return (
  APIUtil.newComment(data)
    .then(res => dispatch(receiveComments(res.data)) //'&& comment' unsure what it does
    )
    .catch(err => console.log(err))
  )
};

export const removeComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then((res) => dispatch(receiveComments(res.data)))
);

export const editComment = comment => dispatch => {
  return(
    APIUtil.updateComment(comment)
      .then((res)=> dispatch(receiveComments(res.data)))
  );
}

export const fetchComments = () => dispatch => (
  APIUtil.getComments()
    .then((res) => dispatch(receiveComments(res.data)))
    .catch(err => console.log(err)) //make receive errors action
)