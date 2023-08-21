import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchStrategyService } from '../../services/strategy/search-strategy.service';
import { SearchApiService } from '../../services/api/search-api.service';
import { SearchReducerService } from '../../services/reducer/search-reducer.service';
import { SearchStateService } from '../../services/state/search-state.service';

@Component({
  selector: 'ms-search-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    SearchStrategyService,
    SearchApiService,
    SearchReducerService,
    SearchStateService,
    HttpClient,
  ],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  value = '';

  constructor(private strategyService: SearchStrategyService) {}

  searchMovie(query: string) {
    this.strategyService.loadMovieSearch(query);
  }
}
