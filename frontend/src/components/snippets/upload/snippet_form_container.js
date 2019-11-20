import { connect } from "react-redux";
import { saveSnippet } from "../../../actions/snippet_actions";
import SnippetForm from "./tweet_compose";

const mstp = state => {
  return {
    currentUser: state.session.user
  };
};

const mdtp = dispatch => {
  return {
    saveSnippet: data => dispatch(saveSnippet(data))
  };
};

export default connect(mstp, mdtp)(SnippetForm);
