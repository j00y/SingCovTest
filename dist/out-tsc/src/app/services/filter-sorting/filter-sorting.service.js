var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var FilterSortingService = /** @class */ (function () {
    function FilterSortingService() {
    }
    FilterSortingService.prototype.setDataToDisplay = function (data, sortType, pageIndex, pageSize) {
        var startSlice = pageIndex * pageSize;
        var endSlice = startSlice + pageSize;
        data.filteredData = this.sortDataBy(sortType, data.filteredData);
        data.filteredData = data.filteredData.slice(startSlice, endSlice);
        return data.filteredData;
    };
    FilterSortingService.prototype.sortDataBy = function (sortType, data) {
        data.sort(function (a, b) {
            switch (sortType) {
                case 'Kind Ascendant': {
                    if (a.kind < b.kind) {
                        return -1;
                    }
                    if (a.kind > b.kind) {
                        return 1;
                    }
                    return 0;
                }
                case 'Kind Descendant': {
                    if (a.kind > b.kind) {
                        return -1;
                    }
                    if (a.kind < b.kind) {
                        return 1;
                    }
                    return 0;
                }
                case 'Company Ascendant': {
                    if (a.brand < b.brand) {
                        return -1;
                    }
                    if (a.brand > b.brand) {
                        return 1;
                    }
                    return 0;
                }
                case 'Company Descendant': {
                    if (a.brand > b.brand) {
                        return -1;
                    }
                    if (a.brand < b.brand) {
                        return 1;
                    }
                    return 0;
                }
                case '$ Ascendant': {
                    var aNumber = Number(a.price);
                    var bNumber = Number(b.price);
                    if ((aNumber) < (bNumber)) {
                        return -1;
                    }
                    if ((aNumber) > (bNumber)) {
                        return 1;
                    }
                    return 0;
                }
                case '$ Descendant': {
                    var aNumber = Number(a.price);
                    var bNumber = Number(b.price);
                    if ((aNumber) > (bNumber)) {
                        return -1;
                    }
                    if ((aNumber) < (bNumber)) {
                        return 1;
                    }
                    return 0;
                }
            }
        });
        return data;
    };
    FilterSortingService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FilterSortingService);
    return FilterSortingService;
}());
export { FilterSortingService };
//# sourceMappingURL=filter-sorting.service.js.map