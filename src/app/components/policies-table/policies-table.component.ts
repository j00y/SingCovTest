import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/redux/reducers/reducers';
import { PolicyModel } from 'app/models/policy.model';
import * as policiesActions from 'app/redux/actions/policies.actions';
import { MatSort, MatTableDataSource, MatPaginator, PageEvent, MatDialog, MatDialogConfig } from '@angular/material';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { FilterSortingService } from 'app/services/filter-sorting';

@Component({
  selector: 'app-policies-table',
  templateUrl: './policies-table.component.html',
  styleUrls: ['./policies-table.component.scss']
})
export class PoliciesTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'kind', 'brand', 'price', 'addToFav'];
  dataSource: MatTableDataSource<PolicyModel>;
  resultsFound: boolean;
  pageEvent: PageEvent;
  pageSize: number;
  minPrice: number;
  maxPrice: number;
  minFilterPrice: number;
  maxFilterPrice: number;
  stateData: PolicyModel[];
  viewData: MatTableDataSource<PolicyModel>;
  isFilterActive: boolean;
  constructor(
    private store: Store<State>,
    public dialog: MatDialog,
    public filterAndSorting: FilterSortingService,
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.pageSize = 5;
    this.resultsFound = true;
    this.dataSource = new MatTableDataSource([]);
    this.viewData = new MatTableDataSource([]);
    this.isFilterActive = false;
    this.store.subscribe(data => {
      this.dataSource.data = data.policies.policiesList;
      this.stateData = [...this.dataSource.data];
      this.viewData.data = this.stateData;
      if (this.viewData.filteredData.length && !this.isFilterActive) {
        this.minFilterPrice = this.filterAndSorting.getMinPrice(this.viewData.filteredData);
        this.maxFilterPrice = this.filterAndSorting.getMaxPrice(this.viewData.filteredData);
      } else if (this.viewData.filteredData === undefined) {
        this.minFilterPrice = 0;
        this.maxFilterPrice = 0;
      }
      this.viewData.data = this.filterAndSorting.filterByPriceRange(this.viewData.data, this.minFilterPrice, this.maxFilterPrice);
      this.viewData.sort = this.sort;
      this.viewData.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.viewData.filter = filterValue.trim().toLowerCase();
    if (this.viewData.filteredData.length === 0) {
      this.resultsFound = false;
    } else {
      this.resultsFound = true;
    }
  }
  toggleFavPolicy(policy: PolicyModel) {
    if (policy.favouritePolicy === false) {
      this.store.dispatch(new policiesActions.SetPolicyAsFavAction(policy));
    } else {
      this.store.dispatch(new policiesActions.UnmarkPolicyAsFavAction(policy));

    }
  }
  openFilterModal() {
    const dialogConfig = new MatDialogConfig();
    this.minPrice = this.filterAndSorting.getMinPrice(this.dataSource.filteredData);
    this.maxPrice = this.filterAndSorting.getMaxPrice(this.dataSource.filteredData);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'backdrop-modal-class';
    dialogConfig.panelClass = 'panel-filter-modal-class';
    dialogConfig.data = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minFilterPrice: this.minFilterPrice,
      maxFilterPrice: this.maxFilterPrice
    };
    this.dialog.open(FilterModalComponent, dialogConfig)
      .afterClosed()
      .subscribe(data => {
        this.stateData = [...this.dataSource.data];
        this.viewData.data = this.stateData;
        this.isFilterActive = data.isFilterActive;
        this.minFilterPrice = data.minValue;
        this.maxFilterPrice = data.maxValue;
        if (this.minFilterPrice && this.maxFilterPrice) {
          this.viewData.data = this.filterAndSorting.filterByPriceRange(this.viewData.data, this.minFilterPrice, this.maxFilterPrice);
        }
        this.viewData.sort = this.sort;
        this.viewData.paginator = this.paginator;
      });
  }
  deleteFilter() {
    this.isFilterActive = false;
    this.stateData = [...this.dataSource.data];
    this.viewData.data = this.stateData;
    this.viewData.sort = this.sort;
    this.viewData.paginator = this.paginator;
    if (!this.viewData.filteredData.length) {
      this.resultsFound = false;
    } else {
      this.resultsFound = true;
    }
  }
}

