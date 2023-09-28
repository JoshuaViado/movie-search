import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchPosterComponent } from '../search-poster/search-poster.component';

@Component({
  selector: 'ms-search-list',
  standalone: true,
  imports: [CommonModule, SearchPosterComponent, MatGridListModule],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() movieList: IMovie[] = [];
  @Output() selectMovieEvent = new EventEmitter<IMovie>();

  selectMovie(movie: IMovie) {
    this.selectMovieEvent.emit(movie);
  }
}
