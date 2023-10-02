import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { MovieStrategyService } from './movie-strategy.service';
import { MovieStateService } from '../state/movie-state.service';
import { MovieApiService } from 'src/app/shared/services/api/movie/search-api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { IMovie, IMovieList } from 'src/app/shared/interfaces/movie.interface';
import { MovieDetailsModalComponent } from '../../components/movie-details-modal/movie-details-modal.component';

describe('MovieStrategyService', () => {
  let service: MovieStrategyService;

  let movieStateServiceSpy = jasmine.createSpyObj('MovieStateService', [
    'setMovieList',
    'setLoading',
  ]);

  let movieApiServiceSpy = jasmine.createSpyObj('MovieApiService', [
    'searchMovieByName',
    'getPopularMovies',
  ]);

  let dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieStrategyService,
        { provide: MovieStateService, useValue: movieStateServiceSpy },
        { provide: MovieApiService, useValue: movieApiServiceSpy },
        { provide: MatDialog, useValue: dialogSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
    service = TestBed.inject(MovieStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movie by search query', fakeAsync(() => {
    const expectedMovie = { results: [{ title: 'your name' }] } as IMovieList;
    movieApiServiceSpy.searchMovieByName.and.returnValue(of(expectedMovie));

    service.getMovieByQuery('your name');
    expect(movieStateServiceSpy.setLoading).toHaveBeenCalledWith(true);
    expect(movieApiServiceSpy.searchMovieByName).toHaveBeenCalledWith(
      'your name'
    );
    flush();
    expect(movieStateServiceSpy.setMovieList).toHaveBeenCalledWith(
      expectedMovie
    );
    expect(movieStateServiceSpy.setLoading).toHaveBeenCalledWith(false);
  }));

  it('should open movie detail modal', () => {
    const movie = { title: 'mean girls' } as IMovie;
    service.openMovieDetailsModal(movie);
    expect(dialogSpy.open).toHaveBeenCalledWith(MovieDetailsModalComponent, {
      data: movie,
    });
  });

  it('should get popular movies', fakeAsync(() => {
    const expectedMovie = { results: [{ title: 'drive' }] } as IMovieList;
    movieApiServiceSpy.getPopularMovies.and.returnValue(of(expectedMovie));

    service.getPopularMovies();
    expect(movieStateServiceSpy.setLoading).toHaveBeenCalledWith(true);
    expect(movieApiServiceSpy.getPopularMovies).toHaveBeenCalled();
    flush();
    expect(movieStateServiceSpy.setMovieList).toHaveBeenCalledWith(
      expectedMovie
    );
    expect(movieStateServiceSpy.setLoading).toHaveBeenCalledWith(false);
  }));

  it('should navigate to admin', () => {
    service.navigateToAdmin('123');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['./admin', '123']);
  });
});
