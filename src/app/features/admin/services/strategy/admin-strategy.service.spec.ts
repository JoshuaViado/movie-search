import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { AdminStrategyService } from './admin-strategy.service';
import { AdminStateService } from '../state/admin-state.service';
import { MovieApiService } from 'src/app/shared/services/api/movie/search-api.service';
import { IMovieList } from 'src/app/shared/interfaces/movie.interface';
import { of } from 'rxjs';

describe('AdminStrategyService', () => {
  let service: AdminStrategyService;

  let adminStateServiceSpy = jasmine.createSpyObj('AdminStateService', [
    'setMovieList',
    'setLoading',
  ]);

  let movieApiServiceSpy = jasmine.createSpyObj('MovieApiService', [
    'getPopularMovies',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminStrategyService,
        { provide: AdminStateService, useValue: adminStateServiceSpy },
        { provide: MovieApiService, useValue: movieApiServiceSpy },
      ],
    });
    service = TestBed.inject(AdminStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get popular movies', fakeAsync(() => {
    const expectedMovie = { results: [{ title: 'drive' }] } as IMovieList;
    movieApiServiceSpy.getPopularMovies.and.returnValue(of(expectedMovie));

    service.getPopularMovies();
    expect(adminStateServiceSpy.setLoading).toHaveBeenCalledWith(true);
    expect(movieApiServiceSpy.getPopularMovies).toHaveBeenCalled();
    flush();
    expect(adminStateServiceSpy.setMovieList).toHaveBeenCalledWith(
      expectedMovie
    );
    expect(adminStateServiceSpy.setLoading).toHaveBeenCalledWith(false);
  }));
});
