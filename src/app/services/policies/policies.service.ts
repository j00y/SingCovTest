import { Injectable } from '@angular/core';
import { IPoliciesService } from './policies.interface';
import { Policy } from 'app/dtos/policy.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PoliciesService implements IPoliciesService {
  private dataUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {
  }

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.dataUrl);
  }
}
