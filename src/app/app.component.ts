import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './shared/services/api/movie/search-api.service';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SocialLoginModule,
    AngularFireAuthModule,
  ],
  providers: [MovieApiService, AuthService],
})
export class AppComponent {}
