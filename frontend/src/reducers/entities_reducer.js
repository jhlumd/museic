import { combineReducers } from 'redux';

import commentsReducer from './comments_reducer';

export default combineReducers({
  comments: commentsReducer
})