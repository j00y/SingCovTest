import { PoliciesActions } from '..';
import { ActionPoliciesType } from '../actions';
import { PolicyModel } from 'app/models/policy.model';

export interface PoliciesState {
    policiesList: PolicyModel[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export const InitialPoliciesState: PoliciesState = {
    policiesList: [],
    loading: true,
    loaded: true,
    error: ''
};

export function PoliciesReducer(appState = InitialPoliciesState, action: PoliciesActions): PoliciesState {
    switch (action.type) {
        case ActionPoliciesType.GET_POLICIES: {
            return {
                ...appState,
                loading: true,
                loaded: false
            };
        }
        case ActionPoliciesType.GET_POLICIES_SUCCESS: {
            const receivedPoliciesList = action.payload;
            return {
                ...appState,
                loaded: true,
                loading: false,
                policiesList: receivedPoliciesList
            };
        }
        case ActionPoliciesType.GET_POLICIES_FAILED: {
            const errorString = action.payload;
            return {
                ...appState,
                loaded: false,
                loading: false,
                policiesList: [],
                error: errorString
            };
        }
        case ActionPoliciesType.SET_POLICY_AS_FAV: {
            const newFavPolicy = action.payload;
            appState.policiesList.forEach(function (policy) {
                if (policy.id === newFavPolicy.id) {
                    policy.favouritePolicy = true;
                }
            });
            return appState;
        }

        case ActionPoliciesType.UNMARK_POLICY_AS_FAV: {
            const unmarkedFavPolicy = action.payload;
            appState.policiesList.forEach(function (policy) {
                if (policy.id === unmarkedFavPolicy.id) {
                    policy.favouritePolicy = false;
                }
            });
            return appState;
        }

        default: {
            return appState;
        }
    }
}

