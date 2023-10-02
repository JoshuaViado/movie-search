import { TestBed } from '@angular/core/testing';

import { UserApiService } from './user-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserApiService],
    });
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
