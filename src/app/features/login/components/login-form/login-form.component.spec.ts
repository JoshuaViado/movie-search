import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { LoginStrategyService } from '../../services/strategy/login-strategy.service';
import { LoginStateService } from '../../services/state/login-state.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  let loginStrategyServiceSpy = jasmine.createSpyObj('LoginStrategyService', [
    'signUpUser',
  ]);

  let loginStateServiceSpy = jasmine.createSpyObj('LoginStateService', [
    'getSignUpForm',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginFormComponent],
    }).overrideComponent(LoginFormComponent, {
      set: {
        providers: [
          {
            provide: LoginStrategyService,
            useValue: loginStrategyServiceSpy,
          },
          {
            provide: LoginStateService,
            useValue: loginStateServiceSpy,
          },
        ],
      },
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
