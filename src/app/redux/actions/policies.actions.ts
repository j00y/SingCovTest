import { Action } from '@ngrx/store';
import { Policy } from 'app/dtos/policy.dto';
import { PolicyModel } from 'app/models/policy.model';

export enum ActionPoliciesType {
    GET_POLICIES = '[Policies] Get all policies list',
    GET_POLICIES_SUCCESS = '[Policies] Policies received succesfully',
    GET_POLICIES_FAILED = '[Policies] Policies reception failed',
    SET_POLICY_AS_FAV = '[Policies] Set police as favourite',
    UNMARK_POLICY_AS_FAV = '[Policies] Unmark police as favourite'

}

export class GetPoliciesAction implements Action {
    readonly type = ActionPoliciesType.GET_POLICIES;
    constructor() { }
}
export class GetPoliciesActionSuccess implements Action {
    readonly type = ActionPoliciesType.GET_POLICIES_SUCCESS;
    constructor(public payload: PolicyModel[]) { }
}
export class GetPoliciesActionFailed implements Action {
    readonly type = ActionPoliciesType.GET_POLICIES_FAILED;
    constructor(public payload: string) { }
}
export class SetPolicyAsFavAction implements Action {
    readonly type = ActionPoliciesType.SET_POLICY_AS_FAV;
    constructor(public payload: PolicyModel) { }
}
export class UnmarkPolicyAsFavAction implements Action {
    readonly type = ActionPoliciesType.UNMARK_POLICY_AS_FAV;
    constructor(public payload: PolicyModel) { }
}
export type PoliciesActions =
    GetPoliciesAction |
    GetPoliciesActionSuccess |
    GetPoliciesActionFailed |
    SetPolicyAsFavAction |
    UnmarkPolicyAsFavAction;
