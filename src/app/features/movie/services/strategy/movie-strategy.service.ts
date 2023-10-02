import { Injectable } from '@angular/core';
import { MovieStateService } from '../state/movie-state.service';
import { MovieApiService } from '../../../../shared/services/api/movie/search-api.service';
import { take } from 'rxjs';
import {
  IMovie,
  IMovieList,
} from '../../../../shared/interfaces/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsModalComponent } from '../../components/movie-details-modal/movie-details-modal.component';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';

@Injectable()
export class MovieStrategyService {
  constructor(
    private stateService: MovieStateService,
    private apiService: MovieApiService,
    private userApiService: UserApiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  loadMovieMovie(query: string) {
    this.stateService.setLoading(true);
    this.apiService
      .searchMovieByName(query)
      .pipe(take(1))
      .subscribe((movies: IMovieList) => {
        this.stateService.setMovieList(movies);
        this.stateService.setLoading(false);
      });
  }

  openMovieDetailsModal(movie: IMovie) {
    this.dialog.open(MovieDetailsModalComponent, {
      data: movie,
    });
  }

  getPopularMovies() {
    this.stateService.setLoading(true);
    this.apiService
      .getPopularMovies()
      .pipe(take(1))
      .subscribe((movies) => {
        this.stateService.setMovieList(movies);
        this.stateService.setLoading(false);
      });
  }

  navigateToAdmin(id: string) {
    this.router.navigate(['./admin', id]);
  }
}
