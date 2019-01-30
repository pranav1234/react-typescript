import { createAsyncAction } from 'typesafe-actions';
export const authLogin = createAsyncAction(
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE'
  )<void, any, Error>();