import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsModalComponent } from './movie-details-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

describe('MovieDetailsModalComponent', () => {
  let component: MovieDetailsModalComponent;
  let fixture: ComponentFixture<MovieDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieDetailsModalComponent, MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: 1234,
            title: 'amelie',
          } as IMovie,
        },
      ],
    });
    fixture = TestBed.createComponent(MovieDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
