import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'ms-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [ApiService, HttpClient],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value = '';

  constructor(private apiService: ApiService) {}

  searchMovie() {
    this.apiService
      .getMovies(this.value)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
