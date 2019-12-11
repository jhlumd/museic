import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import SnippetShare from './snippet_share';

const mapStateToProps = (state, ownProps) => {
  return {
    link: ownProps.link
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnippetShare);