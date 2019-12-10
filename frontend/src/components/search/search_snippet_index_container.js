import { connect } from 'react-redux';
import { fetchSnippets } from '../../actions/snippet_actions'
import { fetchComments, composeComment, removeComment, editComment } from '../../actions/comment_actions';
import { addLike, unlike, fetchLikes} from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchImages } from '../../actions/image_actions';

import { pausePlayback } from "../../actions/snippet_is_playing_actions";

import SnippetIndex from '../snippet_index/snippet_index';

const mapStateToProps = (state) => {
  // debugger
  return {
    snippets: Object.values(state.session.search),
    comments: state.entities.comments,
    likes: state.entities.likes,
    users: state.entities.users,
    images: state.entities.images,
    allSnippets: state.entities.snippets,
    userId: state.session.user.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //get all likes
    fetchLikes: () => dispatch(fetchLikes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchSnippets: () => dispatch(fetchSnippets()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchImages: () => dispatch(fetchImages()),

    //CRUD operations for Comments and Likes
    composeComment: comment => dispatch(composeComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    editComment: commentId => dispatch(editComment(commentId)),
    addLike: likeData => dispatch(addLike(likeData)),
    unLike: likeId => dispatch(unlike(likeId)),

    pausePlayback: () => dispatch(pausePlayback())
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(SnippetIndex)