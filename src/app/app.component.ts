import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchStrategyService } from './search/services/strategy/search-strategy.service';
import { SearchApiService } from './search/services/api/search-api.service';
import { SearchReducerService } from './search/services/reducer/search-reducer.service';
import { SearchStateService } from './search/services/state/search-state.service';
import { IMovie } from './search/interfaces/movie.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
  ],
  providers: [
    SearchStrategyService,
    SearchApiService,
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
