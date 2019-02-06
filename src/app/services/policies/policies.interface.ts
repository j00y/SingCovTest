import { Injectable } from '@angular/core';
import { PolicyModel } from 'app/models/policy.model';
import { Observable } from 'rxjs';
import { Policy } from 'app/dtos/policy.dto';


@Injectable()
export abstract class IPoliciesService {

    abstract getPolicies(): Observable<Policy[]>;
}
