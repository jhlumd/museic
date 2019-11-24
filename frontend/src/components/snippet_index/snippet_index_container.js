import { connect } from 'react-redux';
import { fetchSnippets, fetchSnippetOwner } from '../../actions/snippet_actions'
import { fetchSnippetComments, composeComment, removeComment, editComment } from '../../actions/comment_actions';
import { addLike, unlike, getSnippetLikes} from '../../actions/like_actions';

import SnippetIndex from './snippet_index';

const mapStateToProps = (state) => {
  // debugger
  return {
    snippets: Object.values(state.entities.snippets),
    comments: Object.values(state.entities.comments),
    userId: state.session.user.id,
    likes: state.entities.likes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchSnippets: () => dispatch(fetchSnippets()),
    fetchSnippetOwner: (ownerId, snippetId) => dispatch(fetchSnippetOwner(ownerId, snippetId)),
    fetchSnippetComments: userId => dispatch(fetchSnippetComments(userId)),
    composeComment: comment => dispatch(composeComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    editComment: commentId => dispatch(editComment(commentId)),
    addLike: likeData => dispatch(addLike(likeData)),
    unLike: likeId => dispatch(unlike(likeId)),
    getSnippetLikes: snippetId => dispatch(getSnippetLikes(snippetId))
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SnippetIndex)