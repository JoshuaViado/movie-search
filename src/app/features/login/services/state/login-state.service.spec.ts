import { TestBed } from '@angular/core/testing';

import { LoginStateService } from './login-state.service';
import { FormControl, FormGroup } from '@angular/forms';

describe('LoginStateService', () => {
  let service: LoginStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoginStateService] });
    service = TestBed.inject(LoginStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get and set value for sign up form', () => {
    const value = new FormGroup({ firstName: new FormControl('') });
    service.setSignUpForm(value);
    service.getSignUpForm().subscribe((item) => {
      expect(item).toEqual(value);
    });
  });
});
