declare module 'MyTypes' {
    import { StateType, ActionType } from 'typesafe-actions';
    export type Store = StateType<typeof import('./index').default>;
    export type RootAction = ActionType<typeof import('./root-action').default>;
    export type RootState = StateType<any>;
    export type RootService = typeof import('./root-service').default;
  }
  