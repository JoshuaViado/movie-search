import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IAuthorMovieQuote,
  IMovieList,
} from '../../../../shared/interfaces/movie.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class SearchStateService {
  private loading = new BehaviorSubject<boolean>(true);
  private searchQuery = new BehaviorSubject<string>('');
  private movieList = new BehaviorSubject<IMovieList | undefined>(undefined);
  private movieQuote = new BehaviorSubject<IAuthorMovieQuote | undefined>(
    undefined
  );
  private user = new BehaviorSubject<IUser | undefined>(undefined);

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getSearchQuery(): Observable<string> {
    return this.searchQuery.asObservable();
  }

  setSearchQuery(value: string) {
    this.searchQuery.next(value);
  }

  getMovieQuote(): Observable<IAuthorMovieQuote | undefined> {
    return this.movieQuote.asObservable();
  }

  setMovieQuote(value: IAuthorMovieQuote) {
    this.movieQuote.next(value);
  }

  getUser(): Observable<IUser | undefined> {
    return this.user.asObservable();
  }

  setUser(user: IUser) {
    this.user.next(user);
  }

  getMovieList(): Observable<IMovieList | undefined> {
    return this.movieList.asObservable();
  }

  setMovieList(movieList: IMovieList) {
    this.movieList.next(movieList);
  }
}
