import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/redux/reducers/reducers';
import { MatTableDataSource, MatPaginator, PageEvent, MatDialog, MatDialogConfig } from '@angular/material';
import { PolicyModel } from 'app/models/policy.model';
import * as policiesActions from 'app/redux/actions';
import { FormControl } from '@angular/forms';
import { FilterSortingService } from '../../services/filter-sorting';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

export interface SortType {
  type: [string];
}

export interface SortGroup {
  sort: string;
  type: string[];
}

@Component({
  selector: 'app-policies-tails',
  templateUrl: './policies-tails.component.html',
  styleUrls: ['./policies-tails.component.scss']
})
export class PoliciesTailsComponent implements OnInit {
  dataSource: MatTableDataSource<PolicyModel>;
  dataSourceForTail: PolicyModel[];
  resultsFound: boolean;
  pageIndex: number;
  pageSize: number;
  length: number;
  sortType: string;
  minPrice: number;
  maxPrice: number;
  minFilterPrice: number;
  maxFilterPrice: number;
  stateData: PolicyModel[];
  viewData: MatTableDataSource<PolicyModel>;
  isFilterActive: boolean;
  searchControl = new FormControl();
  sortingControl = new FormControl();
  sortGroups: SortGroup[] = [
    {
      sort: 'Kind',
      type: ['Kind Ascendant', 'Kind Descendant']
    },
    {
      sort: 'Company',
      type: ['Company Ascendant', 'Company Descendant']
    },
    {
      sort: 'Price',
      type: ['$ Ascendant', '$ Descendant']
    },
  ];
  constructor(
    private store: Store<State>,
    public filterAndSorting: FilterSortingService,
    public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.pageIndex = 0;
    this.pageSize = 5;
    this.resultsFound = true;
    this.dataSource = new MatTableDataSource([]);
    this.viewData = new MatTableDataSource([]);
    this.isFilterActive = false;
    this.dataSource.paginator = this.paginator;
    this.store.subscribe(data => {
      this.dataSource.data = data.policies.policiesList;
      this.stateData = [...this.dataSource.data];
      this.viewData.data = this.stateData;
      this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.viewData, this.sortType, this.pageIndex, this.pageSize);
      this.dataSource.paginator = this.paginator;
    });
    this.sortingControl.valueChanges.subscribe(type => {
      this.stateData = [...this.dataSource.data];
      this.viewData.data = this.stateData;
      this.viewData.paginator = this.paginator;
      this.sortType = type;
      if (this.viewData.filteredData.length && !this.isFilterActive) {
        this.minFilterPrice = this.filterAndSorting.getMinPrice(this.viewData.filteredData);
        this.maxFilterPrice = this.filterAndSorting.getMaxPrice(this.viewData.filteredData);
      } else if (this.viewData.filteredData === undefined) {
        this.minFilterPrice = 0;
        this.maxFilterPrice = 0;
      }
      this.viewData.data = this.filterAndSorting.filterByPriceRange(this.viewData.data, this.minFilterPrice, this.maxFilterPrice);
      this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.viewData, this.sortType, this.pageIndex, this.pageSize);
    });
  }
  applyFilter(filterValue: string) {
    this.stateData = [...this.dataSource.data];
    this.viewData.data = this.stateData;
    this.viewData.filter = filterValue.trim().toLowerCase();
    this.viewData.paginator = this.paginator;
    this.viewData.data = this.filterAndSorting.filterByPriceRange(this.viewData.data, this.minFilterPrice, this.maxFilterPrice);
    this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.viewData, this.sortType, this.pageIndex, this.pageSize);
    if (this.dataSource.filteredData.length === 0) {
      this.resultsFound = false;
    } else {
      this.resultsFound = true;
    }
  }
  public paginationEvent(event?: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.stateData = [...this.dataSource.data];
    this.viewData.data = this.stateData;
    this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.viewData, this.sortType, this.pageIndex, this.pageSize);

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
    dialogConfig.panelClass = 'panel-modal-class';
    dialogConfig.data = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minFilterPrice: this.minFilterPrice,
      maxFilterPrice: this.maxFilterPrice
    };
    this.dialog.open(FilterModalComponent, dialogConfig)
      .afterClosed()
      .subscribe(data => {
        if (data.closed === false) {
          this.stateData = [...this.dataSource.data];
          this.viewData.data = this.stateData;
          this.isFilterActive = data.isFilterActive;
          this.minFilterPrice = data.minValue;
          this.maxFilterPrice = data.maxValue;
          if (this.minFilterPrice && this.maxFilterPrice) {
            this.viewData.data = this.filterAndSorting.filterByPriceRange(this.viewData.data, this.minFilterPrice, this.maxFilterPrice);
          }
          this.viewData.paginator = this.paginator;
          this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.viewData, this.sortType, this.pageIndex, this.pageSize);
        }
      });
  }
  deleteFilter() {
    this.isFilterActive = false;
    this.stateData = [...this.dataSource.data];
    this.viewData.data = this.stateData;
    this.viewData.paginator = this.paginator;
    this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.viewData, this.sortType, this.pageIndex, this.pageSize);
    if (!this.dataSourceForTail.length) {
      this.resultsFound = false;
    } else {
      this.resultsFound = true;
    }
  }

}
