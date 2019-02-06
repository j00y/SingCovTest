var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as policiesActions from 'app/redux/actions';
import { FormControl } from '@angular/forms';
import { FilterSortingService } from '../../services/filter-sorting';
var PoliciesTailsComponent = /** @class */ (function () {
    function PoliciesTailsComponent(store, filterAndSorting) {
        this.store = store;
        this.filterAndSorting = filterAndSorting;
        this.searchControl = new FormControl();
        this.sortingControl = new FormControl();
        this.sortGroups = [
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
    }
    PoliciesTailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageIndex = 1;
        this.pageSize = 5;
        this.resultsFound = true;
        var startSlice = this.pageIndex * this.pageSize;
        var endSlice = startSlice + this.pageSize;
        this.dataSource = new MatTableDataSource([]);
        this.store.subscribe(function (data) {
            _this.dataSource = new MatTableDataSource(data.policies.policiesList);
            _this.dataSourceForTail = _this.dataSource.filteredData.slice(startSlice, endSlice);
            _this.dataSource.paginator = _this.paginator;
            // this.dataSource.sort = this.sort;
        });
        this.sortingControl.valueChanges.subscribe(function (type) {
            _this.sortType = type;
            _this.dataSourceForTail = _this.filterAndSorting.setDataToDisplay(_this.dataSource, _this.sortType, _this.pageIndex, _this.pageSize);
        });
    };
    PoliciesTailsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        var startSlice = this.pageIndex * this.pageSize;
        var endSlice = startSlice + this.pageSize;
        this.dataSourceForTail = this.dataSource.filteredData.slice(startSlice, endSlice);
        if (this.dataSource.filteredData.length === 0) {
            this.resultsFound = false;
        }
        else {
            this.resultsFound = true;
        }
    };
    PoliciesTailsComponent.prototype.paginationEvent = function (event) {
        debugger;
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.dataSourceForTail = this.filterAndSorting.setDataToDisplay(this.dataSource, this.sortType, this.pageIndex, this.pageSize);
    };
    PoliciesTailsComponent.prototype.toggleFavPolicy = function (policy) {
        if (policy.favouritePolicy === false) {
            this.store.dispatch(new policiesActions.SetPolicyAsFavAction(policy));
        }
        else {
            this.store.dispatch(new policiesActions.UnmarkPolicyAsFavAction(policy));
        }
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], PoliciesTailsComponent.prototype, "paginator", void 0);
    PoliciesTailsComponent = __decorate([
        Component({
            selector: 'app-policies-tails',
            templateUrl: './policies-tails.component.html',
            styleUrls: ['./policies-tails.component.scss']
        }),
        __metadata("design:paramtypes", [Store,
            FilterSortingService])
    ], PoliciesTailsComponent);
    return PoliciesTailsComponent;
}());
export { PoliciesTailsComponent };
//# sourceMappingURL=policies-tails.component.js.map