import { TestBed } from '@angular/core/testing';

import { AdminStateService } from './admin-state.service';
import { IMovieList } from 'src/app/shared/interfaces/movie.interface';

describe('AdminStateService', () => {
  let service: AdminStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AdminStateService] });
    service = TestBed.inject(AdminStateService);
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

  it('should get and set value for movie list', () => {
    const value = { results: [{}] } as IMovieList;
    service.setMovieList(value);
    service.getMovieList().subscribe((item) => {
      expect(item).toEqual(value);
    });
  });
});
