import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchListComponent } from '../search-list/search-list.component';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchStateService } from '../../services/state/search-state.service';
import { IMovie } from '../../interfaces/movie.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchLoadingComponent } from '../search-loading/search-loading.component';

@Component({
  selector: 'ms-search-main-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchInputComponent,
    SearchListComponent,
    SearchLoadingComponent,
    RouterModule,
  ],
  templateUrl: './search-main-page.component.html',
})
export class SearchMainPageComponent implements OnInit {
  readonly loading$ = this.stateService.getLoading();
  readonly movieList$ = this.stateService.getMovieList();
  readonly movieQuery$ = this.stateService.getSearchQuery();

  constructor(
    private strategyService: SearchStrategyService,
    private stateService: SearchStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.strategyService.initMainPage(this.route.params);
  }

  searchMovie(query: string) {
    this.strategyService.loadMovieSearch(query);
  }

  selectMovie(movie: IMovie) {
    this.strategyService.openMovieDetailsModal(movie);
  }
}
