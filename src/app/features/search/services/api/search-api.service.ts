import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import {
  IAuthorMovieQuote,
  IMovieList,
} from '../../interfaces/movie.interface';
import { Endpoints } from 'src/app/shared/enums/endpoint.enum';

@Injectable()
export class SearchApiService {
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

  searchMovieQuotes(): Observable<IAuthorMovieQuote> {
    const url = `https://api.api-ninjas.com/v1/quotes?category=movies`;

    return this.httpClient
      .get<IAuthorMovieQuote[]>(url, {
        headers: {
          'X-Api-Key': 'a1XYZQXzKIySvwZ+a+sMPA==leQfBHyYfW0z8IsT',
        },
      })
      .pipe(
        map((res) => res[0]),
        catchError(() => {
          return of({
            quote:
              "In life and in movies, it's a similar challenge, where you have expectations, and you end up in situations that are not meeting your expectations.",
            author: 'Jeff Bridges',
            category: 'movies',
          });
        })
      );
  }

  getPopularMovies(): Observable<IMovieList> {
    const url = `${Endpoints.MovieDb}/trending/movie/day?language=en-US`;
    return this.httpClient.get<IMovieList>(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjljNDQ5NDJlMWRiNDg3Y2U5OTBkYjNiZjNiMGQ1OSIsInN1YiI6IjY1MTk0ZDMwYzUwYWQyMDBhZDgwYzliOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UjDhcDgBNh6CBao9qYwaW8WQTdqLmy3pQ8gffwEl0Uw',
      },
    });
  }
}
