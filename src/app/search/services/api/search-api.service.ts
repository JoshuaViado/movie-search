import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieByNameResponse } from '../../interfaces/movie.interface';

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
}
