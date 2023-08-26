import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ImageLoadedDirective } from '../../directives/img-loaded.directive';

@Component({
  selector: 'ms-search-poster',
  standalone: true,
  imports: [CommonModule, MatIconModule, ImageLoadedDirective],
  templateUrl: './search-poster.component.html',
  styleUrls: ['./search-poster.component.scss'],
})
export class SearchPosterComponent {
  @Input() posterSrc!: string;
  @Input() posterTitle!: string;
  @Input() fadeInAnimation = false;
  @Input() cursorPointer = false;

  imgLoading = true;

  imageLoaded() {
    this.imgLoading = false;
  }
}
