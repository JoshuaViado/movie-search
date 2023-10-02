import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInputComponent } from './movie-search-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MovieInputComponent', () => {
  let component: MovieInputComponent;
  let fixture: ComponentFixture<MovieInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieInputComponent, NoopAnimationsModule],
    });
    fixture = TestBed.createComponent(MovieInputComponent);
    component = fixture.componentInstance;
    MovieInputComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit movie query', () => {
    spyOn(component.searchMovieEvent, 'emit');

    component.searchMovie('jaws');
    expect(component.searchMovieEvent.emit).toHaveBeenCalledWith('jaws');
  });
});
