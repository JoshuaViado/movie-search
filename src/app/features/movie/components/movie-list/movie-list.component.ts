import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';
import { MovieStateService } from '../../services/state/movie-state.service';
import { MovieStrategyService } from '../../services/strategy/movie-strategy.service';
import { MovieLoadingComponent } from 'src/app/shared/components/search-loading/search-loading.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'ms-movie-list',
  standalone: true,
  imports: [
    CommonModule,

    // Angular Material
    MatGridListModule,
    MatDialogModule,

    // Components
    MoviePosterComponent,
    MovieLoadingComponent,
  ],
  providers: [MovieStateService, MovieStrategyService],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  readonly loading$ = this.stateService.getLoading();
  readonly movieList$ = this.stateService.getMovieList();

  constructor(
    private stateService: MovieStateService,
    private strategyService: MovieStrategyService
  ) {}

  ngOnInit(): void {
    this.strategyService.getPopularMovies();
  }

  selectMovie(movie: IMovie) {
    this.strategyService.openMovieDetailsModal(movie);
  }
}
