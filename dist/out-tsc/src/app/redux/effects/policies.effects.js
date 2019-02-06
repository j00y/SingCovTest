var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as policiesActions from '../actions/policies.actions';
import { PoliciesMapper } from 'app/services/policies/policies.mapper';
import { IPoliciesService } from 'app/services/policies/policies.interface';
var PoliciesEffect = /** @class */ (function () {
    function PoliciesEffect(actions$, policyService) {
        var _this = this;
        this.actions$ = actions$;
        this.policyService = policyService;
        this.getPolicies$ = this.actions$.pipe(ofType(policiesActions.ActionPoliciesType.GET_POLICIES), mergeMap(function (actions) {
            return _this.policyService.getPolicies().pipe(map(function (policies) {
                return new policiesActions.GetPoliciesActionSuccess(PoliciesMapper.policiesCollectionToPoliciesModelCollection(policies));
            }), catchError(function (err) { return of(new policiesActions.GetPoliciesActionFailed(err)); }));
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], PoliciesEffect.prototype, "getPolicies$", void 0);
    PoliciesEffect = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Actions,
            IPoliciesService])
    ], PoliciesEffect);
    return PoliciesEffect;
}());
export { PoliciesEffect };
//# sourceMappingURL=policies.effects.js.map