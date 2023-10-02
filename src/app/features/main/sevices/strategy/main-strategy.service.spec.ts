import { TestBed } from '@angular/core/testing';

import { MainStrategyService } from './main-strategy.service';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';

describe('MainStrategyService', () => {
  let service: MainStrategyService;

  let userApiServiceSpy = jasmine.createSpyObj('UserApiService', ['getUser']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MainStrategyService,
        {
          provide: UserApiService,
          useValue: userApiServiceSpy,
        },
      ],
    });
    service = TestBed.inject(MainStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
