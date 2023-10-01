import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IFormUser, IUser } from 'src/app/shared/interfaces/user.interface';
import { UserApiService } from 'src/app/shared/services/api/user/user-api.service';

@Injectable()
export class LoginStrategyService {
  constructor(
    private readonly userApiService: UserApiService,
    private readonly router: Router
  ) {}

  signUpUser(user: IFormUser) {
    const request: IUser = {
      name: `${user.firstName} ${user.lastName}`,
      gender: user.gender,
      email: user.email,
      status: 'active',
    };
    this.userApiService.signUpUser(request).subscribe((user) => {
      this.router.navigate(['./main', user.id]);
    });
  }
}
