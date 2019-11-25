import { connect } from 'react-redux';
import { fetchSnippets, fetchSnippetOwner } from '../../actions/snippet_actions'
import { fetchSnippetComments, fetchComments, composeComment, removeComment, editComment } from '../../actions/comment_actions';
import { addLike, unlike, getSnippetLikes, fetchLikes} from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';

import SnippetIndex from './snippet_index';

const mapStateToProps = (state) => {
  // debugger
  return {
    snippets: Object.values(state.entities.snippets),
    comments: state.entities.comments,
    likes: state.entities.likes,
    users: state.entities.users,
    allSnippets: state.entities.snippets,

    userId: state.session.user.id,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    //get all likes
    fetchLikes: () => dispatch(fetchLikes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchSnippets: () => dispatch(fetchSnippets()),
    fetchUsers: () => dispatch(fetchUsers()),

    //CRUD operations for Comments and Likes
    composeComment: comment => dispatch(composeComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    editComment: commentId => dispatch(editComment(commentId)),
    addLike: likeData => dispatch(addLike(likeData)),
    unLike: likeId => dispatch(unlike(likeId)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SnippetIndex)