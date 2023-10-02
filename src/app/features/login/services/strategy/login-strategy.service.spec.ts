import { TestBed } from '@angular/core/testing';

import { LoginStrategyService } from './login-strategy.service';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';
import { Router } from '@angular/router';

describe('LoginStrategyService', () => {
  let service: LoginStrategyService;

  let userApiServiceSpy = jasmine.createSpyObj('UserApiService', [
    'signUpUser',
  ]);

  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginStrategyService,
        {
          provide: UserApiService,
          useValue: userApiServiceSpy,
        },
        { provide: Router, useValue: routerSpy },
      ],
    });
    service = TestBed.inject(LoginStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
