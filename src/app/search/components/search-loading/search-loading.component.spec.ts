import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoadingComponent } from './search-loading.component';

describe('SearchLoadingComponent', () => {
  let component: SearchLoadingComponent;
  let fixture: ComponentFixture<SearchLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchLoadingComponent]
    });
    fixture = TestBed.createComponent(SearchLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
