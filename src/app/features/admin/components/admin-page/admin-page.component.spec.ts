import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { AdminStateService } from '../../services/state/admin-state.service';
import { AdminStrategyService } from '../../services/strategy/admin-strategy.service';
import { PageEvent } from '@angular/material/paginator';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  let adminStateServiceSpy = jasmine.createSpyObj('AdminStateService', [
    'getLoading',
    'getMovieList',
  ]);
  let adminStrategyServiceSpy = jasmine.createSpyObj('AdminStrategyService', [
    'getPopularMovies',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminPageComponent],
    }).overrideComponent(AdminPageComponent, {
      set: {
        providers: [
          { provide: AdminStateService, useValue: adminStateServiceSpy },
          { provide: AdminStrategyService, useValue: adminStrategyServiceSpy },
        ],
      },
    });
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update table page', () => {
    component.updateTablePage({ pageIndex: 1 } as PageEvent);
    expect(adminStrategyServiceSpy.getPopularMovies).toHaveBeenCalledWith(2);
  });
});
