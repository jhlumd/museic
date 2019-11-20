import { combineReducers } from 'redux';
import entities from './entities_reducer'
import session from './session_api_reducer';
import errors from './errors_reducer';
import snippets from './snippets_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  snippets,
  errors
});

export default RootReducer;