import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IFormUser } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoginStateService } from '../state/login-state.service';
import {
  SignInFormGroup,
  SignUpFormGroup,
} from 'src/app/shared/constants/form.constant';

@Injectable()
export class LoginStrategyService {
  constructor(
    private readonly stateService: LoginStateService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  toggleSignIn(value: boolean) {
    const showSignInVal = !value;
    this.stateService.setSignUpForm(
      showSignInVal ? SignInFormGroup : SignUpFormGroup
    );
    this.stateService.setShowSignIn(showSignInVal);
  }

  logInUser(user: IFormUser, isSignIn: boolean) {
    if (isSignIn) {
      this.authService.signIn(user).subscribe(() => {
        this.navigateToMain();
      });
    } else {
      this.authService.signUp(user).subscribe(() => {
        this.navigateToMain();
      });
    }
  }

  googleSSO() {
    this.authService.googleSSO().subscribe(() => {
      this.navigateToMain();
    });
  }

  private navigateToMain() {
    this.router.navigate(['./main/movies']);
  }
}
