import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStrategyService } from '../../sevices/strategy/main-strategy.service';
import { MainStateService } from '../../sevices/state/main-state.service';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MovieLoadingComponent } from 'src/app/shared/components/search-loading/search-loading.component';

@Component({
  selector: 'ms-main-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    // Components
    MainHeaderComponent,
    MovieLoadingComponent,
  ],
  providers: [MainStrategyService, MainStateService],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  readonly loading$ = this.stateService.getLoading();
  readonly user$ = this.stateService.getUser();

  constructor(
    private strategyService: MainStrategyService,
    private stateService: MainStateService
  ) {}

  ngOnInit(): void {
    this.strategyService.initMainPage();
  }

  selectAdmin() {
    this.strategyService.navigateToAdmin();
  }

  selectSignOut() {
    this.strategyService.signOut();
  }
}
