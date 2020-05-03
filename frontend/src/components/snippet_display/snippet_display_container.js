import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SnippetDisplay from "./snippet_display";
import { fetchSnippet } from "../../actions/snippet_actions";
import { unlike, addLike } from "../../actions/like_actions";
import {
  startPlayback,
  pausePlayback,
} from "../../actions/snippet_is_playing_actions";
import { clearTempNotes } from "../../actions/temp_notes_actions";
import { openModal } from "../../actions/modal_actions";

const mstp = (state) => {
  let userId = null;
  let currentUser = null;
  if (state.session.user) {
    currentUser = state.session.user;
    userId = state.session.user.id;
  }
  return {
    currentUser,
    userId,
    tempNotes: state.ui.tempNotes,
    likes: state.entities.likes,
    isPlaying: state.ui.snippetIsPlaying,
  };
};

const mdtp = (dispatch) => ({
  addLike: (userId, snippetId) => dispatch(addLike(userId, snippetId)),
  unlike: (userId, snippetId) => dispatch(unlike(userId, snippetId)),
  fetchSnippet: (snippetId) => dispatch(fetchSnippet(snippetId)),
  startPlayback: () => dispatch(startPlayback()),
  pausePlayback: () => dispatch(pausePlayback()),
  clearTempNotes: () => dispatch(clearTempNotes()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(mstp, mdtp)(SnippetDisplay));
