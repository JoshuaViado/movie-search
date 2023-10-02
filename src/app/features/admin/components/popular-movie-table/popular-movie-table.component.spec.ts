import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMovieTableComponent } from './popular-movie-table.component';

describe('PopularMovieTableComponent', () => {
  let component: PopularMovieTableComponent;
  let fixture: ComponentFixture<PopularMovieTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopularMovieTableComponent]
    });
    fixture = TestBed.createComponent(PopularMovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
