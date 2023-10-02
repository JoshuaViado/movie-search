import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginStateService } from '../../services/state/login-state.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Genders } from 'src/app/shared/enums/user.enum';
import { MatSelectModule } from '@angular/material/select';
import { LoginStrategyService } from '../../services/strategy/login-strategy.service';

@Component({
  selector: 'ms-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    GoogleSigninButtonModule,
    MatSelectModule,
  ],
  providers: [LoginStateService, LoginStrategyService],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  signUpForm$ = this.loginStateService.getSignUpForm();

  readonly genders = Genders;

  constructor(
    private readonly loginStateService: LoginStateService,
    private readonly loginStrategyService: LoginStrategyService
  ) {}

  onSubmit(form: FormGroup) {
    this.loginStrategyService.signUpUser(form.value);
  }
}
