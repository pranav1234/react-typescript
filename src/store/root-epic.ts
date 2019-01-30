import { combineEpics } from 'redux-observable';

import ping from '../features/ping/epics';

export default combineEpics(ping);
