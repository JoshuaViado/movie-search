import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchListComponent } from '../search-list/search-list.component';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchStateService } from '../../services/state/search-state.service';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchLoadingComponent } from '../../../../shared/components/search-loading/search-loading.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'ms-search-main-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchInputComponent,
    SearchListComponent,
    SearchLoadingComponent,
    RouterModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [SearchStrategyService, SearchStateService],
  templateUrl: './search-main-page.component.html',
})
export class SearchMainPageComponent implements OnInit {
  readonly loading$ = this.stateService.getLoading();
  readonly movieList$ = this.stateService.getMovieList();
  readonly movieQuery$ = this.stateService.getSearchQuery();
  readonly user$ = this.stateService.getUser();

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

  selectAdmin(id: string) {
    this.strategyService.navigateToAdmin(id);
  }
}
