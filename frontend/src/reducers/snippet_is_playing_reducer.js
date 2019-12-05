import {
  IS_PLAYING,
  IS_PAUSED
} from "../actions/snippet_is_playing_actions";

export default function tempNotesReducer(state = null, action) {
  switch (action.type) {
    case IS_PLAYING:
      return true;
    case IS_PAUSED:
      return false;
    default:
      return state;
  }
}
