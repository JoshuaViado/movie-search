import { TestBed } from '@angular/core/testing';

import { LoginStrategyService } from './login-strategy.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoginStateService } from '../state/login-state.service';

describe('LoginStrategyService', () => {
  let service: LoginStrategyService;

  let authServiceSpy = jasmine.createSpyObj('AuthService', ['signUp']);
  let loginStateServiceSpy = jasmine.createSpyObj('LoginStateService', [
    'getSignUpForm',
    'getShowSignIn',
  ]);

  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginStrategyService,
        {
          provide: AuthService,
          useValue: authServiceSpy,
        },
        {
          provide: LoginStateService,
          useValue: loginStateServiceSpy,
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
