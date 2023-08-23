import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input.component';
import { Router, RouterModule } from '@angular/router';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchStateService } from '../../services/state/search-state.service';

@Component({
  selector: 'ms-search-start-page',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchInputComponent],
  providers: [SearchStrategyService, SearchStateService],
  templateUrl: './search-start-page.component.html',
  styleUrls: ['./search-start-page.component.scss'],
})
export class SearchStartPageComponent implements OnInit {
  readonly movieQuotes$ = this.stateServie.getMovieQuote();

  constructor(
    private router: Router,
    private strategyService: SearchStrategyService,
    private stateServie: SearchStateService
  ) {}

  ngOnInit(): void {
    this.strategyService.getMovieQuotes();
  }

  searchMovie(query: string) {
    this.router.navigate(['./main']);
  }
}
