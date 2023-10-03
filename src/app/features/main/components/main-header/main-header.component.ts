import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'ms-main-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatMenuModule],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  @Input() user!: User;
  @Output() selectAdminEvent = new EventEmitter<void>();
  @Output() selectSignOutEvent = new EventEmitter<void>();

  selectAdmin() {
    this.selectAdminEvent.emit();
  }

  selectSignOut() {
    this.selectSignOutEvent.emit();
  }
}
