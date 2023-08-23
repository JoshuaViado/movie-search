import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchListComponent } from '../search-list/search-list.component';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchStateService } from '../../services/state/search-state.service';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'ms-search-main-page',
  standalone: true,
  imports: [CommonModule, SearchInputComponent, SearchListComponent],
  templateUrl: './search-main-page.component.html',
})
export class SearchMainPageComponent {
  readonly movieList$ = this.stateService.getMovieList();

  constructor(
    private strategyService: SearchStrategyService,
    private stateService: SearchStateService
  ) {}

  searchMovie(query: string) {
    this.strategyService.loadMovieSearch(query);
  }

  selectMovie(movie: IMovie) {
    this.strategyService.openMovieDetailsModal(movie);
  }
}
