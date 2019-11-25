import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SnippetIndexDisplay from './snippet_index_display';
import { fetchSnippet } from '../../actions/snippet_actions';

const mstp = (state, ownProps) => ({
  currentUser: state.session.user,
  tempNotes: state.ui.tempNotes
});

const mdtp = dispatch => ({
  // addLike: (userId, snippetId) => dispatch(addLike(userId, snippetId)),
  fetchSnippet: (snippetId) => dispatch(fetchSnippet(snippetId))
});

export default withRouter(connect(mstp, mdtp)(SnippetIndexDisplay));
