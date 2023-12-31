import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';

@Component({
  selector: 'ms-movie-details-modal',
  standalone: true,
  imports: [
    CommonModule,

    // Components
    MoviePosterComponent,
  ],
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
})
export class MovieDetailsModalComponent {
  movie: IMovie;

  constructor(@Inject(MAT_DIALOG_DATA) private data: IMovie) {
    this.movie = this.data;
  }
}
