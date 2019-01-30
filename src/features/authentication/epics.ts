// epics.ts
import { combineEpics, Epic,  } from 'redux-observable';
import { filter, switchMap,map ,catchError,} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { authLogin } from './actions';
import { RootAction, RootState ,RootService} from 'MyTypes';


// const fetchTodosFlow: Epic<RootAction, RootAction, RootState> = (action$, store, {  }) =>
//   action$.pipe(
//     filter(isActionOf(authLogin.request)),
//     switchMap(action =>
//       from(todosApi.getAll(...)).pipe(
//         map(authLogin.success),
//         catchError((message: string) => of(authLogin.failure(message)))
//       )
//     );

    export const loginUser: Epic<
  RootAction,
  RootAction,
  RootState,
  RootService
> = (action$, state$,{ api }) =>
  action$.pipe(
    filter(isActionOf(authLogin.request)),
    switchMap(() =>
      from(api.login()).pipe(
        map(authLogin.success),
        catchError((message: string) => of(authLogin.failure))
      )
    )
  );

export default combineEpics(loginUser);
