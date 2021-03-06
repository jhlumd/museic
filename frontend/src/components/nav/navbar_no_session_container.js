import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal} from '../../actions/modal_actions';

import NavbarNoSession from './navbar_no_session';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

//modal can be login or signup
const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarNoSession);
