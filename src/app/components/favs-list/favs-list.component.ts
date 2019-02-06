import { Component, OnInit } from '@angular/core';
import { PolicyModel } from 'app/models/policy.model';
import { Store } from '@ngrx/store';
import { State } from 'app/redux/reducers/reducers';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import * as policiesActions from '../../redux/actions/policies.actions';

@Component({
  selector: 'app-favs-list',
  templateUrl: './favs-list.component.html',
  styleUrls: ['./favs-list.component.scss']
})
export class FavsListComponent implements OnInit {
  favsList: PolicyModel[];
  dataSource: MatTableDataSource<PolicyModel>;
  resultsFound: boolean;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.favsList = [];
    this.resultsFound = false;
    this.dataSource = new MatTableDataSource([]);
    this.store.subscribe(data => {
      this.dataSource.data = data.policies.policiesList;
      this.favsList = this.returnFavsPoliciesOfAllPolicies(this.dataSource);
      this.resultsFound = this.checkIfNoResultsFound(this.favsList);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.favsList = this.returnFavsPoliciesOfAllPolicies(this.dataSource);
    this.resultsFound = this.checkIfNoResultsFound(this.favsList);
  }
  checkIfNoResultsFound(data: PolicyModel[]): boolean {
    let results = true;
    if (data.length === 0) {
      results = false;
    } else {
      results = true;
    }
    return results;
  }
  returnFavsPoliciesOfAllPolicies(data: MatTableDataSource<PolicyModel>): PolicyModel[] {
    const favsList: PolicyModel[] = [];
    for (const policy of data.filteredData) {
      if (policy.favouritePolicy) {
        favsList.push(policy);
      }
    }
    return favsList;
  }
  removeFavFromFavs(fav: PolicyModel) {
    this.store.dispatch(new policiesActions.UnmarkPolicyAsFavAction(fav));
  }
}
