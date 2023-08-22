import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { IMovie } from '../../interfaces/movie.interface';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'ms-search-list',
  standalone: true,
  imports: [CommonModule, NgFor, MatGridListModule],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() movieList: IMovie[] | null = [];
}
