import { combineReducers } from 'redux';

import snippets from "./snippets_reducer";
import comments from './comments_reducer';
import likes from './likes_reducer';
import users from './users_reducer';
import images from './image_reducer';
import fans from './fans_reducer';

export default combineReducers({
  snippets,
  comments,
  likes,
  users,
  fans,
  images,
});
