import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { tasksFeatureKey, reducer as tasksReducer } from '../tasks.reducer';

export const stateFeatureKey = 'state';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  [tasksFeatureKey]: tasksReducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
