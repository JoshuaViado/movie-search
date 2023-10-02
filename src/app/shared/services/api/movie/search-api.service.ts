import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieList } from '../../../interfaces/movie.interface';
import { Endpoints } from 'src/app/shared/enums/endpoint.enum';

@Injectable()
export class MovieApiService {
  constructor(private httpClient: HttpClient) {}

  searchMovieByName(searchString: string): Observable<IMovieList> {
    const url = `${Endpoints.MovieDb}/search/movie/query?${searchString}&language=en-US`;

    return this.httpClient.get<IMovieList>(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjljNDQ5NDJlMWRiNDg3Y2U5OTBkYjNiZjNiMGQ1OSIsInN1YiI6IjY1MTk0ZDMwYzUwYWQyMDBhZDgwYzliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UjDhcDgBNh6CBao9qYwaW8WQTdqLmy3pQ8gffwEl0Uw',
      },
    });
  }

  getPopularMovies(page = 1): Observable<IMovieList> {
    const url = `${Endpoints.MovieDb}/trending/movie/day?language=en-US&page=${page}`;
    return this.httpClient.get<IMovieList>(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjljNDQ5NDJlMWRiNDg3Y2U5OTBkYjNiZjNiMGQ1OSIsInN1YiI6IjY1MTk0ZDMwYzUwYWQyMDBhZDgwYzliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UjDhcDgBNh6CBao9qYwaW8WQTdqLmy3pQ8gffwEl0Uw',
      },
    });
  }
}
