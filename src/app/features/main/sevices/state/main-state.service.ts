import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@firebase/auth-types';
@Injectable({
  providedIn: 'root',
})
export class MainStateService {
  private loading = new BehaviorSubject<boolean>(true);
  private user = new BehaviorSubject<User | undefined>(undefined);

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getUser(): Observable<User | undefined> {
    return this.user.asObservable();
  }

  setUser(user: User) {
    this.user.next(user);
  }
}
