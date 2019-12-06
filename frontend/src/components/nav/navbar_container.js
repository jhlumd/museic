import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import Navbar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  tempNotes: state.ui.tempNotes,
  currentUserId: state.session.user.id
});

//modal can be login or signup
const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
