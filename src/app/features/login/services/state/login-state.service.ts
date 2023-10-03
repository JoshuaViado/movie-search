import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignInFormGroup } from 'src/app/shared/constants/form.constant';

@Injectable()
export class LoginStateService {
  private signUpForm = new BehaviorSubject<FormGroup>(SignInFormGroup);

  private showSignIn = new BehaviorSubject<boolean>(true);

  getSignUpForm(): Observable<FormGroup> {
    return this.signUpForm.asObservable();
  }

  setSignUpForm(form: FormGroup) {
    this.signUpForm.next(form);
  }

  getShowSignIn(): Observable<boolean> {
    return this.showSignIn.asObservable();
  }

  setShowSignIn(value: boolean) {
    this.showSignIn.next(value);
  }
}
