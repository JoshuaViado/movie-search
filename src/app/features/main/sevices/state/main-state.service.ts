import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class MainStateService {
  private loading = new BehaviorSubject<boolean>(true);
  private user = new BehaviorSubject<IUser | undefined>(undefined);

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getUser(): Observable<IUser | undefined> {
    return this.user.asObservable();
  }

  setUser(user: IUser) {
    this.user.next(user);
  }
}
