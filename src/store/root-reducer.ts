import { combineReducers } from 'redux';

import { pingReducer } from '../features/ping';
import { authenticateReducer } from '../features/authentication';


const rootReducer = combineReducers({
  ping : pingReducer,
  auth :authenticateReducer,
});

export default rootReducer;
