import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStartPageComponent } from './search-start-page.component';

describe('SearchStartPageComponent', () => {
  let component: SearchStartPageComponent;
  let fixture: ComponentFixture<SearchStartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchStartPageComponent]
    });
    fixture = TestBed.createComponent(SearchStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
