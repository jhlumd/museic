import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import Navbar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  tempNotes: state.ui.tempNotes,
  currentUserId: state.session.user.id,
  snippets: Object.values(state.entities.snippets),
  comments: Object.values(state.entities.comments),
  users: state.entities.users,
});

//login or signup modal
const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
