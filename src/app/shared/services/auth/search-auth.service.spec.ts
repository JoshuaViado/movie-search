import { TestBed } from '@angular/core/testing';

import { SearchAuthService } from './search-auth.service';

describe('SearchAuthService', () => {
  let service: SearchAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
