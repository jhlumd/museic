import {
    RECEIVE_TEMP_NOTES,
    CLEAR_TEMP_NOTES
} from "../actions/temp_notes_actions";

export default function tempNotesReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_TEMP_NOTES:
      return action.tempNotes;
    case CLEAR_TEMP_NOTES:
      return null;
    default:
      return state;
  }
}
