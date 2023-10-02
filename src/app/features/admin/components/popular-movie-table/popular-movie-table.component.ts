import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'ms-popular-movie-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './popular-movie-table.component.html',
  styleUrls: ['./popular-movie-table.component.scss'],
})
export class PopularMovieTableComponent implements OnInit, AfterViewInit {
  @Input() data: IMovie[] = [];
  @Input() page!: number;
  @Input() length!: number;
  @Input() pageSize!: number;
  @Output() tablePageEvent = new EventEmitter<PageEvent>();

  dataSource!: MatTableDataSource<IMovie>;

  @ViewChild(MatSort) sort!: MatSort;

  readonly displayedColumns = ['title', 'release_date', 'popularity'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  updateTablePage(event: PageEvent) {
    this.tablePageEvent.emit(event);
  }
}
