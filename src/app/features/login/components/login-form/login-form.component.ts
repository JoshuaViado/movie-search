import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginStateService } from '../../services/state/login-state.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LoginStrategyService } from '../../services/strategy/login-strategy.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@Component({
  selector: 'ms-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Angular Material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,

    AngularFireAuthModule,
  ],
  providers: [LoginStateService, LoginStrategyService],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  signUpForm$ = this.loginStateService.getSignUpForm();
  showSignIn$ = this.loginStateService.getShowSignIn();

  constructor(
    private readonly loginStateService: LoginStateService,
    private readonly loginStrategyService: LoginStrategyService
  ) {}

  toggleSignIn(value: boolean) {
    this.loginStrategyService.toggleSignIn(value);
  }

  onSubmit(form: FormGroup, isSignIn: boolean) {
    this.loginStrategyService.logInUser(form.value, isSignIn);
  }

  googleSSO() {
    this.loginStrategyService.googleSSO();
  }
}
