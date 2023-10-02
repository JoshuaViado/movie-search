import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLoadingComponent } from './search-loading.component';

describe('MovieLoadingComponent', () => {
  let component: MovieLoadingComponent;
  let fixture: ComponentFixture<MovieLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieLoadingComponent],
    });
    fixture = TestBed.createComponent(MovieLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
