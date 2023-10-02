import { Injectable } from '@angular/core';
import { AdminStateService } from '../state/admin-state.service';
import { SearchApiService } from 'src/app/shared/services/api/movie/search-api.service';
import { take } from 'rxjs';

@Injectable()
export class AdminStrategyService {
  constructor(
    private stateService: AdminStateService,
    private movieApiService: SearchApiService
  ) {}

  getPopularMovies(page?: number) {
    this.stateService.setLoading(true);
    this.movieApiService
      .getPopularMovies(page)
      .pipe(take(1))
      .subscribe((movies) => {
        this.stateService.setMovieList(movies);
        this.stateService.setLoading(false);
      });
  }
}
