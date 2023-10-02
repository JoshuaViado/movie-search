import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { MainStateService } from '../../sevices/state/main-state.service';
import { MainStrategyService } from '../../sevices/strategy/main-strategy.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  let mainStrategyService = jasmine.createSpyObj('MainStrategyService', [
    'initMainPage',
    'navigateToAdmin',
  ]);

  let mainStateServiceSpy = jasmine.createSpyObj('MainStateService', [
    'getLoading',
    'getUser',
  ]);

  let activatedRouteFake = {
    params: of({ id: 123 }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainPageComponent],
    }).overrideComponent(MainPageComponent, {
      set: {
        providers: [
          { provide: MainStateService, useValue: mainStateServiceSpy },
          { provide: MainStrategyService, useValue: mainStrategyService },
          { provide: ActivatedRoute, useValue: activatedRouteFake },
        ],
      },
    });
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
