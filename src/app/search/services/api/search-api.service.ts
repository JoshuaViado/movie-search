import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import {
  IAuthorMovieQuote,
  IMovieByNameResponse,
} from '../../interfaces/movie.interface';

@Injectable()
export class SearchApiService {
  constructor(private httpClient: HttpClient) {}

  searchMovieByName(searchString: string): Observable<IMovieByNameResponse> {
    const url = `https://imdb-search2.p.rapidapi.com/${searchString}`;

    return this.httpClient.get<IMovieByNameResponse>(url, {
      headers: {
        'X-RapidAPI-Key': '829b03737fmsh3d35d98898c721bp1e339ajsn1255c8da66f7',
        'X-RapidAPI-Host': 'imdb-search2.p.rapidapi.com',
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
}
