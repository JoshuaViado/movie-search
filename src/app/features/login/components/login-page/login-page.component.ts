import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'ms-login-page',
  standalone: true,
  imports: [
    CommonModule,

    // Components
    LoginFormComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {}
