import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ms-search-loading',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './search-loading.component.html',
  styleUrls: ['./search-loading.component.scss'],
})
export class MovieLoadingComponent {}
