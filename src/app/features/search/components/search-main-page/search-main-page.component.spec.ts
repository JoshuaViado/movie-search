import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMainPageComponent } from './search-main-page.component';

describe('SearchMainPageComponent', () => {
  let component: SearchMainPageComponent;
  let fixture: ComponentFixture<SearchMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchMainPageComponent]
    });
    fixture = TestBed.createComponent(SearchMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
