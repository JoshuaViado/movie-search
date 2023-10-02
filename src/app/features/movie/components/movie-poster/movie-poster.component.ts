import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ImageLoadedDirective } from '../../directives/img-loaded.directive';

@Component({
  selector: 'ms-search-poster',
  standalone: true,
  imports: [CommonModule, MatIconModule, ImageLoadedDirective],
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
})
export class MoviePosterComponent {
  @Input() posterSrc!: string;
  @Input() posterTitle!: string;
  @Input() fadeInAnimation = false;
  @Input() cursorPointer = false;

  imgLoading = true;

  imageLoaded() {
    this.imgLoading = false;
  }
}
