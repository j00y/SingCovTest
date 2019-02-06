import * as fromPolicies from './policies.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    policies: fromPolicies.PoliciesState;
}

export const reducers: ActionReducerMap<State> = {
    policies: fromPolicies.PoliciesReducer
};
