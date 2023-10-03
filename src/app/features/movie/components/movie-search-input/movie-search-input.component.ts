import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ms-movie-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './movie-search-input.component.html',
  styleUrls: ['./movie-search-input.component.scss'],
})
export class MovieInputComponent {
  @Input() query: string = '';
  @Input() disabled = false;
  @Output() searchMovieEvent = new EventEmitter<string>();

  searchMovie(query: string) {
    this.searchMovieEvent.emit(query);
  }
}
