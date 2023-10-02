import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMovieList } from 'src/app/shared/interfaces/movie.interface';

@Injectable()
export class AdminStateService {
  private loading = new BehaviorSubject<boolean>(true);
  private movieList = new BehaviorSubject<IMovieList | undefined>(undefined);

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getMovieList(): Observable<IMovieList | undefined> {
    return this.movieList.asObservable();
  }

  setMovieList(movieList: IMovieList) {
    this.movieList.next(movieList);
  }
}
