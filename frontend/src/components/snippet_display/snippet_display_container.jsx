import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SnippetDisplay from './snippet_display';
import { fetchSnippet } from '../../actions/snippet_actions';
import { unlike, addLike } from '../../actions/like_actions';
import {
  startPlayback,
  pausePlayback
} from "../../actions/snippet_is_playing_actions";
import { clearTempNotes } from "../../actions/temp_notes_actions";

const mstp = (state, ownProps) => ({
  currentUser: state.session.user,
  tempNotes: state.ui.tempNotes,
  userId: state.session.user.id,
  likes: state.entities.likes,
  isPlaying: state.ui.snippetIsPlaying
});

const mdtp = dispatch => ({
  addLike: (userId, snippetId) => dispatch(addLike(userId, snippetId)),
  unlike: (userId, snippetId) => dispatch(unlike(userId, snippetId)),
  fetchSnippet: snippetId => dispatch(fetchSnippet(snippetId)),
  startPlayback: () => dispatch(startPlayback()),
  pausePlayback: () => dispatch(pausePlayback()),
  clearTempNotes: () => dispatch(clearTempNotes())
});

export default withRouter(connect(mstp, mdtp)(SnippetDisplay));
