import { combineReducers } from 'redux';

import user from './user';
import partyList from './partyList';

export default combineReducers({
  user,
  partyList,
});
