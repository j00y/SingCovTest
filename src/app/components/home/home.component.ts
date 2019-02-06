import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../../services/policies';
import { Store } from '@ngrx/store';
import { State } from 'app/redux/reducers/reducers';
import * as policiesActions from '@redux/*';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PoliciesService]
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new policiesActions.GetPoliciesAction());

  }

}

