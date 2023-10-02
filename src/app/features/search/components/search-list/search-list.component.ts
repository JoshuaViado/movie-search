import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchPosterComponent } from '../search-poster/search-poster.component';
import { SearchStateService } from '../../services/state/search-state.service';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchLoadingComponent } from 'src/app/shared/components/search-loading/search-loading.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'ms-search-list',
  standalone: true,
  imports: [
    CommonModule,
    SearchPosterComponent,
    MatGridListModule,
    SearchLoadingComponent,
    MatDialogModule,
  ],
  providers: [SearchStateService, SearchStrategyService],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  readonly loading$ = this.stateService.getLoading();
  readonly movieList$ = this.stateService.getMovieList();

  readonly posterBaseUrl =
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  constructor(
    private stateService: SearchStateService,
    private strategyService: SearchStrategyService
  ) {}

  ngOnInit(): void {
    this.strategyService.getPopularMovies();
  }

  selectMovie(movie: IMovie) {
    this.strategyService.openMovieDetailsModal(movie);
  }
}
