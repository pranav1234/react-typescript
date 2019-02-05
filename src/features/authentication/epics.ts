// epics.ts
import { combineEpics, Epic, } from 'redux-observable';
import { filter, switchMap, map, catchError,pluck} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { authLogin ,isLoggedIn} from './actions';
import { RootAction, RootState, RootService } from 'MyTypes';


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
    > = (action$, state$, { api }) =>
        action$.pipe(
            filter(isActionOf(authLogin.request)),
            switchMap((obj:any) =>
                from(api.login({...obj.payload})).pipe(
                    pluck('data', 'jwt'),
                    map(value => {  				console.log('TCL: payload', obj);                    localStorage.setItem('jwt', value.toString()); return value }),
                    map(authLogin.success),
                    catchError((message: Error) => of(authLogin.failure(message)))
                )
            ),

        );

export const isLogin: Epic<
    RootAction,
    RootAction,
    RootState,
    RootService
    > = (action$, state$, { api }) =>
        action$.pipe(
            filter(isActionOf(isLoggedIn.request)),
            switchMap(() =>
                of(localStorage.getItem('jwt')).pipe(
                    map(value => value ? true:false ),
                    map(isLoggedIn.success),
                    catchError((message: Error) => of(isLoggedIn.failure(message)))
                )
            ),

        );

export default combineEpics(loginUser,isLogin);
