import { connect } from "react-redux";
import { saveSnippet } from "../../../actions/snippet_actions";
import { clearTempNotes } from "../../../actions/temp_notes_actions";
import SnippetForm from "./snippet_form";

const mstp = state => {
  return {
    currentUser: state.session.user,
    tempNotes: state.ui.tempNotes
  };
};

const mdtp = dispatch => {
  return {
    saveSnippet: snippet => dispatch(saveSnippet(snippet)),
    clearTempNotes: () => dispatch(clearTempNotes())
  };
};

export default connect(mstp, mdtp)(SnippetForm);
