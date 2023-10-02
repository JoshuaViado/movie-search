import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';
import { MainStateService } from '../state/main-state.service';

@Injectable()
export class MainStrategyService {
  constructor(
    private userApiService: UserApiService,
    private stateService: MainStateService,
    private router: Router
  ) {}

  initMainPage(params: Observable<Params>) {
    params
      .pipe(
        take(1),
        switchMap((param) => this.userApiService.getUser(param['id']))
      )
      .subscribe((user) => {
        this.stateService.setUser(user);
        this.stateService.setLoading(false);
      });
  }

  navigateToAdmin(id: string) {
    this.router.navigate(['./main', id, 'admin']);
  }
}
