import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential, User } from '@firebase/auth-types';
import { IFormUser } from '../../interfaces/user.interface';
import { Observable, from, tap } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private authService: AngularFireAuth) {}

  signUp(user: IFormUser): Observable<UserCredential> {
    return from(
      this.authService.createUserWithEmailAndPassword(user.email, user.password)
    ).pipe(
      tap((userCredential) =>
        userCredential.user?.updateProfile({
          displayName: `${user.firstName} ${user.lastName}`,
        })
      )
    );
  }

  signIn(user: IFormUser): Observable<UserCredential> {
    return from(
      this.authService.signInWithEmailAndPassword(user.email, user.password)
    );
  }

  getUser(): Observable<User | null> {
    return this.authService.authState;
  }

  signOut(): Observable<void> {
    return from(this.authService.signOut());
  }
}
