import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'ms-main-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatMenuModule],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  @Input() user!: IUser;
  @Output() selectAdminEvent = new EventEmitter<string>();

  selectAdmin(id: string) {
    this.selectAdminEvent.emit(id);
  }
}
