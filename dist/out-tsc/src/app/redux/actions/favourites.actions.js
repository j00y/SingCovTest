export var ActionFavouritesType;
(function (ActionFavouritesType) {
    ActionFavouritesType["GET_FAVOURITES"] = "Get al policies list";
    ActionFavouritesType["INSERT_FAVOURITE"] = "Post new favourite item";
    ActionFavouritesType["DELETE_FAVOURITE"] = "Delete favourite item from list";
})(ActionFavouritesType || (ActionFavouritesType = {}));
var GetFavourites = /** @class */ (function () {
    function GetFavourites() {
        this.type = ActionFavouritesType.GET_FAVOURITES;
    }
    return GetFavourites;
}());
export { GetFavourites };
var InsertFavouriteItemToList = /** @class */ (function () {
    function InsertFavouriteItemToList(payload) {
        this.payload = payload;
        this.type = ActionFavouritesType.INSERT_FAVOURITE;
    }
    return InsertFavouriteItemToList;
}());
export { InsertFavouriteItemToList };
var DeleteFavouriteItemFromList = /** @class */ (function () {
    function DeleteFavouriteItemFromList(payload) {
        this.payload = payload;
        this.type = ActionFavouritesType.DELETE_FAVOURITE;
    }
    return DeleteFavouriteItemFromList;
}());
export { DeleteFavouriteItemFromList };
//# sourceMappingURL=favourites.actions.js.map