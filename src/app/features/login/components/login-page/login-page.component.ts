import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MatIconModule } from '@angular/material/icon';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';
import { LoginStateService } from '../../services/state/login-state.service';
import { LoginStrategyService } from '../../services/strategy/login-strategy.service';

@Component({
  selector: 'ms-login-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, LoginFormComponent, MatIconModule],
  providers: [UserApiService, LoginStateService, LoginStrategyService],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {}
