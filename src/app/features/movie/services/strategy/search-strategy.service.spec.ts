import { TestBed } from '@angular/core/testing';

import { MovieStrategyService } from './search-strategy.service';

describe('MovieStrategyService', () => {
  let service: MovieStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
