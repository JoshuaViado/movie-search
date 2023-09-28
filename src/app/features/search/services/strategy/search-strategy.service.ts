import { Injectable } from '@angular/core';
import { SearchStateService } from '../state/search-state.service';
import { SearchApiService } from '../api/search-api.service';
import { Observable, map, take } from 'rxjs';
import { SearchReducerService } from '../reducer/search-reducer.service';
import { IMovie } from '../../interfaces/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { SearchDetailsModalComponent } from '../../components/search-details-modal/search-details-modal.component';
import { Params } from '@angular/router';

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

  getMovieQuotes() {
    this.stateService.setLoading(true);
    this.apiService
      .searchMovieQuotes()
      .pipe(take(1))
      .subscribe((res) => {
        this.stateService.setMovieQuote(res);
        this.stateService.setLoading(false);
      });
  }

  initMainPage(params: Observable<Params>) {
    params.pipe(take(1)).subscribe((param) => {
      const query = param['query'];
      this.stateService.setSearchQuery(query);
      this.loadMovieSearch(query);
    });
  }
}