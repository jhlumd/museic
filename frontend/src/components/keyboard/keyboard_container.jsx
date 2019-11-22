import { connect } from 'react-redux';
import { saveTempNotes } from "../../actions/temp_notes_actions";
import Keyboard from './keyboard';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  saveTempNotes: tempNotes => dispatch(saveTempNotes(tempNotes))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
