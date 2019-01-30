import { combineReducers } from 'redux';

import { pingReducer } from '../features/ping';

const rootReducer = combineReducers({
  ping: pingReducer,
});

export default rootReducer;
