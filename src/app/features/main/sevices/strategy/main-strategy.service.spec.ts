import { TestBed } from '@angular/core/testing';

import { MainStrategyService } from './main-strategy.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

describe('MainStrategyService', () => {
  let service: MainStrategyService;

  let authServiceSpy = jasmine.createSpyObj('AuthService', ['getUser']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MainStrategyService,
        {
          provide: AuthService,
          useValue: authServiceSpy,
        },
      ],
    });
    service = TestBed.inject(MainStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
