import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStateService } from '../../services/state/admin-state.service';
import { MatTableModule } from '@angular/material/table';
import { AdminStrategyService } from '../../services/strategy/admin-strategy.service';
import { SearchLoadingComponent } from 'src/app/shared/components/search-loading/search-loading.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PopularMovieTableComponent } from '../popular-movie-table/popular-movie-table.component';

@Component({
  selector: 'ms-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    SearchLoadingComponent,
    MatPaginatorModule,
    PopularMovieTableComponent,
  ],
  providers: [AdminStateService, AdminStrategyService],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  readonly movieList$ = this.stateService.getMovieList();
  readonly loading$ = this.stateService.getLoading();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private stateService: AdminStateService,
    private strategyService: AdminStrategyService
  ) {}

  ngOnInit(): void {
    this.strategyService.getPopularMovies();
  }

  updateTablePage(event: PageEvent) {
    console.log(event);
    this.strategyService.getPopularMovies(event.pageIndex + 1);
  }
}
