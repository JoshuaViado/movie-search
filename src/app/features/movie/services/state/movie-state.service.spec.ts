import { TestBed } from '@angular/core/testing';

import { MovieStateService } from './movie-state.service';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { IMovieList } from 'src/app/shared/interfaces/movie.interface';

describe('MovieStateService', () => {
  let service: MovieStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieStateService],
    });
    service = TestBed.inject(MovieStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get and set value for loading', () => {
    service.setLoading(true);
    service.getLoading().subscribe((item) => {
      expect(item).toBeTrue();
    });
  });

  it('should get and set value for movie query', () => {
    service.setMovieQuery('1917');
    service.getMovieQuery().subscribe((item) => {
      expect(item).toEqual('1917');
    });
  });

  it('should get and set value for user', () => {
    const value = { name: 'josh' } as IUser;
    service.setUser(value);
    service.getUser().subscribe((item) => {
      expect(item).toEqual(value);
    });
  });

  it('should get and set value for movie list', () => {
    const value = { results: [{}] } as IMovieList;
    service.setMovieList(value);
    service.getMovieList().subscribe((item) => {
      expect(item).toEqual(value);
    });
  });
});
