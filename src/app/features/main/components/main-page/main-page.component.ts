import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStrategyService } from '../../sevices/strategy/main-strategy.service';
import { MainStateService } from '../../sevices/state/main-state.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MovieLoadingComponent } from 'src/app/shared/components/search-loading/search-loading.component';

@Component({
  selector: 'ms-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MainHeaderComponent,
    RouterModule,
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
    private stateService: MainStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.strategyService.initMainPage(this.route.params);
  }

  selectAdmin() {
    this.strategyService.navigateToAdmin();
  }

  selectSignOut() {
    this.strategyService.signOut();
  }
}
