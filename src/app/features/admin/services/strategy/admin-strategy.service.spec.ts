import { TestBed } from '@angular/core/testing';

import { AdminStrategyService } from './admin-strategy.service';

describe('AdminStrategyService', () => {
  let service: AdminStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
