import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

describe('AuthService', () => {
  let service: AuthService;
  let angularFireAuthSpy = jasmine.createSpyObj('AngularFireAuth', [
    'createUserWithEmailAndPassword',
    'signInWithEmailAndPassword',
    'signOut',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuthSpy },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
