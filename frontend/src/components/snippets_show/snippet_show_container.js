import { connect } from 'react-redux';
import { fetchAllSnippets } from '../../actions/snippet_actions'
import { fetchComments, composeComment, removeComment, editComment } from '../../actions/comment_actions';
import { addLike, unlike, fetchLikes } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchImages } from '../../actions/image_actions';

import SnippetShow from './snippet_show';

const mapStateToProps = ({ entities: { snippets, likes, users, comments, images }, session }, { match }) => {
  return {
    snippets: snippets,
    currentUser: session.user,
    images,
    users,
    comments,
    likes,
    snippetId: match.params.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSnippets: () => dispatch(fetchAllSnippets()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments()),
    fetchImages: () => dispatch(fetchImages()),

    //CRUD operations for Comments and Likes
    composeComment: comment => dispatch(composeComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    editComment: commentId => dispatch(editComment(commentId)),
    addLike: likeData => dispatch(addLike(likeData)),
    unLike: likeId => dispatch(unlike(likeId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetShow)