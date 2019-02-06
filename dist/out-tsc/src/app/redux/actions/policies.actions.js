export var ActionPoliciesType;
(function (ActionPoliciesType) {
    ActionPoliciesType["GET_POLICIES"] = "[Policies] Get all policies list";
    ActionPoliciesType["GET_POLICIES_SUCCESS"] = "[Policies] Policies received succesfully";
    ActionPoliciesType["GET_POLICIES_FAILED"] = "[Policies] Policies reception failed";
    ActionPoliciesType["SET_POLICY_AS_FAV"] = "[Policies] Set police as favourite";
    ActionPoliciesType["UNMARK_POLICY_AS_FAV"] = "[Policies] Unmark police as favourite";
})(ActionPoliciesType || (ActionPoliciesType = {}));
var GetPoliciesAction = /** @class */ (function () {
    function GetPoliciesAction() {
        this.type = ActionPoliciesType.GET_POLICIES;
    }
    return GetPoliciesAction;
}());
export { GetPoliciesAction };
var GetPoliciesActionSuccess = /** @class */ (function () {
    function GetPoliciesActionSuccess(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.GET_POLICIES_SUCCESS;
    }
    return GetPoliciesActionSuccess;
}());
export { GetPoliciesActionSuccess };
var GetPoliciesActionFailed = /** @class */ (function () {
    function GetPoliciesActionFailed(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.GET_POLICIES_FAILED;
    }
    return GetPoliciesActionFailed;
}());
export { GetPoliciesActionFailed };
var SetPolicyAsFavAction = /** @class */ (function () {
    function SetPolicyAsFavAction(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.SET_POLICY_AS_FAV;
    }
    return SetPolicyAsFavAction;
}());
export { SetPolicyAsFavAction };
var UnmarkPolicyAsFavAction = /** @class */ (function () {
    function UnmarkPolicyAsFavAction(payload) {
        this.payload = payload;
        this.type = ActionPoliciesType.UNMARK_POLICY_AS_FAV;
    }
    return UnmarkPolicyAsFavAction;
}());
export { UnmarkPolicyAsFavAction };
//# sourceMappingURL=policies.actions.js.map