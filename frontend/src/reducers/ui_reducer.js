import { combineReducers } from 'redux';
import modal from './modal_reducer';
import tempNotes from './temp_notes_reducer';
import snippetIsPlaying from './snippet_is_playing_reducer';

export default combineReducers({
  modal,
  tempNotes,
  snippetIsPlaying
});