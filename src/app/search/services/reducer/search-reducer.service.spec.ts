import { TestBed } from '@angular/core/testing';

import { SearchReducerService } from './search-reducer.service';

describe('SearchReducerService', () => {
  let service: SearchReducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchReducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
