import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { MainStateService } from '../state/main-state.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable()
export class MainStrategyService {
  constructor(
    private stateService: MainStateService,
    private authService: AuthService,
    private router: Router
  ) {}

  initMainPage() {
    this.authService
      .getUser()
      .pipe(
        map((user) => {
          if (user !== null) {
            return user;
          } else {
            this.router.navigate(['./login']);
            return;
          }
        })
      )
      .subscribe((user) => {
        if (user) {
          this.stateService.setUser(user);
          this.stateService.setLoading(false);
        }
      });
  }

  navigateToAdmin() {
    this.router.navigate(['./main/admin']);
  }

  signOut() {
    this.authService
      .signOut()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['./login']);
      });
  }
}
