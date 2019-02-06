import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, mapTo } from 'rxjs/operators';

import * as policiesActions from '../actions/policies.actions';
import { Policy } from 'app/dtos/policy.dto';
import { PoliciesMapper } from 'app/services/policies/policies.mapper';
import { IPoliciesService } from 'app/services/policies/policies.interface';

@Injectable()
export class PoliciesEffect {

    constructor(
        private actions$: Actions,
        private policyService: IPoliciesService
    ) { }
    @Effect()
    public getPolicies$: Observable<Action> = this.actions$.pipe(
        ofType<policiesActions.GetPoliciesAction>(
            policiesActions.ActionPoliciesType.GET_POLICIES
        ),
        mergeMap((actions: policiesActions.GetPoliciesAction) =>
            this.policyService.getPolicies().pipe(
                map((policies: Policy[]) =>
                    new policiesActions.GetPoliciesActionSuccess(PoliciesMapper.policiesCollectionToPoliciesModelCollection(policies))
                ),
                catchError(err => of(new policiesActions.GetPoliciesActionFailed(err)))
            )
        )
    );

}
