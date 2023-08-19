import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getMovies(searchString: string): Observable<any> {
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${searchString}`;

    return this.httpClient.get(url, {
      headers: {
        'X-RapidAPI-Key': '4c177d4ce9msh12ee753f4a327a3p1124f0jsn1c4bd27d2bc6',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      },
    });
  }
}
