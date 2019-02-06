import { Injectable } from '@angular/core';
import { PolicyModel } from 'app/models/policy.model';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FilterSortingService {

  constructor() { }

  setDataToDisplay(
    data: MatTableDataSource<PolicyModel>,
    sortType: string,
    pageIndex: number,
    pageSize: number): PolicyModel[] {
    const startSlice = pageIndex * pageSize;
    const endSlice = startSlice + pageSize;
    let returnData: PolicyModel[];
    returnData = this.sortDataBy(sortType, data.filteredData);
    returnData = returnData.slice(startSlice, endSlice);

    return returnData;
  }

  sortDataBy(sortType: string, data: PolicyModel[]): PolicyModel[] {
    data.sort((a, b) => {
      switch (sortType) {
        case 'Kind Ascendant': {
          return a.kind.localeCompare(b.kind);
        }
        case 'Kind Descendant': {
          return b.kind.localeCompare(a.kind);
        }
        case 'Company Ascendant': {
          return a.brand.localeCompare(b.brand);
        }
        case 'Company Descendant': {
          return b.brand.localeCompare(a.brand);
        }
        case '$ Ascendant': {
          const aNumber = Number(a.price);
          const bNumber = Number(b.price);
          if ((aNumber) < (bNumber)) { return -1; }
          if ((aNumber) > (bNumber)) { return 1; }
          return 0;
        }
        case '$ Descendant': {
          const aNumber = Number(a.price);
          const bNumber = Number(b.price);
          if ((aNumber) > (bNumber)) { return -1; }
          if ((aNumber) < (bNumber)) { return 1; }
          return 0;
        }
      }
    });
    return data;
  }
  getMinPrice(data: PolicyModel[]): number {
    const _data = [...data];
    if (data.length === 0) {
      return 0;
    } else {
      let minPrice: number;
      minPrice = Number(_data.sort(function (a, b) {
        return Number(a.price) < Number(b.price) ? -1 : 1;
      })[0].price);
      return minPrice;
    }
  }
  getMaxPrice(data: PolicyModel[]): number {
    const _data = [...data];
    if (data.length === 0) {
      return 50000;
    } else {
      let minPrice: number;
      minPrice = Number(_data.sort(function (a, b) {
        return Number(a.price) > Number(b.price) ? -1 : 1;
      })[0].price);
      return minPrice;
    }
  }
  filterByPriceRange(data: PolicyModel[], min: number, max: number): PolicyModel[] {
    const _data: PolicyModel[] = [...data];
    const filteredData: PolicyModel[] = [];
    if (max === 0 && min === 0) {
      _data.forEach(function (policy) {
        if ((Number(policy.price) >= min)) {
          filteredData.push(policy);
        }
      });
      return filteredData;
    } else {
      _data.forEach(function (policy) {
        if ((Number(policy.price) >= min) && (Number(policy.price) <= max)) {
          filteredData.push(policy);
        }
      });
      return filteredData;
    }
  }
}
