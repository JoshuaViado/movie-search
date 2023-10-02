import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePosterComponent } from './movie-poster.component';

describe('MoviePosterComponent', () => {
  let component: MoviePosterComponent;
  let fixture: ComponentFixture<MoviePosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoviePosterComponent],
    });
    fixture = TestBed.createComponent(MoviePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set imageLoading to false', () => {
    component.imageLoaded();
    expect(component.imgLoading).toBeFalse();
  });
});
