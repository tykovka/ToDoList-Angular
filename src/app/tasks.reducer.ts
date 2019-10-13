import { Action } from '@ngrx/store';
import { TasksActionTypes } from './tasks.actions';
import { start } from 'repl';


export const tasksFeatureKey = 'tasks';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case TasksActionTypes.LoadTasks:
    console.log('Action111');
    return state;

    default:
      return state;
  }
}
