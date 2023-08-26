import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';
import { Router, RouterModule } from '@angular/router';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchStateService } from '../../services/state/search-state.service';
import { MatIconModule } from '@angular/material/icon';
import { SearchLoadingComponent } from '../search-loading/search-loading.component';

@Component({
  selector: 'ms-search-start-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    SearchInputComponent,
    SearchLoadingComponent,
  ],
  providers: [SearchStrategyService, SearchStateService],
  templateUrl: './search-start-page.component.html',
  styleUrls: ['./search-start-page.component.scss'],
})
export class SearchStartPageComponent implements OnInit {
  readonly movieQuotes$ = this.stateServie.getMovieQuote();
  readonly loading$ = this.stateServie.getLoading();

  constructor(
    private router: Router,
    private strategyService: SearchStrategyService,
    private stateServie: SearchStateService
  ) {}

  ngOnInit(): void {
    this.strategyService.getMovieQuotes();
  }

  searchMovie(query: string) {
    this.router.navigate(['./main', query]);
  }
}
