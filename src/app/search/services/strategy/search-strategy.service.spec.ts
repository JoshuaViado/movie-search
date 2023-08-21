import { TestBed } from '@angular/core/testing';

import { SearchStrategyService } from './search-strategy.service';

describe('SearchStrategyService', () => {
  let service: SearchStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
