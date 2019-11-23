import { connect } from 'react-redux';
import { fetchSnippets, fetchSnippetOwner } from '../../actions/snippet_actions'
import { fetchSnippetComments, composeComment, removeComment, editComment } from '../../actions/comment_actions';

import SnippetIndex from './snippet_index';

const mapStateToProps = (state) => {
  // debugger
  return {
    snippets: Object.values(state.entities.snippets),
    comments: Object.values(state.entities.comments),
    userId: state.session.user.id,
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
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SnippetIndex)