import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMovie } from '../../interfaces/movie.interface';

@Injectable()
export class SearchStateService {
  private loading = new BehaviorSubject<boolean>(true);
  private searchQuery = new BehaviorSubject<string | null>(null);
  private movieList = new BehaviorSubject<IMovie[]>([]);

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getSearchQuery(): Observable<string | null> {
    return this.searchQuery.asObservable();
  }

  setSearchQuery(value: string) {
    this.searchQuery.next(value);
  }

  getMovieList(): Observable<IMovie[]> {
    return this.movieList.asObservable();
  }

  setMovieList(value: IMovie[]) {
    this.movieList.next(value);
  }
}
