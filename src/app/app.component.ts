import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './features/search/components/search-input/search-input.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchListComponent } from './features/search/components/search-list/search-list.component';
import { SearchStrategyService } from './features/search/services/strategy/search-strategy.service';
import { SearchApiService } from './features/search/services/api/search-api.service';
import { SearchReducerService } from './features/search/services/reducer/search-reducer.service';
import { SearchStateService } from './features/search/services/state/search-state.service';
import { IMovie } from './features/search/interfaces/movie.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { LoginPageComponent } from './features/login/components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './features/login/components/login-form/login-form.component';
import { MatButtonModule } from '@angular/material/button';
import { UserApiService } from './shared/services/api/user/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchInputComponent,
    SearchListComponent,
    LoginPageComponent,
    LoginFormComponent,
    HttpClientModule,
    MatDialogModule,
    SocialLoginModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [
    SearchStrategyService,
    SearchApiService,
    UserApiService,
    SearchReducerService,
    SearchStateService,
    MatDialog,
  ],
})
export class AppComponent {
  readonly movieList$ = this.stateService.getMovieList();

  constructor(
    private strategyService: SearchStrategyService,
    private stateService: SearchStateService
  ) {}

  searchMovie(query: string) {
    this.strategyService.loadMovieSearch(query);
  }

  selectMovie(movie: IMovie) {
    this.strategyService.openMovieDetailsModal(movie);
  }
}
