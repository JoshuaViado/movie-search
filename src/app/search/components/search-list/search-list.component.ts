import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'ms-search-list',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() movieList: IMovie[] | null = [];
  @Output() selectMovieEvent = new EventEmitter<IMovie>();

  selectMovie(movie: IMovie) {
    this.selectMovieEvent.emit(movie);
  }
}
