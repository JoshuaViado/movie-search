import { Injectable } from '@angular/core';
import { SearchStateService } from '../state/search-state.service';
import { SearchApiService } from '../api/search-api.service';
import { map, take } from 'rxjs';
import { SearchReducerService } from '../reducer/search-reducer.service';
import { IMovie } from '../../interfaces/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { SearchDetailsModalComponent } from '../../components/search-details-modal/search-details-modal.component';

@Injectable()
export class SearchStrategyService {
  constructor(
    private stateService: SearchStateService,
    private apiService: SearchApiService,
    private reducerService: SearchReducerService,
    private dialog: MatDialog
  ) {}

  loadMovieSearch(query: string) {
    this.stateService.setLoading(true);
    this.apiService
      .searchMovieByName(query)
      .pipe(
        take(1),
        map((res) =>
          res.description.map((item) =>
            this.reducerService.formatMovieResponse(item)
          )
        )
      )
      .subscribe((movies: IMovie[]) => {
        this.stateService.setMovieList(movies);
        this.stateService.setLoading(false);
      });
  }

  openMovieDetailsModal(movie: IMovie) {
    this.dialog.open(SearchDetailsModalComponent, {
      data: movie,
    });
  }
}
