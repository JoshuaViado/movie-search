import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPosterComponent } from './search-poster.component';

describe('SearchPosterComponent', () => {
  let component: SearchPosterComponent;
  let fixture: ComponentFixture<SearchPosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchPosterComponent]
    });
    fixture = TestBed.createComponent(SearchPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
