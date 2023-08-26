import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImageLoadedDirective } from '../../directives/img-loaded.directive';

@Component({
  selector: 'ms-search-list',
  standalone: true,
  imports: [CommonModule, MatGridListModule, ImageLoadedDirective],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() movieList: IMovie[] = [];
  @Output() selectMovieEvent = new EventEmitter<IMovie>();

  imgLoading = true;
  imgCounter = 0;

  selectMovie(movie: IMovie) {
    this.selectMovieEvent.emit(movie);
  }

  imageLoaded(listLength: number) {
    this.imgCounter++;
    this.imgLoading = this.imgCounter !== listLength;
  }
}
