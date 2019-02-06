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
import * as policiesActions from 'app/redux/actions/policies.actions';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
var PoliciesTableComponent = /** @class */ (function () {
    function PoliciesTableComponent(store) {
        this.store = store;
        this.displayedColumns = ['name', 'kind', 'brand', 'price', 'addToFav'];
    }
    PoliciesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageSize = 5;
        this.resultsFound = true;
        this.store.subscribe(function (data) {
            _this.dataSource = new MatTableDataSource(data.policies.policiesList);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    PoliciesTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        console.log(this.dataSource.filteredData);
        if (this.dataSource.filteredData.length === 0) {
            this.resultsFound = false;
        }
        else {
            this.resultsFound = true;
        }
    };
    PoliciesTableComponent.prototype.toggleFavPolicy = function (policy) {
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
    ], PoliciesTableComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", MatSort)
    ], PoliciesTableComponent.prototype, "sort", void 0);
    PoliciesTableComponent = __decorate([
        Component({
            selector: 'app-policies-table',
            templateUrl: './policies-table.component.html',
            styleUrls: ['./policies-table.component.scss']
        }),
        __metadata("design:paramtypes", [Store])
    ], PoliciesTableComponent);
    return PoliciesTableComponent;
}());
export { PoliciesTableComponent };
//# sourceMappingURL=policies-table.component.js.map