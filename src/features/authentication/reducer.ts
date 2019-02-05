
import { getType } from 'typesafe-actions';
import * as actions from './actions';
import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';


export type AuthenticatedState = {
    readonly loggedInUser: any;
    readonly isLoggedIn: boolean;
};

export type AuthenticatedAction = ActionType<typeof actions>;

export default combineReducers<AuthenticatedState, AuthenticatedAction>({

    loggedInUser: (state = {}, action: any) => {
        switch (action.type) {
            case getType(actions.authLogin.success):
                return action.payload;
            default:
                return state;
        }
    },
    isLoggedIn: (state = false, action: any) => {
        switch (action.type) {
            case getType(actions.isLoggedIn.success):
                return action.payload;
            case getType(actions.authLogin.success):
                return action.payload;
            default:
                return state;
        }
    }
});





