import { combineEpics } from 'redux-observable';

import ping from '../features/ping/epics';
import login from "../features/authentication/epics";

export default combineEpics(ping,login);
