import { connect } from "react-redux";
import { uploadSnippet } from "../../../actions/snippet_actions";
import SnippetForm from "./tweet_compose";

const mstp = state => {
  return {
    currentUser: state.session.user
  };
};

const mdtp = dispatch => {
  return {
    uploadSnippet: data => dispatch(uploadSnippet(data))
  };
};

export default connect(mstp, mdtp)(SnippetForm);
