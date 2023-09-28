import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from '../../interfaces/movie.interface';
import { SearchPosterComponent } from '../search-poster/search-poster.component';

@Component({
  selector: 'ms-search-details-modal',
  standalone: true,
  imports: [CommonModule, SearchPosterComponent],
  templateUrl: './search-details-modal.component.html',
  styleUrls: ['./search-details-modal.component.scss'],
})
export class SearchDetailsModalComponent {
  movie: IMovie;

  constructor(@Inject(MAT_DIALOG_DATA) private data: IMovie) {
    this.movie = this.data;
  }
}
