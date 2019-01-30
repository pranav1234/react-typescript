import { combineEpics, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { pingConstants, pingActions } from '../ping';

// contrived example!!!
const pingEpic = (
  action$ : any,
) =>
  action$.pipe(
    ofType(pingConstants.PING),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo(pingActions. pong())
  );

export default combineEpics(pingEpic);
