import { combineReducers } from 'redux';

import snippets from "./snippets_reducer";
import comments from './comments_reducer';
import likes from './likes_reducer';

export default combineReducers({
  snippets,
  comments,
  likes,
});
