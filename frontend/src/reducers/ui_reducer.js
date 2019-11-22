import { combineReducers } from 'redux';
import modal from './modal_reducer';
import tempNotes from './temp_notes_reducer';

export default combineReducers({
  modal,
  tempNotes
});