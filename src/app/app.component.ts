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
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { SearchAuthService } from './shared/services/auth/search-auth.service';

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
    HttpClientModule,
    MatDialogModule,
    OAuthModule,
  ],
  providers: [
    SearchStrategyService,
    SearchApiService,
    SearchReducerService,
    SearchStateService,
    OAuthService,
    MatDialog,
  ],
})
export class AppComponent {
  readonly movieList$ = this.stateService.getMovieList();

  constructor(
    private strategyService: SearchStrategyService,
    private stateService: SearchStateService,
    private readonly searchAuthService: SearchAuthService
  ) {}

  searchMovie(query: string) {
    this.strategyService.loadMovieSearch(query);
  }

  selectMovie(movie: IMovie) {
    this.strategyService.openMovieDetailsModal(movie);
  }
}
