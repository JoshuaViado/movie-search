import { TestBed } from '@angular/core/testing';

import { MovieApiService } from './search-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieApiService', () => {
  let service: MovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MovieApiService],
    });
    service = TestBed.inject(MovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
