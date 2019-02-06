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
import { ActionFavouritesType } from '../actions';
export var InitialPoliciesState = {
    favouriteList: []
};
export function FavouritesReducer(appState, action) {
    if (appState === void 0) { appState = InitialPoliciesState; }
    switch (action.type) {
        case ActionFavouritesType.GET_FAVOURITES: {
            return __assign({}, appState);
        }
        case ActionFavouritesType.INSERT_FAVOURITE: {
            var newFavouriteList = this.appState.favouriteList.push(action.payload);
            return __assign({}, appState, { favouriteList: newFavouriteList });
        }
        case ActionFavouritesType.DELETE_FAVOURITE: {
            var deleteFavouriteItem_1 = action.payload;
            appState.favouriteList.forEach(function (favItem) {
                if (favItem.id === deleteFavouriteItem_1.id) {
                    appState.favouriteList.splice(appState.favouriteList.indexOf(favItem), 1);
                }
            });
            return appState;
        }
        default:
            return appState;
    }
}
//# sourceMappingURL=favourites.reducers.js.map