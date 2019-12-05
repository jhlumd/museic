import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SnippetDisplayPlayOnly from "./snippet_display_play_only";
import { fetchSnippet } from '../../actions/snippet_actions';
import {
  startPlayback,
  pausePlayback
} from '../../actions/snippet_is_playing_actions';
import { clearTempNotes } from "../../actions/temp_notes_actions";

const mstp = (state, ownProps) => ({
  currentUser: state.session.user,
  tempNotes: state.ui.tempNotes,
  isPlaying: state.ui.snippetIsPlaying
});

const mdtp = dispatch => ({
  // addLike: (userId, snippetId) => dispatch(addLike(userId, snippetId)),
  fetchSnippet: snippetId => dispatch(fetchSnippet(snippetId)),
  startPlayback: () => dispatch(startPlayback()),
  pausePlayback: () => dispatch(pausePlayback()),
  clearTempNotes: () => dispatch(clearTempNotes())
});

export default withRouter(connect(mstp, mdtp)(SnippetDisplayPlayOnly));
