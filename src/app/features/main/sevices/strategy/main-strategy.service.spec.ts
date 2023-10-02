import { TestBed } from '@angular/core/testing';

import { MainStrategyService } from './main-strategy.service';

describe('MainStrategyService', () => {
  let service: MainStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
