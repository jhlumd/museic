import { connect } from 'react-redux';
import {
  saveTempNotes,
  clearTempNotes
} from "../../actions/temp_notes_actions";
import Keyboard from './keyboard';

const mapStateToProps = state => ({
  currentUser: state.session.user,
  tempNotes: state.ui.tempNotes
});

const mapDispatchToProps = dispatch => ({
  saveTempNotes: tempNotes => dispatch(saveTempNotes(tempNotes)),
  clearTempNotes: () => dispatch(clearTempNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
