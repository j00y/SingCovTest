var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material';
import * as policiesActions from '../../redux/actions/policies.actions';
var FavsListComponent = /** @class */ (function () {
    function FavsListComponent(store) {
        this.store = store;
    }
    FavsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favsList = [];
        this.resultsFound = false;
        this.store.subscribe(function (data) {
            _this.dataSource = new MatTableDataSource(data.policies.policiesList);
            _this.favsList = _this.returnFavsPoliciesOfAllPolicies(_this.dataSource);
            _this.resultsFound = _this.checkIfNoResultsFound(_this.favsList);
        });
    };
    FavsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.favsList = this.returnFavsPoliciesOfAllPolicies(this.dataSource);
        this.resultsFound = this.checkIfNoResultsFound(this.favsList);
    };
    FavsListComponent.prototype.checkIfNoResultsFound = function (data) {
        var results = true;
        if (data.length === 0) {
            results = false;
        }
        else {
            results = true;
        }
        return results;
    };
    FavsListComponent.prototype.returnFavsPoliciesOfAllPolicies = function (data) {
        var favsList = [];
        for (var _i = 0, _a = data.filteredData; _i < _a.length; _i++) {
            var policy = _a[_i];
            if (policy.favouritePolicy) {
                favsList.push(policy);
            }
        }
        return favsList;
    };
    FavsListComponent.prototype.removeFavFromFavs = function (fav) {
        this.store.dispatch(new policiesActions.UnmarkPolicyAsFavAction(fav));
    };
    FavsListComponent = __decorate([
        Component({
            selector: 'app-favs-list',
            templateUrl: './favs-list.component.html',
            styleUrls: ['./favs-list.component.scss']
        }),
        __metadata("design:paramtypes", [Store])
    ], FavsListComponent);
    return FavsListComponent;
}());
export { FavsListComponent };
//# sourceMappingURL=favs-list.component.js.map