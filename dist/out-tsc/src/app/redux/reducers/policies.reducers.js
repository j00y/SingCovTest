var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ActionPoliciesType } from '../actions';
export var InitialPoliciesState = {
    policiesList: [],
    loading: true,
    loaded: true,
    error: ''
};
export function PoliciesReducer(appState, action) {
    if (appState === void 0) { appState = InitialPoliciesState; }
    switch (action.type) {
        case ActionPoliciesType.GET_POLICIES: {
            return __assign({}, appState, { loading: true, loaded: false });
        }
        case ActionPoliciesType.GET_POLICIES_SUCCESS: {
            var receivedPoliciesList = action.payload;
            return __assign({}, appState, { loaded: true, loading: false, policiesList: action.payload });
        }
        case ActionPoliciesType.GET_POLICIES_FAILED: {
            var receivedPoliciesList = action.payload;
            return __assign({}, appState, { loaded: false, loading: false, policiesList: [], error: action.payload });
        }
        case ActionPoliciesType.SET_POLICY_AS_FAV:
            {
                var newFavPolicy_1 = action.payload;
                appState.policiesList.forEach(function (policy) {
                    if (policy.id === newFavPolicy_1.id) {
                        policy.favouritePolicy = true;
                    }
                });
            }
            return appState;
        case ActionPoliciesType.UNMARK_POLICY_AS_FAV:
            {
                var unmarkedFavPolicy_1 = action.payload;
                appState.policiesList.forEach(function (policy) {
                    if (policy.id === unmarkedFavPolicy_1.id) {
                        policy.favouritePolicy = false;
                    }
                });
            }
            return appState;
        default: {
            return appState;
        }
    }
}
//# sourceMappingURL=policies.reducers.js.map