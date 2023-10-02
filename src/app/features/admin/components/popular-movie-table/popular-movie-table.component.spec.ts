import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMovieTableComponent } from './popular-movie-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageEvent } from '@angular/material/paginator';

describe('PopularMovieTableComponent', () => {
  let component: PopularMovieTableComponent;
  let fixture: ComponentFixture<PopularMovieTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopularMovieTableComponent, NoopAnimationsModule],
    });
    fixture = TestBed.createComponent(PopularMovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit page event', () => {
    const event = { pageIndex: 1 } as PageEvent;
    spyOn(component.tablePageEvent, 'emit');
    component.updateTablePage(event);
    expect(component.tablePageEvent.emit).toHaveBeenCalledWith(event);
  });
});
