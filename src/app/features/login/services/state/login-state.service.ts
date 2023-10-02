import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginStateService {
  private signUpForm = new BehaviorSubject<FormGroup>(
    new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    })
  );

  getSignUpForm(): Observable<FormGroup> {
    return this.signUpForm.asObservable();
  }
}
