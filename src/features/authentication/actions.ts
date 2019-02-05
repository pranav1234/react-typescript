import { createAsyncAction } from 'typesafe-actions';
export const authLogin = createAsyncAction(
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE'
  )<void, any, Error>();

  export const isLoggedIn = createAsyncAction(
    'IS_LOGIN_REQUEST',
    'IS_LOGIN_SUCCESS',
    'IS_LOGIN_FAILURE'
  )<void, boolean, Error>();