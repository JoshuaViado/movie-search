import { Injectable } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';

@Injectable()
export class SearchReducerService {
  formatMovieResponse(response: any): IMovie {
    let formattedMovieResponse = {} as any;
    Object.keys(response).forEach((key) => {
      const newKey = key.replace('#', '').toLowerCase();
      formattedMovieResponse[newKey] = response[key];
    });
    return formattedMovieResponse;
  }
}
