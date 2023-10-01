import { TestBed } from '@angular/core/testing';

import { LoginStrategyService } from './login-strategy.service';

describe('LoginStrategyService', () => {
  let service: LoginStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
