import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInputComponent } from './movie-search-input.component';

describe('MovieInputComponent', () => {
  let component: MovieInputComponent;
  let fixture: ComponentFixture<MovieInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieInputComponent],
    });
    fixture = TestBed.createComponent(MovieInputComponent);
    component = fixture.componentInstance;
    MovieInputComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
