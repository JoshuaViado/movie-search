import { Injectable } from '@angular/core';
import { SearchStateService } from '../state/search-state.service';
import { SearchApiService } from '../api/search-api.service';
import { Observable, switchMap, take } from 'rxjs';
import { IMovie, IMovieList } from '../../interfaces/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { SearchDetailsModalComponent } from '../../components/search-details-modal/search-details-modal.component';
import { Params } from '@angular/router';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';

@Injectable()
export class SearchStrategyService {
  constructor(
    private stateService: SearchStateService,
    private apiService: SearchApiService,
    private userApiService: UserApiService,
    private dialog: MatDialog
  ) {}

  loadMovieSearch(query: string) {
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
    params
      .pipe(
        take(1),
        switchMap((param) => this.userApiService.getUser(param['id'])),
        switchMap((user) => {
          this.stateService.setUser(user);
          return this.apiService.getPopularMovies();
        })
      )
      .subscribe((popularMovies: IMovieList) => {
        console.log(popularMovies);
        this.stateService.setMovieList(popularMovies);
        this.stateService.setLoading(false);
      });
  }
}
