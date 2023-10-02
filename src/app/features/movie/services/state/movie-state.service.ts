import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMovieList } from '../../../../shared/interfaces/movie.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class MovieStateService {
  private loading = new BehaviorSubject<boolean>(true);
  private searchQuery = new BehaviorSubject<string>('');
  private movieList = new BehaviorSubject<IMovieList | undefined>(undefined);
  private user = new BehaviorSubject<IUser | undefined>(undefined);

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getMovieQuery(): Observable<string> {
    return this.searchQuery.asObservable();
  }

  setMovieQuery(value: string) {
    this.searchQuery.next(value);
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
