
import { createStore, applyMiddleware } from 'redux';
import { RootAction, RootState, RootService } from 'MyTypes';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import rootService from './root-service';
import logger from 'redux-logger';



export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  RootService
>({
  dependencies: rootService,
});
// const epicMiddleware = createEpicMiddleware({
//   dependencies: { getJSON: ajax.getJSON }
// });

const store = createStore(rootReducer,
  applyMiddleware(epicMiddleware,logger)
  )
  epicMiddleware.run(rootEpic);

export default store;