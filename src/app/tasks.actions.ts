import { Action } from '@ngrx/store';

export enum TasksActionTypes {
  LoadTasks = '[Tasks] Load Tasks',


}

export class LoadTasks implements Action {
  readonly type = TasksActionTypes.LoadTasks;
}


export type TasksActions = LoadTasks;
