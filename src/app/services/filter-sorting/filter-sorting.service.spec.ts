import { TestBed } from '@angular/core/testing';

import { FilterSortingService } from './filter-sorting.service';

describe('FilterSortingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterSortingService = TestBed.get(FilterSortingService);
    expect(service).toBeTruthy();
  });
});
