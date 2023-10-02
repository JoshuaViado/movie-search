import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MovieStateService } from '../../services/state/movie-state.service';
import { MovieStrategyService } from '../../services/strategy/movie-strategy.service';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  let movieStateServiceSpy = jasmine.createSpyObj('MovieStateService', [
    'getLoading',
    'getMovieList',
  ]);
  let movieStrategyServiceSpy = jasmine.createSpyObj('MovieStrategyService', [
    'getPopularMovies',
    'openMovieDetailsModal',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieListComponent],
    }).overrideComponent(MovieListComponent, {
      set: {
        providers: [
          { provide: MovieStateService, useValue: movieStateServiceSpy },
          { provide: MovieStrategyService, useValue: movieStrategyServiceSpy },
        ],
      },
    });
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a movie', () => {
    const movie = {} as IMovie;
    component.selectMovie(movie);
    expect(movieStrategyServiceSpy.openMovieDetailsModal).toHaveBeenCalledWith(
      movie
    );
  });
});
